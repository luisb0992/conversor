<?php

use App\Http\Controllers\Home\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');


// autenticación
require __DIR__ . '/auth.php';

// perfil
require __DIR__ . '/profile.php';
