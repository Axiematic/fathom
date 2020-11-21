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


<div class="page-wrapper clients" style="background-color: white;">
  <div class="row" style="margin-right: 0;">
      <div class="col-6 analytics-banner">
        <div class="clients-left">
          <h3><strong class="orange-text">Knowing where to find the data.</strong></h3>
          <h3 style="margin-top: 0%;"><strong class="orange-text">Knowing what to do with it.</strong></h3>
        </div>
      </div>
      <div class="col-6 container-fluid">
        <div class="row">
            <div class="col-6 data-gathering service">
              <img src="/media/data-gathering.svg" alt="Data Gathering & Preparation">
              <p><a href="">data gathering + preparation</a></p>
            </div>
          <div class="col-6 modelling service">
            <img src="/media/modelling.svg" alt="Modelling">
            <p><a href="">Modelling</a></p>
          </div>
        </div>
        <div class="row">
          <div class="col-6 applications service">
            <img src="/media/applications.svg" alt="Applications & Reporting">
            <p><a href="">applications + reporting</a></p>
          </div>
          <div class="col-6 consulting service">
            <img src="/media/consulting.svg" alt="Consulting">
            <p><a href="">consulting</a></p>
          </div>
        </div>
      </div>
  </div>
</div>