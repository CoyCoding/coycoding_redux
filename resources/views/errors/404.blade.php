@extends('layouts.error')

@push('scripts')
  <link href='/css/error.min.css' rel='stylesheet' type='text/css'>
@endpush

@section('title', 'Coy Coding - 404')



@section('content')
  <div class="title">
      <div class="title-bg"></div>
      <div class="line"></div>
      <h2 data-scroll="once">404 - Page Not Found</h2>
  </div>
@endsection