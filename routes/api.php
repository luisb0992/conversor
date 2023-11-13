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
        Route::get('get-all-exchange-rates', [ApiLayerController::class, 'getAllExchangeRates'])
            ->name('getAllExchangeRates');
    });
