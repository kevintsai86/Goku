/* Javascript file for controlling div transitions */

var outClass = 'pt-page-scaleDown',
inClass = 'pt-page-scaleUp pt-page-delay300'
slideOutRight='pt-page-moveToRightFade',
slideInLeft='pt-page-moveFromLeftFade',
slideOutLeft='pt-page-moveToLeftFade',
slideInRight='pt-page-moveFromRightFade';

function toLeftDiv(){
	//remove current div
	$('.current').addClass( slideOutRight );
	//transition in new div
	var currentDiv = $('.current').attr('id'),
	nextDiv = '';
	switch (currentDiv){
		case 'textView':
			nextDiv = 'infoView';
			break;
		case 'imageView':
			nextDiv = 'textView';
			break;
		case 'infoView':
			nextDiv = 'imageView';
			break;
		default:
			alert('There was an error. Resetting to textView.');
			nextDiv = 'textView';
	}
	$('#' + nextDiv).addClass( 'current ' + slideInLeft );
	//remove transition classes after transition
	setTimeout(function(){
		$('.'+slideOutRight).removeClass('current ' + slideOutRight);
		$('.current').removeClass( slideInLeft );
	}, 800);
}
function toRightDiv(){
	//remove current div
	$('.current').addClass( slideOutLeft );
	//transition in new div
	var currentDiv = $('.current').attr('id'),
	nextDiv = '';
	switch (currentDiv){
		case 'textView':
			nextDiv = 'imageView';
			break;
		case 'imageView':
			nextDiv = 'infoView';
			break;
		case 'infoView':
			nextDiv = 'textView';
			break;
		default:
			alert('There was an error. Resetting to textView.');
			nextDiv = 'textView';
	}
	$('#' + nextDiv).addClass( 'current ' + slideInRight );
	//remove transition classes after transition
	setTimeout(function(){
		$('.'+slideOutLeft).removeClass('current ' + slideOutLeft);
		$('.current').removeClass( slideInRight );
	}, 800);
}
function jumpToDiv(div){
	//remove current div
	$('.current').addClass( outClass );
	//transition in new div
	$(div).addClass( 'current ' + inClass );
	//remove transition classes after transition
	setTimeout(function(){
		$('.'+outClass).removeClass('current ' + outClass);
		$('.current').removeClass( inClass );
	}, 1000);
}

$('#nav-prev').click(function(){
	toLeftDiv();
});
$('#nav-1').click(function(){
	jumpToDiv('#textView');
});
$('#nav-2').click(function(){
	jumpToDiv('#imageView');
});
$('#nav-3').click(function(){
	jumpToDiv('#infoView');
});
$('#nav-next').click(function(){
	toRightDiv();
});