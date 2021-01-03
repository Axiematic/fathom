function initTeam() {
    $('#recipeCarousel').carousel({
        //interval: 1000
    })

    
    $('#clientCarousel .carousel-item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
    
    $('.carousel-slide').on('mouseover', function() {
        $(this).children('.carousel-slide-hover').addClass('fade-in');
    });
    
    $('.carousel-slide').on('mouseleave', function() {
        $(this).children('.carousel-slide-hover').removeClass('fade-in');
    });
}

if (window.innerWidth > 450) {
    initTeam();
}