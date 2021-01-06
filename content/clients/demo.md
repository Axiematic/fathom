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

<div class="page-wrapper bg-white">
  <div class="row mr-0">
      <div class="col-6 bg-white">
        <div class="clients-left tablet-60vh">
          <h3 class="orange-text">What do you<br>want to know?</h3>
          <p class="orange-text">Fathom uses data to help organisations know what they should be doing more or less of. Or doing better. Or next.</p>
          <p>Our services include all aspects of <a href="">analytics</a> (data preparation, analysis, modelling and forecasting). We also conduct a wide range of <a href="">training</a>, in order that you and your staff can become more fluent in working with data yourselves.</p>
          <p>In everything we do, we want you to 'know' - not just that our work has been thoroughly and meticulously conducted, but also explained in a way that you properly understand and know exactly how to use.</p>
          {{< figure library="true" src="signature_purple.svg" class="signature-p pb-0">}}
        </div>
      </div>
      <div class="col-6 container-fluid">
        <div id="clients-carousel" class="carousel slide" data-ride="carousel" data-interval="false">
          <div class="carousel-inner h-100">
            <div class="carousel-item active">
              <div class="slide">
                <!-- slide item -->
              <div class="clients-right tablet-60vh">
                <h3 class="orange-text">Get to know<br>some of our clients</h3>
                <img src="/media/citizen-shipper.png" class="d-block w-50 center mtb-15vh" alt="...">
                <h5 class="purple-text">Citizen Shipper <br>(USA)</h5>
              </div>
              <!-- hover item -->
              <div class="clients-carousel-hover">
                <div class="clients-right-after tablet-60vh">
                  <h3 class="white-text">Get to know<br>some of our clients</h3>
                  <img src="/media/citizen-shipper-small.png" alt="...">
                  <p class="white-text mr-10vw"><em>“They just got it. And then over-delivered.”</em></p>
                  <p class="white-text mr-10vw"><em>“I’m cost-conscious, and Fathom offer very good value.”</em></p>
                  <p class="white-text" >Richard Obousy,<br>CEO, CitizenShipper (USA)</p>
                </div>
              </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="slide">
                <!-- slide item -->
              <div class="clients-right tablet-60vh">
                <h3 class="orange-text">Get to know<br>some of our clients</h3>
                <img src="/media/derivco.png" class="d-block w-50 center mtb-15vh" alt="...">
                <h5 class="purple-text">Derivco <br>(SA)</h5>
              </div>
              <!-- hover item -->
              <div class="clients-carousel-hover">
                <div class="clients-right-after tablet-60vh">
                  <h3 class="white-text">Get to know<br>some of our clients</h3>
                  <img src="/media/derivco-small.png" alt="...">
                  <p class="white-text mr-10vw"><em>“When I have a complicated problem, <strong>they help me solve it so simply that I often wonder why I didn't figure it out myself.</strong>”</em></p>
                  <p class="white-text" >Natasha Singh,<br>Senior Data Analyst / Statistician, Derivco (SA)</p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#clients-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#clients-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
  </div>
</div>