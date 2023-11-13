<?php

/**
 * Config para las rutas de la api
 */

namespace App\Http\Api\Config;

class Api
{
  /**
   * Devuelve la url base
   */
  public function baseURl(): string
  {
    return  env('VITE_API_URL');
  }

  /**
   * Devuelve el token
   */
  public function token(): string
  {
    return env('VITE_API_TOKEN');
  }

  /**
   * Devuelve el source
   */
  public function source(): string
  {
    return env('VITE_API_SOURCE');
  }

  /**
   * Devuelve la currency
   */
  public function currency(): string
  {
    return env('VITE_API_CURRENCY');
  }

  /**
   * Devuelve el format
   */
  public function format(): string
  {
    return env('VITE_API_FORMAT');
  }

  /**
   * Devuelve el endpoint base
   */
  public function baseEndpoint(): string
  {
    return $this->baseURl() . '/live?access_key=' . $this->token();
  }
}
