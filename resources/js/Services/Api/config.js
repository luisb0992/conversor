/**
 * Crear acceso a la API para la conversion de monedas a precio actual
 */

// consultar la api
export const getAllExchangeRates = async () => {
    const resp = await axios.get(route("apilayer.getAllExchangeRates"));
    return resp.data;
};

// "http://apilayer.net/api/live?access_key=70f0b72fef90978831bf2bbf391f34f3&currencies=EUR,GBP,CAD,PLN&source=USD&format=1";
