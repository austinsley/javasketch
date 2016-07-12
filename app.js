

$(document).ready(function(){
	/* Draw Grid */
	var createPad = function(x){
		for (var n = 0; n < x; n++){
	    for (var i = 0; i < x; i++){
	      $('<div class="boxes"></div>').appendTo('#container');
	    };
	    $('<br>').appendTo('#container');
		};
	};
	createPad(32);


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
