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


<div class="page-inner" style="height: 100%;">
  <div class="row h-100" style="margin-right: 0;">
      <div class="col-6 clients-left">
        <div>
          <h3><strong class="orange-text">What do you<br> want to know?</strong></h3>
          <p class="orange-text">Fathom uses data to help organisations know what they should be doing more or less of. Or doing better. Or next.</p>
          <p>Our services include all aspects of <a href="" style="color: #98a6ad">analytics</a> (data preparation, analysis, modelling and forecasting). We also conduct a wide range of <a href="" style="color: #98a6ad">training</a>, in order that you and your staff can become more fluent in working with data yourselves.</p>
          <p>In everything we do, we want you to 'know' - not just that our work has been thoroughly and meticulously conducted, but also explained in a way that you properly understand and know exactly how to use.</p>
          {{< figure library="true" src="signature_purple.svg" class="signature-p" >}}
        </div>
      </div>
      <div class="col-6 clients-right">
        <h4><strong class="orange-text">Get to know<br> some of our clients</strong></h4>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active" style="vertical-align: middle;">
                  <img src="/media/citizen_shipper.svg" class="d-block w-50 center" style="margin-top:15vh; margin-bottom: 15vh" alt="...">
                  <div class="carousel-caption d-none d-md-block" style="position: revert;">
                      <h5>Citizen Shipper (USA)</h5>
                  </div>
                </div>
                <!-- <div class="carousel-item" style="vertical-align: middle;">
                  <img src="/media/citizen_shipper.svg" class="d-block w-50" alt="...">
                  <p>" I work with charts myself, and they showed me charts I've never seen beforee. <strong>They are very good at visualising data.</strong></p>
                  <p>Richard Obousy, CEO, CitizenShipper (USA)</p>
                </div> -->
              </div>
              <!-- <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a> -->
          </div>
          <ol class="carousel-indicators" style="position: revert;">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          </ol>
    </div>
  </div>
</div>