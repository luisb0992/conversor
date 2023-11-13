<?php

use App\Http\Controllers\ApiLayer\ApiLayerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// apilayer
Route::name('apilayer.')
    ->prefix('apilayer')
    ->group(function () {

        // consultar la tasa de todas las monedas por el source predeterminado (USD)
        Route::get('get-all-exchange-rates', [ApiLayerController::class, 'getAllExchangeRates'])
            ->name('getAllExchangeRates');

        // consultar dos monedas especificas
        Route::post('get-exchange-rate-from-to', [ApiLayerController::class, 'getExchangeRateFromTo'])
            ->name('getExchangeRateFromTo');
    });
