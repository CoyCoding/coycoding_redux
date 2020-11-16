@extends('layouts.home')

@push('scripts')

@section('title', 'Coy Coding')

<link href='/css/main.css' rel='stylesheet' type='text/css'>

@section('content')
  @include('home/hero')
  @include('nav')
  @include('home/skills')
  @include('home/projects')
  @include('home/about')
@endsection