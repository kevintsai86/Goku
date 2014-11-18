
function resetBtns(delay, callback){
	$('img').css({opacity: 0});
	window.setTimeout(callback, delay);
}

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
