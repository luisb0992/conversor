/**
 * Gestion de las tasas de cambio y sus implementaciones
 */

import { ref, toRefs } from "vue";
import { alertError } from "../../../Util/alerts.js";
import { baseAmounts } from "../../../Util/const.js";
import { getExchangeRateFromTo } from "@/Services/Api/endpoints.js";

export const useRate = () => {
    const loaderSelectOne = ref(false);
    const loaderSelectTwo = ref(false);
    const rateSelectOne = ref(0);
    const rateSelectTwo = ref(0);
    const ratesOne = ref([]);
    const ratesTwo = ref([]);

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
     * Calcular ambos tasas de las dos monedas
     */
    const calculateRates = (codeOne, codeTwo) => {
        ratesOne.value = [];
        ratesTwo.value = [];

        if (codeOne === codeTwo) {
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
        calculateRateOne(codeOne, codeTwo).then(() => {
            setTimeout(() => {
                calculateRateTwo(codeTwo, codeOne);
            }, 800);
        });
    };

    return {
        calculateRates,
        ...toRefs({
            loaderSelectOne,
            loaderSelectTwo,
            rateSelectOne,
            rateSelectTwo,
            ratesOne,
            ratesTwo,
        }),
    };
};
