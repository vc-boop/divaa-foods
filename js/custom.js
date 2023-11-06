// on ready function
  $(document).ready(function() {
	"use strict";
	
	
    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


	
	// Main Slider Animation

        (function($) {

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic,#carousel-example-generic2,#carousel-example-generic3,#carousel-example-generic4,#carousel-example-generic5,#carousel-example-generic6,#carousel-example-generic7'),
                $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });


        })(jQuery);
		
		
	
		
		
		$(document).ready(function() {
            $('.lr_index_bog_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
                responsive: {
                    0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:4
					}
                }
            })
        })
		
	
	
});	