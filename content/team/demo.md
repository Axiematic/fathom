+++
# A Demo section created with the Blank widget.
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/
# Add more sections by duplicating this file and customizing to your requirements.

widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 15  # Order that this section will appear.

title = ""
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  color = "#121a25"
  
  # Background image.
  # image = "home.jpg"  # Name of image in `static/media/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  # image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  # image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # image_parallax = true  # Use a fun parallax-like fixed background effect? true/false
  
  # Text color (true=light or false=dark).
  text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["0", "0", "0", "0"]

[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++


<div class="page-wrapper">
  <div class="container-fluid text-center my-3">
    <div class="row mx-auto my-auto">
        <div id="teamCarousel" class="carousel slide w-100" data-ride="carousel"> 
        <div id="teamCarousel" class="carousel slide w-100 team-carousel" data-interval="false" data-ride="carousel">
            <div class="carousel-inner w-100" role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-4 team-card">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=1">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4 team-card">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=2">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4 team-card">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=3">
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-4 team-card">
                        <div class="card card-body">
                            <img class="img-fluid" src="http://placehold.it/380?text=4">
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev w-auto" href="#teamCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next w-auto" href="#teamCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
</div>