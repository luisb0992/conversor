<?php

// hacer una petición a la api
it('hace una petición a la api', function () {
    $this->withoutExceptionHandling();

    $this->postJson(route('apilayer.getExchangeRateFromTo'), [
        'from' => 'USD',
        'to' => 'EUR',
    ])->assertOk();
});

// se pueden guardar las peticiones de api en la tabla
// api_requests
it('guarda la petición a la api en la tabla api_requests', function () {

    $this->withoutExceptionHandling();

    $this->postJson(route('apilayer.getExchangeRateFromTo'), [
        'from' => 'USD',
        'to' => 'EUR',
    ])->assertOk();
});
