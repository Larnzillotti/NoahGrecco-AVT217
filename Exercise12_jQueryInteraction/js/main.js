$(document).ready(function() {
    // run function on initial page load
	demoFunction();
	jqCoordinates();
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

function jqCoordinates() {

	var leaveCount = 0;

	$('.box').mousemove(function( e ) {
		var offset = $(this).offset();
  		var relativeX = (e.pageX - offset.left);
  		var relativeY = (e.pageY - offset.top);
  		var windowWidth = $(window).width();
 		var windowHeight = $(window).height();
  		var simpleWidth = ((relativeX / windowWidth) * 100).toFixed(2);
		var simpleHeight = ((relativeY / windowHeight) * 100).toFixed(2);
  		$('.coordinates').text("X: " + simpleWidth + "  Y: " + simpleHeight);
  	});
  		
	$('.box').click(function( e ) {
		var offset = $(this).offset();
  		var relativeX = (e.pageX - offset.left);
  		var relativeY = (e.pageY - offset.top);
  		var windowWidth = $(window).width();
 		var windowHeight = $(window).height();
  		var simpleWidth = ((relativeX / windowWidth) * 100).toFixed(2);
		var simpleHeight = ((relativeY / windowHeight) * 100).toFixed(2);
		var Red_Value = simpleWidth * 2.55;
		var Blue_Value = simpleHeight * 2.55;
  		$('.box').css("background-color", "rgb(" + Red_Value + ", 0, " + Blue_Value + ")");
	});

	$('.box').mouseleave(function( e ) {
		
		if (leaveCount == 1) {
			$('.header').text("Come back");
			leaveCount = 2;
		} else if (leaveCount == 2) {
			$('.header').text("I miss you already");
			leaveCount = 3;
		} else if (leaveCount == 3) {
			$('.header').text("It's so cold");
			leaveCount = 4;
		} else if (leaveCount == 4) {
			$('.header').text("Where do you go without me?");
			leaveCount = 0;
		} else {
			$('.header').text("Where did you go?");
			leaveCount = 1;
		}
	});
}
