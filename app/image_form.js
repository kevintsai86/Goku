/* Javascript file for Image Control */
//
//Global variables
//
var imageID = 0; //for selecting which image to manipulate

//
//Functions for changing out pictures
//
//Reset: Fade out function
function resetBtns(delay, callback){
	$('img').css({opacity: 0});
	window.setTimeout(callback, delay);
}
//Display: Fade in function
function dsplyImg(imgID){
	$('img').css({display:'none'});
	$('#imgDsply'+imgID).css({display:'inline-block'});
	$('#imgDsply'+imgID).animate({opacity:1},600);
}

//Slide functions
function slideImg(imgID){
	//positions the element off center
	$('#imgDsply'+imgID).toggleClass('slidePic'+imgID);
	$('img').css({display:'none'});
	$('#imgDsply'+imgID).css({display:'inline-block'});
	//trigger to start slide effect
	$('#slideEvent').trigger('slideIn', [imgID]);
}
	// slide in event: slide function triggers the event to slide images into position
$('#slideEvent').on('slideIn', function(event, imgID){
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
	resetBtns(600);
});

//Display radio buttons **Note timing is off when you start hitting buttons in rapid succession
$('#1').click(function(){
	resetBtns(600, function(){
		dsplyImg(1);
	});
});
$('#2').click(function(){
	resetBtns(600, function(){
		dsplyImg(2);
	});
});
$('#3').click(function(){
	resetBtns(600, function(){
		dsplyImg(3);
	});
});
$('#4').click(function(){
	resetBtns(600, function(){
		dsplyImg(4);
	});
});

//Slide buttons
$('#leftSlide').click(function(){
	resetBtns(600, function(){
		slideImg(1);
	});
});
$('#rightSlide').click(function(){
	resetBtns(600, function(){
		slideImg(2);
	});
});
$('#bothSlide').click(function(){
	resetBtns(600, function(){
		slideImg(3);
	});
});
$('#neitherSlide').click(function(){
	resetBtns(600, function(){
		slideImg(4);
	});
});
