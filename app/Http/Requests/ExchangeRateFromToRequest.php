<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExchangeRateFromToRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'from' => 'required|string|size:3',
            'to' => 'required|string|size:3',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'from.required' => 'La primera moneda es requerida',
            'from.string' => 'La primera moneda debe ser una cadena de texto',
            'from.size' => 'La primera moneda debe tener 3 caracteres',

            'to.required' => 'La segunda moneda es requerida',
            'to.string' => 'La segunda moneda debe ser una cadena de texto',
            'to.size' => 'La segunda moneda debe tener 3 caracteres',
        ];
    }
}
