$(document).ready(function() {

	bigBlue();

	$(window).resize(function() {
		bgChange();
	});

	$(window).scroll(function() {

	});

});

function bigBlue() {
	$('p').addClass('bigger');
	console.log('added bigger');
	$('p').click(function() {
		$('p').css('color', 'yellow');
		console.log('added yellow');
	});
}

function bgChange() {
	$('body').addClass('blue');
}