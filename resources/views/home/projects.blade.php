<section id="projects">
  <div class="container">
    <div class="title">
      <div class="title-bg"></div>
      <div class="line"></div>
      <h2 data-scroll="once">Projects</h2>
    </div>
    <div class="min-wrapper">
      <div class="project-wrapper">
        <div class="projects-grid">
          @foreach ($projects as $project)
            {{$project->name}}
          @endforeach
        </div>
        <div class="more-btn">
          <p>more</p>
        </div>
      </div>
    </div>
  </div>
</section>