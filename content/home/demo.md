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

<div class="page-wrapper">
  <div class="container-fluid logo-banner tablet-60vh fade-out">
      <div class="spin">
          <div class="row bar-graph-vertical bar-container">
              <div class="bar-ft bar-container">
                    <div class="bar"></div>
              </div>
              <div class="bar-fm bar-container">
                    <div class="bar"></div>
              </div>
              <div class="bar-fb bar-container">
                    <div class="bar"></div>
              </div>
          </div>
      </div>
      <div class="logo-banner-text">
            <div class="fade-In">athom<sup class="TM">TM</sup></div>
      </div>
  </div>
    <div class="home-banner tablet-60vh">
      <div class="home-text slide-r">
        <div class="container-fluid home-text-container pr-0 offset-5vw">
          <div class="row h-100 about-text-row">
              <div class="col-12 align-self-center">
                  {{< figure library="true" src="signature_purple.svg" class="signature-p" >}}
                  <div class="about-text">We believe that making data meaningful is not just about offering robust thinking and outstanding insights. It’s also about providing solutions that are pragmatic and easy to understand – brilliantly visualised, and in plain English. <strong class="orange-text">At Fathom, we call this <i>IQ + EQ.</i></strong></div>
              </div>
          </div>
        </div>
      </div>
    </div>
</div>