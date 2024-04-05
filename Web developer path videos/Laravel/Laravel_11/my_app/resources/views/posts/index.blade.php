<x-layout>
    <h1 class="title">Latest Posts</h1>

    <div class="grid grid-cols-2 gap-6">
        @foreach ($posts as $post)
            <div class="card">
                {{-- Title --}}
                <h2 class="font-bold text-xl">{{ $post->title }}</h2>

                {{-- Author and Date --}}
                <div class="text-xs font-light mb-4">
                    <span>Posted {{ $post->created_at->diffForHumans() }} by </span>
                    <a href="" class="text-blue-500 font-medium">USERNAME</a>
                </div>

                {{-- Body --}}
                <div class="text-sm">
                    <p>{{ Str::words($post->body, 15) }}</p>
                </div>
            </div>
        @endforeach
    </div>

    <div>
        {{ $posts->links() }}
    </div>
</x-layout>
