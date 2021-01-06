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
        <div class="carousel-inner">
            <div class="carousel-item active h-100">
                <div class="row mr-0">
                    <div class="col-6 analytics-banner tablet-60vh">
                      <div class="clients-left tablet-60vh">
                        <h3><strong class="orange-text">Knowing where to find the data.</strong></h3>
                        <h3 class="mt-0"><strong class="orange-text">Knowing what to do with it.</strong></h3>
                      </div>
                    </div>
                    <div class="col-6 container-fluid service-options tablet-60vh">
                      <div class="row">
                          <div class="col-6 data-gathering service tablet-30vh">
                            <img src="/media/data-gathering.svg" alt="Data Gathering & Preparation">
                            <p><a id="myBtn1" href="javascript:void();">data gathering + preparation</a></p>
                          </div>
                        <div class="col-6 modelling service tablet-30vh">
                          <img src="/media/modelling.svg" alt="Modelling">
                          <p><a id="myBtn2" href="javascript:void();">modelling</a></p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-6 applications service tablet-30vh">
                          <img src="/media/applications.svg" alt="Applications & Reporting">
                          <p><a id="myBtn3" href="javascript:void();">applications + reporting</a></p>
                        </div>
                        <div class="col-6 consulting service tablet-30vh">
                          <img src="/media/consulting.svg" alt="Consulting">
                          <p><a id="myBtn4" href="javascript:void();">consulting</a></p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item h-100">
              <div class="row">
                <div class="col-6 analytics-left tablet-60vh">
                  <img class="d-blocks" src="/media/data-gathering.jpeg">
                </div>
                <div class="col-6 analytics-right bg-purple tablet-60vh">
                  <div class="row pt-3vw">
                    <div class="col-1 product-icon">
                      <img src="/media/data-gathering.svg" alt="Data Gathering & Preparation">
                    </div>
                    <div class="col-11">
                      <h3>Data Gathering + <br> Preparation</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <hr class="w-100">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 analytics-numbers">
                      <h3>01</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>If appropriate data sets aren’t readily available, we can help find and gather them for you.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 analytics-numbers">
                      <h3>02</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>We will then ‘clean’ the data, standardise formats, and generally make it ready for action.</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 analytics-numbers">
                      <h3>03</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>Finally, we’ll organise the clean data in a manner that’s easy and efficient to retrieve and use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item h-100">
              <div class="row">
                <div class="col-6 analytics-left tablet-60vh">
                  <img class="d-blocks" src="/media/modelling.jpeg">
                </div>
                <div class="col-6 analytics-right bg-navy tablet-60vh">
                  <div class="row pt-3vw">
                    <div class="col-1 product-icon">
                      <img src="/media/modelling.svg" alt="Modelling">
                    </div>
                    <div class="col-11">
                      <h3>Modelling</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <hr class="w-100">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 analytics-numbers">
                      <h3>04</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>Of course, data on its own is meaningless – we need to extract intelligence from the data.</p>
                      <p>There are various ways we can do this, depending on the objectives of the project. We are equally adept in almost every kind of optimisation, forecasting and modelling process and technique.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item h-100">
              <div class="row">
                <div class="col-6 analytics-left tablet-60vh">
                  <img class="d-blocks" src="/media/applications.jpeg">
                </div>
                <div class="col-6 analytics-right bg-orange tablet-60vh">
                  <div class="row pt-3vw">
                    <div class="col-1 product-icon">
                      <img src="/media/applications.svg" alt="Applications & Reporting">
                    </div>
                    <div class="col-11">
                      <h3>Applications + <br> Reporting</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <hr class="w-100">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 analytics-numbers">
                    </div>
                    <div class="col-11 analytics-text">
                      <p>Once you know how to get the answers you need from the data and models, what then?</p>
                    </div>
                    <div class="col-1 analytics-numbers">
                      <h3>05</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>Apps can be developed that make the intelligence accessible and useful by allowing users to interact with it easily and in various ways..</p>
                    </div>
                    <div class="col-1 analytics-numbers">
                      <h3>06</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>We can also arrange for reports to be automatically generated weekly, monthly or when activated by a trigger. Essentially, software automatically acquires any necessary data, generates plots, creates a document, and then sends it to specified recipients – without anyone needing to lift a finger.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item h-100">
              <div class="row">
                <div class="col-6 analytics-left tablet-60vh">
                  <img class="d-blocks" src="/media/consulting.jpeg">
                </div>
                <div class="col-6 analytics-right bg-grey tablet-60vh">
                  <div class="row pt-3vw">
                    <div class="col-1 product-icon">
                      <img src="/media/consulting.svg" alt="Data Gathering & Preparation">
                    </div>
                    <div class="col-11">
                      <h3>Consulting</h3>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <hr class="w-100">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-1 analytics-numbers">
                      <h3>01-<br>06?</h3>
                    </div>
                    <div class="col-11 analytics-text">
                      <p>If you don’t know what aspects of Data Science you may need to solve your challenge (or even what any of this means) – fear not. We’ll sit down with you to figure it all out and show you what’s possible.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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