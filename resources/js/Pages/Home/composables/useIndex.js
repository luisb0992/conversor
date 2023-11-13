/**
 * funcion composable para la gestion de la conversion de monedas
 */
import {
    popularCountries,
    originalPopularCountries,
} from "./../../../Util/const.js";

import { computed, ref, watch, toRefs, onMounted } from "vue";
import { alertError } from "./../../../Util/alerts.js";
import { getExchangeRateFromTo } from "@/Services/Api/endpoints.js";
import { useAttemp } from "./useAttemp.js";
import { useRate } from "./useRate.js";
import { isUserLogged } from "@/Util/auth";
import {
    errorType,
    numberAttemptsExceeded,
    amountEmpty,
    selectionEmpty,
} from "@/Util/messages.js";

const {
    canContinueConverting,
    loadNumberAttempts,
    incrementNumberAttempts,
    checkUser,
} = useAttemp();

const { calculateRates, loaderSelectOne, loaderSelectTwo, ratesOne, ratesTwo } =
    useRate();

export const useExchange = () => {
    const amount = ref(0);
    const selectionOne = ref();
    const selectionTwo = ref();
    const loading = ref(false);
    const rate = ref(0);
    const rateNow = ref(0);
    const isRateVisible = ref(false);

    onMounted(() => {
        selectionOne.value = originalPopularCountries[0];
        selectionTwo.value = originalPopularCountries[1];

        loadNumberAttempts();
        checkUser();
    });

    /**
     * Verificar si el monto ingresado es correcto,
     * la selección uno es correcta
     * la selección dos es correcta
     * y el rate puede ser visible
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
        calculateRates(selectionOne.value.code, selectionTwo.value.code);
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
        if (!canContinueConverting.value) {
            alertError(errorType.error, numberAttemptsExceeded);
            return;
        }

        if (!amount.value) {
            alertError(errorType.error, amountEmpty);
            return;
        }

        if (!selectionOne.value || !selectionTwo.value) {
            alertError(errorType.error, selectionEmpty);
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
                    if (!isUserLogged.value) {
                        incrementNumberAttempts();
                    }
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
            amount, // monto a convertir
            selectionOne, // primera moneda
            selectionTwo, // segunda moneda
            loading, // loading general
            loaderSelectOne, // loading primera columna
            loaderSelectTwo, // loading segunda columna
            rate, // tasa de cambio
            rateNow, // tasa de cambio actual
            ratesOne, // tasa de cambio primera columna
            ratesTwo, // tasa de cambio segunda columna
            isRateVisible, // mostrar o no la tasa de cambio
        }),
        popularCountries, // paises populares
        isTypeDataValidate, // validar si los datos son correctos
        searchCountry, // buscar un pais
        calculateRate, // calcular la tasa de cambio
    };
};
