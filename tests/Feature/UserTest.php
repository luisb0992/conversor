<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(fn () => User::factory()->create());

// usuario existe
it('Existe un usuario')->assertDatabaseHas('users', [
    'id' => 1,
]);

// usuario no autenticado no puede acceder al perfil
it('Usuario no autenticado no puede acceder al perfil', function () {
    $response = $this->get('/profile');

    $response->assertRedirect('/login');
});

// usuario autenticado puede acceder al perfil
it('Usuario autenticado puede acceder al perfil', function () {
    $user = User::find(1);

    $response = $this->actingAs($user)->get('/profile');

    $response->assertStatus(200);
});

// un usuario registrado puede ir al home
it('un usuario registrado puede ir al home', function () {
    $response = $this->post('/register', [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    // hacer login
    $user = User::find(2);
    $response = $this->actingAs($user)->get('/');
    $response->assertStatus(200);
});
