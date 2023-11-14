<?php

namespace App\Http\Controllers\ApiLayer;

use App\Http\Api\Service\ApiLayer;
use App\Http\Controllers\Controller;
use App\Http\Requests\ExchangeRateFromToRequest;

class ApiLayerController extends Controller
{
    public function __construct(
        private ApiLayer $service
    ) {
    }

    /**
     * Obtiene todos los datos de las tasas de cambio
     * de las monedas
     */
    public function getAllExchangeRates(): array
    {
        return $this->service->getAllExchangeRates();
    }


    /**
     * Obtiene la tasa de cambio de dos monedas especificas
     */
    public function getExchangeRateFromTo(ExchangeRateFromToRequest $request): ?float
    {
        return $this->service->getExchangeRateFromTo($request->from, $request->to, $request->user_id);
    }
}
