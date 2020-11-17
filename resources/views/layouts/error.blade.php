<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <title>@yield('title')</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link id="favicon" rel="icon" href="/images/logo.png">
      <!-- Fonts -->
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
      <!-- SCRIPTS -->
      <!--webfont loader for stoping FOUT-->
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
      <script>
        WebFont.load({
        	google: {
        		families: ['Economica', 'Rubik']
        	}
        });
      </script>
      <!--Import Stack-->
      @stack('scripts')
    </head>

    <body>
      <div id="app">
        @include('nav')
        <div class="container">
          @yield('content')
        </div>
      </div>
    </body>
</html>