@extends('layouts.main')

@section('content')
    <h1 class="title">Welcome {{ auth()->user()->username }}</h1>
@endsection
