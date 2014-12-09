/* Javascript file for Image Page */
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
	$('#imgDsply'+imgID).animate({opacity:1},500);
}

//Slide functions
function slideOutImg(imgID, delay, callback){
	var slideway = slideDirection(imgID);
	// console.log(imgID+' should slide in direction '+slideway);
	$('#imgDsply'+imgID).addClass('slidePic'+slideway);
	fadeOutImg();
	
	setTimeout( function(){
		$('#imgDsply'+imageID).removeClass('slidePic'+slideDirection(imageID) , delay)
	}, 600);
}

function slideInImg(imgID){
	//positions the element off center
	$('img').css({display:''});
	$('#imgDsply'+imgID).addClass('slidePic'+imgID);
	$('#imgDsply'+imgID).css({opacity:'', display:'inline-block'});
	setTimeout(function(){
		$('#imgDsply'+imgID).removeClass('slidePic'+imgID);
	}, 600);
	//trigger to start slide effect
	/*$('#slideInEvent').trigger('slideIn', [imgID]);
	console.log('slideInImg function complete');*/
}
//purely for slideOut function
function slideDirection(imgID){
	switch (parseInt(imgID)){
	case 1:
	// console.log('returned 2');
		return 2;
	case 2:
	// console.log('returned 1');
		return 1;
	default:
	// console.log('returned imgID = '+ imgID);
		return imgID;
	}
}

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
	fadeOutImg(600, function(){
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
	slideOutImg(imageID, 600, function(){
		slideInImg(imageID);
	});
});
//slideIn is weird right now when you use it while the same picture is on screen
$('#slideInBtn').click(function(){
	slideInImg(imageID);
});
$('#slideOutBtn').click(function(){
	slideOutImg(imageID, 600, function(){
		// $('#imgDsply'+imageID).removeClass('slidePic'+slideDirection(imageID) );
	});
});
