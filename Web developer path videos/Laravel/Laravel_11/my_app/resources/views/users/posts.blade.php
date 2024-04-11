<x-layout>
    {{-- Heading --}}
    <h1 class="title">{{ $user->username }}'s Posts &#9830; {{ $posts->total() }}</h1>

    {{-- User's posts --}}
    <div class="grid grid-cols-2 gap-6">
        @foreach ($posts as $post)
            <x-postCard :post="$post" />
        @endforeach
    </div>

    {{-- Pagination links --}}
    <div>
        {{ $posts->links() }}
    </div>
</x-layout>
