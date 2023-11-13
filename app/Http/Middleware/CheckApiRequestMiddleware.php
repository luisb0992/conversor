<?php

namespace App\Http\Middleware;

use App\Models\ApiRequest;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckApiRequestMiddleware
{
    /**
     * Handle an incoming request.
     *
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // dd(
        //     $request->route()->getPrefix(),
        //     $request->route()->getName(),
        //     // url
        //     $request->fullUrl(),
        // );

        // // ejecutar el save de api request
        // ApiRequest::create(
        //     [
        //         'base_endpoint' => $request->route()->getPrefix(),
        //         'final_endpoint' => $request->route()->getName(),
        //         'source' => $request->source,
        //         'currency' => $request->currency,
        //         'rate' => $request->rate,
        //         'amount' => $request->amount,
        //         'result' => $request->result,
        //         'user_id' => $request->user()->id
        //     ]
        // );

        return $response;
    }
}
