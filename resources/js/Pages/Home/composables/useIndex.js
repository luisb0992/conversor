/**
 * funcion composable para la gestion de la conversion de monedas
 */
import {
    popularCountries,
    originalPopularCountries,
    baseAmounts,
} from "./../../../Util/const.js";

import { computed, ref, watch, toRefs, onMounted } from "vue";
import { alertError } from "./../../../Util/alerts.js";
import { getExchangeRateFromTo } from "@/Services/Api/endpoints.js";

export const useExchange = () => {
    const amount = ref(0);
    const selectionOne = ref();
    const selectionTwo = ref();
    const loading = ref(false);
    const loaderSelectOne = ref(false);
    const loaderSelectTwo = ref(false);
    const rate = ref(0);
    const rateNow = ref(0);
    const ratesOne = ref([]);
    const ratesTwo = ref([]);
    const rateSelectOne = ref(0);
    const rateSelectTwo = ref(0);
    const isRateVisible = ref(false);

    onMounted(() => {
        selectionOne.value = originalPopularCountries[0];
        selectionTwo.value = originalPopularCountries[1];
    });

    /**
     * Verificar si el monto ingresado es correcto,
     * la selección uno es correcta
     * la selección dos es correcta
     */
    const isTypeDataValidate = computed(() => {
        return (
            amount.value &&
            selectionOne.value &&
            selectionTwo.value &&
            isRateVisible.value
        );
    });

    /**
     * Si alguna de las selecciones cambia o el monto
     * se oculta de nuevo el resultado
     * de la tasa de cambio
     */
    watch([selectionOne, selectionTwo], () => {
        noRateVisible();

        // calculamos el rate de ambas columnas
        calculateRates();
    });

    /**
     * Ocultar el resultado de la tasa de cambio
     */
    const noRateVisible = () => {
        isRateVisible.value = false;
    };

    /**
     * Encontrar el pais por el nombre indicado o devolver todos
     */
    const searchCountry = (event) => {
        const query = event.query;

        if (query) {
            popularCountries.value = originalPopularCountries.filter(
                (country) => {
                    const word = query
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "");

                    const name = country.name
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "");

                    return name.toLowerCase().indexOf(word) !== -1;
                }
            );
        } else {
            popularCountries.value = [...originalPopularCountries];
        }
    };

    /**
     * Calcular la tasa según las monedas seleccionadas
     *
     */
    const calculateRate = () => {
        if (!amount.value) {
            alertError("Error", "Por favor ingrese un monto");
            return;
        }

        if (!selectionOne.value || !selectionTwo.value) {
            alertError(
                "Error",
                "Por favor seleccione ambas monedas para la conversión"
            );
            return;
        }

        // devolver la misma tasa si se selecciona la misma moneda
        if (selectionOne.value.code === selectionTwo.value.code) {
            rate.value = amount.value;
            rateNow.value = 1;
            isRateVisible.value = true;
            return;
        }

        // consultar la tasa de cambio
        loading.value = true;
        getExchangeRateFromTo(selectionOne.value.code, selectionTwo.value.code)
            .then((resp) => {
                if (resp.status === 200) {
                    rateNow.value = resp.data;
                    rate.value = amount.value * rateNow.value;
                    rate.value = rate.value.toFixed(2);
                }
            })
            .catch((error) => alertError("Error", error.message))
            .finally(() => {
                loading.value = false;
                isRateVisible.value = true;
            });
    };

    /**
     * Calcular la tasa de la primera columna
     */
    const calculateRateOne = async (codeOne, codeTwo) => {
        loaderSelectOne.value = true;
        return await getExchangeRateFromTo(codeOne, codeTwo)
            .then((resp) => {
                if (resp.status === 200) {
                    rateSelectOne.value = resp.data;
                    baseAmounts.value.forEach((amount) => {
                        const total = amount * rateSelectOne.value;
                        ratesOne.value.push({
                            amount,
                            total: total.toFixed(2),
                        });
                    });
                }
            })
            .catch((error) => alertError("Error", error.message))
            .finally(() => (loaderSelectOne.value = false));
    };

    /**
     * Calcular la tasa de la segunda columna
     */
    const calculateRateTwo = async (codeOne, codeTwo) => {
        loaderSelectTwo.value = true;
        return await getExchangeRateFromTo(codeOne, codeTwo)
            .then((resp) => {
                if (resp.status === 200) {
                    rateSelectTwo.value = resp.data;
                    baseAmounts.value.forEach((amount) => {
                        const total = amount * rateSelectTwo.value;
                        ratesTwo.value.push({
                            amount,
                            total: total.toFixed(2),
                        });
                    });
                }
            })
            .catch((error) => alertError("Error", error.message))
            .finally(() => (loaderSelectTwo.value = false));
    };

    /**
     * Calcular ambos rates
     */
    const calculateRates = () => {
        ratesOne.value = [];
        ratesTwo.value = [];

        if (selectionOne.value.code === selectionTwo.value.code) {
            baseAmounts.value.forEach((amount) => {
                ratesOne.value.push({
                    amount,
                    total: amount.toFixed(2),
                });

                ratesTwo.value.push({
                    amount,
                    total: amount.toFixed(2),
                });
            });
            return;
        }

        // la api no permite ejecuciones múltiples
        // por eso hay que realizar primero un calculo luego el otro
        calculateRateOne(selectionOne.value.code, selectionTwo.value.code).then(
            () => {
                setTimeout(() => {
                    calculateRateTwo(
                        selectionTwo.value.code,
                        selectionOne.value.code
                    );
                }, 500);
            }
        );
    };

    // aplicar torefs a todas las propiedades
    return {
        ...toRefs({
            amount,
            selectionOne,
            selectionTwo,
            loading,
            loaderSelectOne,
            loaderSelectTwo,
            rate,
            rateNow,
            ratesOne,
            ratesTwo,
            isRateVisible,
        }),
        popularCountries,
        isTypeDataValidate,
        searchCountry,
        calculateRate,
    };
};
