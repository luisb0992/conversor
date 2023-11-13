/**
 * Crear acceso a la API para la conversion de monedas a precio actual
// "http://apilayer.net/api/live?access_key=12345&currencies=EUR,GBP,CAD,PLN&source=USD&format=1";
 */

// obtener todas las tasas de cambio por la divisa predeterminada (USD)
export const getAllExchangeRates = async () => {
    return await axios.get(route("apilayer.getAllExchangeRates"));
};

// obtener la tasa de cambio para una divisa especifica
export const getExchangeRate = async (currency) => {
    return await axios.get(
        route("apilayer.getExchangeRate", { currency: currency })
    );
};

// obtener la tasa de cambio de una divisa a otra
export const getExchangeRateFromTo = async (from, to) => {
    return await axios.post(route("apilayer.getExchangeRateFromTo"), {
        from,
        to,
    });
};
