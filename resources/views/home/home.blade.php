@extends('layouts.home')

@push('scripts')
  <link href='/css/main.css' rel='stylesheet' type='text/css'>
@endpush

@section('title', 'Coy Coding')



@section('content')
  @include('home/hero')
  @include('nav')
  @include('home/skills')
  @include('home/projects')
  @include('home/about')
@endsection