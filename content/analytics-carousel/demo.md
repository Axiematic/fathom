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
  # color = "navy"
  
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


<div class="row mx-auto my-auto page-wrapper">
    <div id="products" class="carousel slide h-100 w-100" data-ride="carousel" data-interval="false">
        <div class="carousel-inner" style="height:100%;">
            <div class="carousel-item active h-100">
              <div class="row">
                <div class="col-6 analytics-left" style="height: 70vh;">
                  <img class="d-blocks" src="/media/data-gathering.jpeg">
                </div>
                <div class="col-6 analytics-right">
                  <div class="row" style="padding-top: 3vw; padding-bottom: 1.5vw;">
                    <div class="col-2 product-icon">
                      <img src="/media/data-gathering.svg" alt="Data Gathering & Preparation">
                    </div>
                    <div class="col-10">
                      <h3>Data Gathering + <br> Preparation</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <hr style="width: 100%;">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6"></div>
                    <div class="col-6"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="carousel-item">
              <img class="d-blocks" src="/media/analytics.jpeg">
            </div> -->
        </div>
    <a class="carousel-control-prev" href="#products" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#products" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
    </div>
</div>