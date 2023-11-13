<?php

/**
 * Modelo de datos para las solicitudes a la api
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiRequest extends Model
{
    protected $table = 'api_requests';

    protected $fillable = [
        'base_endpoint',
        'token',
        'final_endpoint',
        'source',
        'currency',
        'rate',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
