@push('scripts')
<script>
  const projects = @json($projects->toArray());
  const renderedProjectsCount = 3;
</script>
@endpush

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
          @for ($i = 0; $i < count($projects); $i++)
            <div class="project <?php if($i >= 3) echo 'hidden';?>">
              <div class="square">
                <div class="img-wrapper">
                  <img src="{{ $projects[$i]->img_url }}" width="500" height="312"/>
                </div>
              </div>
              <div class="project-info">
                  <div class="project-details">
                    <h2>{{ $projects[$i]->name }}</h2>
                    <div class="info">
                      <p> {{ $projects[$i]->description }} </p>
                      <div class="skills">
                        @foreach ($projects[$i]->bulletpoints as $bulletpoint)
                          <div class="bullet-point"><i class="fas fa-circle"></i>{{$bulletpoint->text}}</div>
                        @endforeach
                      </div>
                      @isset($projects[$i]->authors_notes)
                        <p><b>Authors Notes: </b>{{$projects[$i]->authors_notes}}</p>
                      @endisset
                    </div>
                    <div class="project-btns">
                      <a target="_blank" href="{{$projects[$i]->github_link}}">
                        <div>
                          source code
                        </div>
                      </a>
                      <a target="_blank" href="{{$projects[$i]->site_link}}">
                        <div>
                          demo
                        </div>
                      </a>
                    </div>
                  </div>
              </div>
            </div
            >
          @endfor
        </div>
        <div class="more-btn">
          <p>more</p>
        </div>
      </div>
    </div>
  </div>
</section>