<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Psy\CodeCleaner\ReturnTypePass;

class PostController extends Controller implements HasMiddleware
{
    // Adding Auth middleware to all methods except 'index' and 'show'
    public static function middleware(): array
    {
        return [
            new Middleware('auth', except: ['index', 'show']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->paginate(6);

        return view('posts.index', ['posts' => $posts]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // the view is being render in User Dashboard
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate
        $fields = $request->validate([
            'title' => ['required', 'max:255'],
            'body' => ['required']
        ]);

        // Create a post
        Auth::user()->posts()->create($fields);

        // Redirect back to dashboard
        return back()->with('success', 'Your post was created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return view('posts.show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        // Authorizing the action
        Gate::authorize('modify', $post);

        return view('posts.edit', ['post' => $post]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        // Authorizing the action
        Gate::authorize('modify', $post);

        // Validate
        $fields = $request->validate([
            'title' => ['required', 'max:255'],
            'body' => ['required']
        ]);

        // Update the post
        $post->update($fields);

        // Redirect to dashboard
        return redirect()->route('dashboard')->with('success', 'Your post was updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        // Authorizing the action
        Gate::authorize('modify', $post);

        // Delete the post
        $post->delete();

        // Redirect back to dashboard
        return back()->with('delete', 'Your post was deleted!');
    }
}
