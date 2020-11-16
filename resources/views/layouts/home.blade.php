<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <title>@yield('title')</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link id="favicon" rel="icon" href="/images/logo.png">

      <!-- Fonts -->
      <link href='https://fonts.googleapis.com/css?family=Economica&display=swap' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Rubik:300,400,700&display=swap' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">

      <!-- CSS -->

      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      @stack('scripts')
    </head>

    <body>
      <div id="app">
        @yield('content')
      </div>
    </body>
</html>
<script type="text/javascript" src="/js/home/index.js"></script>