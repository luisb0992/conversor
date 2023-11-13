<?php

/**
 * Gestiona los datos procesados y obtenidos por ApiLayer
 */

namespace App\Http\Api\Service;

use App\Http\Api\Config\Api;
use Illuminate\Support\Facades\Http;
use Throwable;

class ApiLayer
{
  public function __construct(
    private Api $api
  ) {
  }

  /**
   * Devuelve todas las monedas con sus respectivas tasas
   */
  public function getAllExchangeRates(): array
  {
    $response = Http::get($this->api->baseEndpoint());

    try {
      return $response->json()['quotes'];
    } catch (Throwable $th) {
      return [];
    }
  }
}
