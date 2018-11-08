$(document).ready(function() {
    // run function on initial page load
	demoFunction();
	// vPosH1();

	// run function on resize of the window
    $(window).resize(function() {
      // vPosH1();
    });

    // run function on scroll
    $(window).scroll(function() {

    });
});

// mouse event link https://api.jquery.com/category/events/mouse-events/
function demoFunction() {
	$('.jqClick').click(function() {
		$('.header').toggleClass('bigger');
		// $('.header').css('font-size', '200px')
	})
	$('.jqHover').hover(function() {
		$("#numberFive").toggleClass('redBG');
	})
}

// can ignore this if you want
function vPosH1() {
	var h1H = $('.header').height();
	var wH = $(window).height();
	var tP = ((wH - h1H) / 2);
	$('.header').css('padding-top', tP);
	console.log(h1H);
	console.log(wH);
	console.log(tP);
}