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

<div class="row mx-auto my-auto page-wrapper">
    <div id="clientCarousel" class="carousel slide w-100" data-ride="carousel" data-interval=false data-interval="4500">
        <div class="carousel-inner" role="listbox" style="height:100%;">
            <div class="carousel-item active">
                <div class="carousel-slide" style="background-image: url(/media/andrew.jpeg)">
                    <div class="carousel-slide-text left"> 
                        <h5 class="offset-5vw f-name">Andrew</h5> 
                    </div>
                    <!-- the hover thing -->
                    <div class="carousel-slide-hover slide-hover-one">
                        <div class="slide-inner">
                            <h3>Andrew Collier</h3>
                            <p class="position"><i>Founder +<br> Lead Data Scientist</i></p>
                            <div class="bio">
                                <p>Andrew holds a Masters Degree in Nuclear Physics (North-West University, South Africa), and a PhD in Space Physics (KTH Royal institute of Technology, Sweden).</p>
                                <p>Having worked on all seven continents, and with experience in academic and commercial environments, Andrew has honed his skills in research, data analysis and scientific computing. Equally importantly, he has refined his ability to teach and communicate, ensuring his knowledge and insights are conveyed in an intuitive and easily accessible way to experts and laymen alike. Technical content in plain English.</p>
                                <p>Outside of work, Andrew continues to play with computers and data. He also enjoys cooking and gardening (and the outdoors in general). He’s a keen runner (both road and trail) and has slogged his way to a Comrades Marathon Green Number.</p>
                            </div>
                            <img src="/media/happy.svg" style="width: 15%; float:left; padding-right: 3%; margin-top: 1rem;">
                            <h5 style="color: #ff5534;">Andrew is patient, kind + enthusiastic</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="carousel-slide" style="background-image: url(/media/megan.jpg)">
                    <div class="carousel-slide-text-center"> 
                        <h5 class="offset-5vw f-name">Megan</h5> 
                    </div>
                    <!-- the hover thing -->
                    <div class="carousel-slide-hover slide-hover-two">
                        <div class="slide-inner">
                            <h3>Megan Beckett</h3>
                            <p class="position"><i>Data Scientist</i></p>
                            <div class="bio">
                                <p>The phrase: ‘Scientifically creative; creatively scientific’ aptly describes Megan’s approach to work and life.</p>
                                <p>With both a Masters Degree in Molecular Biology and having worked in an educational technology start-up, Megan brings a unique combination of skills to the world of Data Science, with the ability to delve deeply into data while also maintaining a high level picture.</p>
                                <p>Megan is a firm believer in supporting other women and women-identifying individuals, particularly in traditionally male-dominated fields.</p>
                                <p>Recreationally, Megan is a seasoned runner, continually pushing herself for the next marathon or exploring new trails on the mountain. To engage a different part of her brain, she also enjoys painting, and one day aims to have her own creative studio.</p>
                            </div>
                            <img src="/media/happy-t.svg" style="width: 15%; float:left; padding-right: 3%; margin-top: 1rem">
                            <h5 style="color: #121a25;">Megan is passionate, active + caring</h5>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="carousel-item">
                <div class="carousel-slide carousel-slide-right" style="background-image: url(/media/emma.jpg)">
                    <div class="carousel-slide-text-right"> 
                        <h5 class="offset-5vw f-name">Emma</h5> 
                    </div> -->
                    <!-- the hover thing -->
                    <!-- <div class="carousel-slide-hover slide-hover-three">
                        <div class="slide-inner">
                            <h3>Emma Collier</h3>
                            <p  class="position"><i>Junior Developer +<br> Office Administrator</i></p>
                            <div class="bio">
                                <p>As a junior developer, Emma is involved in all areas of development from design, to implementation, to testing. She also fulfils administrative duties for the business – ensuring projects run smoothly and the team is kept in check! .</p>
                                <p">Fathom believes in developing and nurturing talent, and Emma believes she benefits from this in terms of continuously learning new skills and getting to apply them to interesting projects.</p>
                                <p >Before joining the Fathom team, Emma was employed as a junior draughtsman in a mechanical engineering firm, and outside of work Emma’s passions include oriental dancing, DIY, and hiking with her dog ‘Mopsy’.</p>
                            </div>
                            <img src="/media/surprised-t.svg" style="width: 15%; float:left; padding-right: 3%; margin-top: 1rem">
                            <h5 style="color: white;">Emma is creative, <br>excited + optimistic</h5>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="carousel-item">
                <div class="carousel-slide" style="background-image: url(/media/left.svg)">
                    <div class="carousel-slide-hover slide-hover-three">
                        <p>wtf</p>
                    </div>
                </div>
            </div> -->
            <div class="carousel-item">
                <div class="carousel-slide" style="background-image: url(/media/astrid.jpg)">
                    <div class="carousel-slide-text-right"> 
                        <h5 class="offset-5vw f-name">Astrid</h5> 
                    </div>
                    <!-- the hover thing -->
                    <div class="carousel-slide-hover slide-hover-three">
                        <div class="slide-inner">
                            <h3>Astrid Radermacher</h3>
                            <p class="position"><i>Data Scientist</i></p>
                            <div class="bio">
                                <p>Astrid holds a Masters Degree in Molecular and Cell Biology as well as a PhD in Plant Molecular Biology (Univeristy of Cape Town, South Africa).</p>
                            </div>
                            <img src="/media/happy-t.svg" style="width: 15%; float:left; padding-right: 3%; margin-top: 1rem;">
                            <h5 style="color: #121a25;">Astrid is Lively, wholesome + rigorous</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- <a class="carousel-control-prev" href="#clientCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#clientCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a> -->
    </div>
</div>
