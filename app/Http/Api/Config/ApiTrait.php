<?php

/**
 * gestiona funcionalidades extra para la api
 */

namespace App\Http\Api\Config;

use App\Models\ApiRequest;
use App\Http\Api\Config\Api;

trait ApiTrait
{

  public function __construct(
    private Api $api
  ) {
  }


  /**
   * Guarda un registro de la solicitud a la api exitosa
   */
  public function saveApiRequest(array $data): ApiRequest
  {
    $data['base_endpoint'] = $this->api->baseURl();
    $data['token'] = $this->api->token();

    return ApiRequest::create($data);
  }
}
