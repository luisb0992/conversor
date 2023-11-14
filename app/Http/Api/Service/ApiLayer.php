<?php

/**
 * Gestiona los datos procesados y obtenidos por ApiLayer
 */

namespace App\Http\Api\Service;

use App\Http\Api\Config\Api;
use App\Http\Api\Config\ApiTrait;
use Illuminate\Support\Facades\Http;
use Throwable;

class ApiLayer
{

  use ApiTrait;

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

  /**
   * Devuelve la tasa de cambio de dos monedas especificas
   */
  public function getExchangeRateFromTo(string $from, string $to, int $userID = null): ?float
  {
    $currency = $this->api->currency() . $to;
    $source = $this->api->source() . $from;
    $endpoint = $this->api->baseEndpoint();
    $finalEndpoint = $endpoint . $currency . $source;
    $response = Http::get($finalEndpoint);

    try {

      $rate = $response->json()['quotes'][$from . $to];
      $this->saveApiRequest([
        'final_endpoint' => $finalEndpoint,
        'currency' => $to,
        'source' => $from,
        'rate' => $rate,
        'user_id' => $userID
      ]);

      return $rate;
    } catch (Throwable $th) {
      return null;
    }
  }
}
