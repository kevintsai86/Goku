/* Javascript file for Image Control */
//

//
//Functions for changing out pictures
//
//Reset function
function resetBtns(delay, callback){
	$('img').css({opacity: 0});
	window.setTimeout(callback, delay);
}
//Display function
function dsplyImg(imgID){
	$('img').css({display:'none'});
	$('#imgDsply'+imgID).css({display:'inline-block'});
	$('#imgDsply'+imgID).animate({opacity:1},600);
}

//Fade Functions *DEFUNCT
/*function fadeLeft(){
	$('img').animate({opacity:0},700,function(){
		$('#imgDsply1').animate({opacity:1},700);
	});
}
function fadeRight(){
	$('img').animate({opacity:0},700,function(){
		dsplyRight();
		$('#imgDsply2').animate({opacity:1},700);
	});
}
function fadeBoth(){
	$('img').animate({opacity:0},700,function(){
		dsplyBoth();
		$('#imgDsply3').animate({opacity:1},700);
	});	
}
function fadeNeither(){
	$('img').animate({opacity:0},700,function(){
		dsplyNeither();
		$('#imgDsply4').animate({opacity:1},700);
	});
}*/

//Slide functions
function slideImg(imgID){
	//positions the element off center
	$('#imgDsply'+imgID).toggleClass('slidePic'+imgID);
	$('img').css({display:'none'});
	$('#imgDsply'+imgID).css({display:'inline-block'});
	//trigger to start slide effect
	$('#slideEvent').trigger('run', [imgID]);
}
// slide event: slide function triggers the event to slide images into position
$('#slideEvent').on('run', function(event, imgID){
	$('#imgDsply'+imgID).css({opacity:''});
	setTimeout(function(){
		$('#imgDsply'+imgID).toggleClass('slidePic'+imgID);
	}, 600);
});

//
//Click events for the Img Control Panel
//
//reset button
$('#resetBtn').click(function(){
	resetBtns(700);
});
//Display radio buttons **Note timing is off when you start hitting buttons in rapid succession
$('#leftRad').click(function(){
	resetBtns(700, function(){
		dsplyImg(1);
	});
});
$('#rightRad').click(function(){
	resetBtns(700, function(){
		dsplyImg(2);
	});
});
$('#bothRad').click(function(){
	resetBtns(700, function(){
		dsplyImg(3);
	});
});
$('#neitherRad').click(function(){
	resetBtns(700, function(){
		dsplyImg(4);
	});
});
//Fade buttons *DEFUNCT
/*$('#leftFade').click(function(){
	fadeLeft();
});
$('#rightFade').click(function(){
	$('img').promise().done(fadeRight());
});
$('#bothFade').click(function(){
	$('img').promise().done(fadeBoth());
});
$('#neitherFade').click(function(){
	$('img').promise().done(fadeNeither());
});*/
//Slide buttons
$('#leftSlide').click(function(){
	resetBtns(700, function(){
		slideImg(1);
	});
});
$('#rightSlide').click(function(){
	resetBtns(700, function(){
		slideImg(2);
	});
});
$('#bothSlide').click(function(){
	resetBtns(700, function(){
		slideImg(3);
	});
});
$('#neitherSlide').click(function(){
	resetBtns(700, function(){
		slideImg(4);
	});
});
