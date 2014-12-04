/* Javascript file for Image Control */
//
//Global variables
//
var imageID = 'err'; //for selecting which image to manipulate

//
//Functions for changing out pictures
//
//Error: didn't pick a direction
function noPicks(){
	if(imageID == 'err'){
		alert('No image selected');
	}
}
//Reset: Fade out function
function fadeOutImg(delay, callback){
	$('img').css({opacity: 0});
	window.setTimeout(callback, delay);
}
//Display: Fade in function
function fadeInImg(imgID){
	$('img').css({display:'none'});
	$('#imgDsply'+imgID).css({display:'inline-block'});
	$('#imgDsply'+imgID).animate({opacity:1},600);
}

//Slide functions
function slideOutImg(imgID, delay, callback){
	var slideway=0;
	if(imgID==1)
		slideway=2;
	else if(imgID==2)
		slideway=1;
	else
		slideway=imgID;
	// console.log(imgID+' should slide in direction '+slideway);
	$('#imgDsply'+imgID).toggleClass('slidePic'+slideway);
	fadeOutImg();
	window.setTimeout(callback, delay);
}
function slideInImg(imgID){
	//positions the element off center
	$('img').css({display:'none'});
	$('#imgDsply'+imgID).toggleClass('slidePic'+imgID);
	$('#imgDsply'+imgID).css({display:'inline-block'});
	//trigger to start slide effect
	$('#slideInEvent').trigger('slideIn', [imgID]);
	console.log('slideInImg function complete');
}
	// slide in event: slideIn function triggers the event to slide images into position
$('#slideInEvent').on('slideIn', function(event, imgID){
	$('#imgDsply'+imgID).css({opacity:''});
	setTimeout(function(){
		$('#imgDsply'+imgID).removeClass('slidePic'+imgID);
	}, 650);
	console.log('Slide In Event complete');
});

//
//Click events for the Img Control Panel
//
//check radio button has been selected
$('.btn').click(function(){
	noPicks();
});
//reset button
$('#resetBtn').click(function(){
	$('img').css({opacity:'', display:''});
});

//Select Image
$('.radioImgBtn').click(function(){
	imageID = this.id;
});

//Fade In/out buttons **Note timing is off when you start hitting buttons in rapid succession
$('#fadeBtn').click(function(){
	fadeOutImg(650, function(){
		fadeInImg(imageID);
	});
});
$('#fadeInBtn').click(function(){
	$('img').css({opacity: 0});
	fadeInImg(imageID);
});
$('#fadeOutBtn').click(function(){
	fadeOutImg();
});

//Slide In/out buttons
$('#slideBtn').click(function(){
	fadeOutImg(650, function(){
		slideInImg(imageID);
	});
});
//slideIn is weird right now when you use it while the same picture is on screen
$('#slideInBtn').click(function(){
	slideInImg(imageID);
});
$('#slideOutBtn').click(function(){
	slideOutImg(imageID,function(){
		$('#imgDsply'+imageID).removeClass('slidePic'+imageID);
	});
});
