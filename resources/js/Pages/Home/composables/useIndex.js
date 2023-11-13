/**
 * funcion composable para la gestion de la conversion de monedas
 */
import {
    popularCountries,
    originalPopularCountries,
} from "./../../../Util/const.js";

import { computed, ref, watch, toRefs } from "vue";
import { alertError } from "./../../../Util/alerts.js";
import { getExchangeRateFromTo } from "@/Services/Api/endpoints.js";

export const useExchange = () => {
    const amount = ref(0);
    const selectionOne = ref();
    const selectionTwo = ref();
    const loading = ref(false);
    const rate = ref(0);
    const rateNow = ref(0);
    const isRateVisible = ref(false);

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

    // aplicar torefs a todas las propiedades
    return {
        ...toRefs({
            amount,
            selectionOne,
            selectionTwo,
            loading,
            rate,
            rateNow,
            isRateVisible,
        }),
        popularCountries,
        isTypeDataValidate,
        searchCountry,
        calculateRate,
    };
};
