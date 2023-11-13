<?php

namespace App\Http\Controllers\ApiLayer;

use App\Http\Api\Service\ApiLayer;
use App\Http\Controllers\Controller;

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
}
