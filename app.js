$(document).ready(function(){

	var createPad = function(x){
		var boxSize = $('#container').width() / x - 2;
		for (var i = 0; i < x; i++){
	    for (var j = 0; j < x; j++){
	      $('<div class="boxes"></div>').appendTo('#container');
	    };
	    $('<div class=lineBrk></div>').appendTo('#container');
		};
		$('.boxes').css('height',boxSize);
		$('.boxes').css('width',boxSize);
	};

	/* Draws initial grid */
	createPad(4);

	/*Buttons*/
	$('#clear').click(function(){
		$('.boxes').css('background-color','black');
	});

	$('#new').click(function(){
		$('#container').empty();
		var newSize = prompt('What size would you like?');
		var checkNewSize = function(size){
			if (isNaN(size)){
				size = prompt("That's not a number, try again.");
				checkNewSize(size);
			}
			else if (size <= 0 || size >= 100){
				size = prompt("That's not a valid size, try again.");
				checkNewSize(size);
			}
			else {createPad(size)};
		};
		checkNewSize(newSize);

		$('.boxes').mouseover(function(){
			$(this).css('background-color','#006bb3');
		});
	});


	/*Colors squares*/
	$('.boxes').mouseover(function(){
		$(this).css('background-color','#006bb3');
	});
});
