

$(document).ready(function(){
	/* Draw Grid */
	var createPad = function(x){
		for (var n = 0; n < x; n++){
	    for (var i = 0; i < x; i++){
	      $('<div class="boxes"></div>').appendTo('#draw');
	    };
	    $('<br>').appendTo('#draw');
		};
	};
	createPad(32);

  /*Turns squares black*/
  $('.boxes').mouseover(function(){
  	$(this).css('background-color','black');
  });

  /*Clears drawing*/
  $('button').click(function(){
  	$('.boxes').css('background-color','white');
  });
});
