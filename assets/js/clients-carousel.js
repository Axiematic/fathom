$('#clients-carousel .slide').on('mouseover', function() {
    $(this).children('.clients-carousel-hover').addClass('fade-in');
});

$('#clients-carousel .slide').on('mouseleave', function() {
    $(this).children('.clients-carousel-hover').removeClass('fade-in');
});