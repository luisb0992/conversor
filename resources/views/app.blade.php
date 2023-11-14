<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    {{--  favicon  --}}
    {{--  <link rel="icon" href="./../images/favicon/favicon-32x32.png'" type="image/png" />  --}}
    <link rel="shortcut icon" href="{{ Vite::asset('resources/images/favicon/favicon-32x32.png') }}" type="image/x-icon">

    {{--  Fonts  --}}

    <!-- Scripts -->
    @routes
    @inertiaHead
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
</head>

<body>
    @inertia
</body>

</html>
