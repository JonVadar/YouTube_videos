<?php

namespace App\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PostPolicy
{
    // Authorize the action if User owns the Post
    public function modify(User $user, Post $post) : bool 
    {
        return $user->id === $post->user_id;
    }
}
