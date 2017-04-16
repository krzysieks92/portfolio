/*pojawianie sie i znikanie elementow strony*/
window.sr = ScrollReveal();
		sr.reveal('i', {
			reset: true,
			delay: 300,
			distance: 0
		});
		sr.reveal('h1, h2, h3, p, .tile', {
			reset: true,
			delay: 300
		});
	

	$('.fa-angle-down').click(function() {
		$.scrollTo($('#section2'), 500);
	});	
	
/*płynne przewijanie strony*/
$(document).ready(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
 
});

/*przycisk scrollup*/
$(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
	

	

