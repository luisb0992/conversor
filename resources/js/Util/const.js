/**
 * Constantes de la aplicación
 */

import { ref } from "vue";

/**
 * Paises populares para la conversion de monedas
 */
export const popularCountries = ref([
    {
        name: "Dólar estadounidense",
        code: "USD",
    },
    {
        name: "Euro",
        code: "EUR",
    },
    {
        name: "Libra esterlina",
        code: "GBP",
    },
    {
        name: "Yen japonés",
        code: "JPY",
    },
    {
        name: "Dólar canadiense",
        code: "CAD",
    },
    {
        name: "Dólar australiano",
        code: "AUD",
    },
    {
        name: "Franco suizo",
        code: "CHF",
    },
    {
        name: "Yuan chino",
        code: "CNY",
    },
    {
        name: "Rand sudafricano",
        code: "ZAR",
    },
]);

/**
 * copia original de los paises populares
 */
export const originalPopularCountries = JSON.parse(
    JSON.stringify(popularCountries.value)
);

/**
 * Array base para calcular 10 montos diferentes
 * 1, 5, 10, 25, 50, 75, 100, 150, 200, 300
 */
export const baseAmounts = ref([1, 5, 10, 25, 50, 75, 100, 150, 200, 300]);
