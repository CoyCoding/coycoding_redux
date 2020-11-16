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
          @foreach ($projects->reverse() as $project)
            <div class="project">
              <div class="square">
                <div class="img-wrapper">
                  <img src="{{ $project->img_url }}"/>
                </div>
              </div>
              <div class="project-info">
                  <div class="project-details">
                    <h2>{{ $project->name }}</h2>
                    <div class="info">
                      <p> {{ $project->description }} </p>
                      <div class="skills">
                        @foreach ($project->bulletpoints as $bulletpoint)
                          <div class="bullet-point"><i class="fas fa-circle"></i>{{$bulletpoint->text}}</div>
                        @endforeach
                      </div>
                    </div>
                    <div class="project-btns">
                      <a target="_blank" href="{{$project->github_link}}">
                        <div>
                          source code
                        </div>
                      </a>
                      <a target="_blank" href="{{$project->site_link}}">
                        <div>
                          demo
                        </div>
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          @endforeach
        </div>
      </div>
    </div>
  </div>
</section>