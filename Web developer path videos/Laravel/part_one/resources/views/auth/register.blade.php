@extends('layouts.main')

@section('content')
    <h1 class="title">Create a new account</h1>

    <form action="{{ route('register') }}" method="POST" class="max-w-screen-md mx-auto">
        @csrf

        <div class="mb-4">
            <input type="text" class="input @error('username') ring-red-500 @enderror" placeholder="Username"
                name="username" value="{{ old('username') }}">
            @error('username')
                <p class="error">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-4">
            <input type="text" class="input @error('email') ring-red-500 @enderror" placeholder="Email" name="email" value="{{ old('email') }}">
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
            <input type="password" class="input @error('password') ring-red-500 @enderror" placeholder="Confirm Password"
                name="password_confirmation">
        </div>

        <button class="btn">Register</button>
    </form>
@endsection
