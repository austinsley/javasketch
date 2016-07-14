$(document).ready(function(){
	/* Draw Grid */

	var createPad = function(x){
		var boxSize = $('#container').width() / x - 2;
		for (var i = 0; i < x; i++){
	    for (var j = 0; j < x; j++){
	      $('<div class="boxes"></div>').appendTo('#container');
	    };
	    $('<br>').appendTo('#container');
		};
		$('.boxes').css('height',boxSize);
		$('.boxes').css('width',boxSize);
	};

	createPad(4);


	/*Clears drawing*/
	$('button').click(function(){
		$('#container').empty();
		createPad(prompt('What size would you like?'));
		$('.boxes').mouseover(function(){
			$(this).css('background-color','black');
		});
	});


	/*Turns squares black*/
	$('.boxes').mouseover(function(){
		$(this).css('background-color','black');
	});
});
