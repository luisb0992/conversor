/**
 * funcion composable para la gestion de la conversion de monedas
 */
import {
    popularCountries,
    originalPopularCountries,
} from "./../../../Util/const.js";

import { ref } from "vue";
import { alertError } from "./../../../Util/alerts.js";

export const useExchange = () => {
    const amount = ref(0);
    const selectionOne = ref();
    const selectionTwo = ref();
    const rate = ref(0);

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

        // const calc = selectionOne.value.rate / selectionTwo.value.rate;
        // rate.value = calc.toFixed(2);
        console.log(rate.value);
        console.log(amount.value);
    };

    return {
        amount, // monto ingresado
        calculateRate, // calcular tasa
        popularCountries, // paises populares
        rate, // tasa de cambio
        searchCountry, // buscar pais
        selectionOne, // selección del pais uno
        selectionTwo, // selección del pais dos
    };
};
