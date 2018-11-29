$(document).ready(function() {
	beeGuess();
});


function beeGuess() {
	
	//var bee = Math.floor(Math.random() * beeArray.length);
	//var stripped = beeArray[bee].toLowerCase();

	var beeArray = ["honeybee", "wasp", "hornet"];

	var rand = Math.floor(Math.random() * 9) + 1;
	console.log("random: " + rand);

	var stripped = "honeybee";
	var bee = 1;

	console.log(beeArray[bee]);
	console.log(stripped);

	if (rand == 1) {
		$('.img').attr("src","images/honeybee/one.png");
		stripped = "honeybee";
		bee = 0;
	} else if (rand == 2) {
		$('.img').attr("src","images/honeybee/two.png");
		stripped = "honeybee";
		bee = 0;
	} else if (rand == 3) {
		$('.img').attr("src","images/honeybee/three.png");
		stripped = "honeybee";
		bee = 0;
	}
	
	if (rand == 4) {
		$('.img').attr("src","images/wasp/one.png");
		stripped = "wasp";
		bee = 1;
	} else if (rand == 5) {
		$('.img').attr("src","images/wasp/two.png");
		stripped = "wasp";
		bee = 1;
	} else if (rand == 6) {
		$('.img').attr("src","images/wasp/three.png");
		stripped = "wasp";
		bee = 1;
	}
	
	if (rand == 7) {
		$('.img').attr("src","images/hornet/one.png");
		stripped = "hornet";
		bee = 2;
	} else if (rand == 8) {
		$('.img').attr("src","images/hornet/two.png");
		stripped = "hornet";
		bee = 2;
	} else if (rand == 9) {
		$('.img').attr("src","images/hornet/three.png");
		stripped = "hornet";
		bee = 2;
	}
		

	//$('body').css('background-color', colorArray[color]);
	$('#submit').click(function() {
		var guess = $('input').val().toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == beeArray[bee]) {
			$('h1').text('That was right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text('That was wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	})

/*	$(document).keypress(function(e) {
		if(e.which ==13){
		    if (stripped == "honeybee") {
			var rand = Math.floor(Math.random() * 3) + 1;
			if (rand == 1) {
				$('.img').attr("src","images/honeybee/one.png");
			} else if (rand == 2) {
				$('.img').attr("src","images/honeybee/two.png");
			} else if (rand == 3) {
				$('.img').attr("src","images/honeybee/three.png");
			}
		} else if (stripped == "wasp") {
			var rand = Math.floor(Math.random() * 3) + 1;
			if (rand == 1) {
				$('.img').attr("src","images/wasp/one.png");
			} else if (rand == 2) {
				$('.img').attr("src","images/wasp/two.png");
			} else if (rand == 3) {
				$('.img').attr("src","images/wasp/three.png");
			}
		} else if (stripped == "hornet") {
			var rand = Math.floor(Math.random() * 3) + 1;
			if (rand == 1) {
				$('.img').attr("src","images/hornet/one.png");
			} else if (rand == 2) {
				$('.img').attr("src","images/hornet/two.png");
			} else if (rand == 3) {
				$('.img').attr("src","images/hornet/three.png");
			}
		}

		var guess = $('input').val().toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == beeArray[bee]) {
			$('h1').text('That was right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text('That was wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
		}
	}); */


}