<?php

/**
 * Gestión de servicios para el home
 */

namespace App\Http\Controllers\Home\Services\Util;

use Illuminate\Support\Facades\Route;

class HomeUtil
{
  /**
   * Devuelve si se puede loguear
   */
  public function getCanLogin(): bool
  {
    return Route::has('login');
  }

  /**
   * Devuelve si se puede registrar
   */
  public function getCanRegister(): bool
  {
    return Route::has('register');
  }
}
