<x-layout>

    <div class="card">

        {{-- Session Messages --}}
        @if (session('message'))
            <x-flashMsg msg="{{ session('message') }}" />
        @endif

        <h1 class="title">Please verify your email through the email we've sent you.</h1>

        <p class="mb-4">Didn't get the email?</p>
        <form action="{{ route('verification.send') }}" method="post">
            @csrf

            <button class="btn">Send the email verification again</button>
        </form>

    </div>
</x-layout>
