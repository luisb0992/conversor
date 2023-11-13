<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Home\Services\Util\HomeUtil;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        private HomeUtil $util
    ) {
    }

    /**
     * Devuelve el index del home
     */
    public function index(): Response
    {
        return inertia('Home/Index', [
            'canLogin' => $this->util->getCanLogin(),
            'canRegister' => $this->util->getCanRegister(),
        ]);
    }
}
