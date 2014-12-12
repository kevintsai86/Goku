// javascript file for Index Page
// 
// make an array to take in sentences to be displayed on the ticker
var gokuArray = ['默認' , 'Default','瑞德感知','Thunder Sensing'];
var i = 0;

//
// Ticker display functions
//
/*function fadeDsply(){
	$('#ticker li:first').fadeOut(700, function () { 
    	$(this).appendTo($('#ticker'));
    	$('#ticker li:first').fadeIn(700);
	});
}
function slideDsply(){
	$('#ticker li:first').slideUp(700, function () { 
		$(this).appendTo($('#ticker'));
		$('#ticker li:first').slideDown(700);
	});
}
function marqueeDsply(){

}*/
function mainFdDsply(anAry){
	$('#mainDsply').animate( {opacity:0}, 700, function (){
			$('#mainDsply').html(anAry[i]);
			$('#mainDsply').animate({opacity:1},700);
			i++;
		});
	if(i===anAry.length)
		i=0;
}
function mainFade(){

	var dsplyIntrvl=setInterval(function(){mainFdDsply(gokuArray)}, 3000);
	
/*	for (var num=0;num<gokuArray.length;num++) {
		$('#mainDsply').html(gokuArray[num]).fadeIn(700).delay(2000).fadeOut(700);
		if(num===gokuArray.length)
			num=0;
	}*/
}
function gokuAppend(){
	for(var ctr=0; ctr<gokuArray.length;ctr++)
		$('#gokuView').append(gokuArray[ctr]+'; ');
	$('#gokuView').append('\n');
	document.getElementById("gokuView").scrollTop = document.getElementById("gokuView").scrollHeight;
}

//
//interactive elements (ex:buttons, color boxes, etc)
//
$('#set').click( function(){	
	$('.textCol').each( function(index){
		gokuArray[index] = $(this).val();
	});
});
$('#test').click( function(){
	mainFade();
});
$('#prvw').click(function(){
	gokuAppend();
});
$('#rst').click(function(){
	$('.textCol').val('');
	$('.gokuView').html('');
	gokuArray = ['默認' , 'Default','瑞德感知','Thunder Sensing'];
	i = 0;
});

//setInterval(function(){fadeDsply()}, 3400);