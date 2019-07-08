var swiper = new Swiper('.swiper-container', {
    slidesPerView:4.3,
    
    autoplay: {
        delay: 1, 
    }, 
    freeMode: true,
    speed: 5000,
    breakpoints:{
        767:{
            slidesPerView:1,
        }
    },
    loop: true,

});


/* 01 - Smooth Scroll Settings  */

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


$(document).ready(function(){
    $('.artists').each(function(){
        var $bgobj = $(this); // assigning the object
        var $window = $(window);
        $window.scroll(function() {
            var yPos = -(($window.scrollTop()-4500) / 9); 
            
            // Put together our final background position
            var coords = '90% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});

