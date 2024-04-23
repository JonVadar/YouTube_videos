<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', 'posts');

// Posts Routes
Route::resource('posts', PostController::class);

// User Posts Route
Route::get('/{user}/posts', [DashboardController::class, 'userPosts'])->name('posts.user');

// Routes for authenticated users
Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('verified')->name('dashboard');

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Email Verification Notice route
    Route::get('/email/verify', [AuthController::class, 'verifyEmailNotice'])->name('verification.notice');

    // Email Verification Handler route
    Route::get('/email/verify/{id}/{hash}', [AuthController::class, 'verifyEmailHandler'])->middleware('signed')->name('verification.verify');

    // Resending the Verification Email route
    Route::post('/email/verification-notification', [AuthController::class, 'verifyEmailResend'])->middleware('throttle:6,1')->name('verification.send');
});

// Routes for guest users
Route::middleware('guest')->group(function () {
    Route::view('/register', 'auth.register')->name('register');
    Route::post('/register', [AuthController::class, 'register']);

    Route::view('/login', 'auth.login')->name('login');
    Route::post('/login', [AuthController::class, 'login']);
});
