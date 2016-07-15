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
var color;
var col;
var colorChoice;

var updateColor = function(){
	col = document.getElementsByName('color');
	for(var i = 0; i < col.length; i++){
			if(col[i].checked){
					colorChoice = col[i].value;
			}
	};
	switch(colorChoice) {
		case 'Red':
			color = '#f30';
			break;
		case 'Green':
			color = '#3c3';
			break;
		case 'Blue':
			color = '#06f';
			break;
	};
};

$(document).ready(function(){
	/* Draws initial grid */
	updateColor();
	createPad(4);

	/*Reset buttons*/
	$('#clear').click(function(){
		$('.boxes').css('background-color','black');
	});

	$('#new').click(function(){
		$('#container').empty();
		var newSize = prompt('What size would you like? 100 > x > 1');
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
			$(this).css('background-color',color);
		});
	});

	$('.boxes').mouseover(function(){
		$(this).css('background-color',color);
	});

	$('input').click(function(){
		console.log(colorChoice);
		updateColor();
		$('#container').css('border-color',color);
	});

});
