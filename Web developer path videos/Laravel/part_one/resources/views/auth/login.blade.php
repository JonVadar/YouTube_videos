@extends('layouts.main')

@section('content')
    <h1 class="title">Login to your account</h1>

    <form action="" method="POST" class="max-w-screen-md mx-auto">
        @csrf

        <div class="mb-4">
            <input type="text" class="input @error('email') ring-red-500 @enderror" placeholder="Email" name="email"
                value="{{ old('email') }}">
            @error('email')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-4">
            <input type="password" class="input @error('password') ring-red-500 @enderror" placeholder="Password"
                name="password">
            @error('password')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-4">
            <input type="checkbox" name="remember" id="remember">
            <label for="remember">Remember me</label>
        </div>

        @error('failed')
            <p class="error mb-4">{{ $message }}</p>
        @enderror

        <button class="btn">Login</button>
    </form>
@endsection
