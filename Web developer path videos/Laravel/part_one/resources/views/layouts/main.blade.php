<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ env('APP_NAME') }}</title>
    @vite('resources/css/app.css')
</head>

<body>
    <header class="bg-zinc-900 text-white">
        <nav class="flex items-center justify-between p-4 max-w-screen-lg mx-auto">
            <a href="{{ route('home') }}" class="nav-link">Home</a>

            @guest
                <div class="flex items-center gap-2">
                    <a href="{{ route('login') }}" class="nav-link">Login</a>
                    <a href="{{ route('register') }}" class="nav-link">Register</a>
                </div>
            @endguest

            @auth
                <div class="flex items-center gap-2">
                    <a href="{{ route('dashboard') }}" class="nav-link">Dashboard</a>
                    <form action="{{ route('logout') }}" method="POST">
                        @csrf
                        <button onclick="return confirm('Are you sure?')" class="nav-link">Logout</button>
                    </form>
                </div>
            @endauth
        </nav>
    </header>

    <main class="p-8 max-w-screen-lg mx-auto">
        @yield('content')
    </main>

</body>

</html>
