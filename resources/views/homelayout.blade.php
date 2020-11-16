<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <title>@yield('title')</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href='https://fonts.googleapis.com/css?family=Economica&display=swap' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Rubik:300,400,700&display=swap' rel='stylesheet' type='text/css'>
      <link href='../css/main.css' rel='stylesheet' type='text/css'>
      <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
      <link id="favicon" rel="icon" href="/images/logo.png">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        <!-- Fonts -->
    </head>

    <body>
      <div id="app">
        <section id="hero">
          <div class="background-screen">
            <div class="background-color">
            </div>
          </div>
          <div class="hero">
            <div class="star html">
              <i class="fas fa-circle"></i>
              <h6>HTML</h6>
            </div>
            <div class="star css">
              <i class="fas fa-circle"></i>
              <h6>CSS</h6>
            </div>
            <div class="star js">
              <i class="fas fa-circle"></i>
              <h6>Javascript</h6>
            </div>
            <div class="star node">
              <i class="fas fa-circle"></i>
              <h6>Node.js</h6>
            </div>
            <div class="star sql">
              <i class="fas fa-circle"></i>
              <h6>SQL</h6>
            </div>
            <div class="circle-wrapper">
              <div class="c1 circle">

              </div>
              <div class="c2 circle">

              </div>
              <div class="c3 circle">

              </div>
              <div class="c4 circle">

              </div>
              <div class="c5 circle">

              </div>
              <div class="c6 circle">

              </div>
              <div class="c7 circle">

              </div>
            </div>
            <div class="title">
              <h1> Coy</h1>
              <h1> Cod1ng</h1>
            </div>
          </div>
          <div class="sidebar">
          </div>
        </section>
        @include('nav')
        @include('home/skills')
        @include('home/projects')
        <section id="about">
          <div class="container">

            <div class="title">
              <div class="title-bg">

              </div>
              <div class="line">

              </div>
              <h2 data-scroll="once">About Me</h2>
            </div>
            <div class="min-wrapper">


              <div class="about-grid">
                <div class="text">
                  <h3>Matt Coy</h3>
                  <h4>Full Stack Developer</h4>
                  <p>
                    Hi, nice to meet you. My name is <b>Matt Coy</b> and I'm a <b>Full Stack Web Developer</b>.
                    A bit redundant, but hey where I come from thats called good SEO. Jokes aside, technology is
                    my greatest passion in life. Whether it be Front-end with HTML, CSS and javascript or
                    Back-end with PHP or Node.js I can always find my groove because I study the concepts and not just the language.

                  </p>
                </div>
                <div class="link-cube github">
                  <a rel="noopener noreferrer" href="https://www.github.com/coycoding" title="Share on Facebook" target="_blank">
                    <img src="/images/git.svg"/>
                  </a>
                  <img src="/images/triangle.svg"/>
                </div>
                <div class="link-cube linkedin">
                  <a rel="noopener noreferrer" href="https://www.linkedin.com/in/matt-coy-a23372103/" title="Share on Facebook" target="_blank">
                    <img src="/images/linkedin.svg"/>
                  </a>
                  <img src="/images/triangle.svg"/>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
</html>
<script type="text/javascript" src="/js/home/index.js"></script>