/*Javascript for Info Page*/

//functions for changing the display
//
function temperChange(val){
	$('.temperature').html( val + '&deg;');
	switch(true){
		case val<=6:
			$('.icon').attr('src', 'img/溫度計切換圖/1.png');
			break;
		case 7<=val && val<=12:
			$('.icon').attr('src', 'img/溫度計切換圖/2.png');
			break;
		case 13<=val && val<=18:
			$('.icon').attr('src', 'img/溫度計切換圖/3.png');
			break;
		case 19<=val && val<=24:
			$('.icon').attr('src', 'img/溫度計切換圖/4.png');
			break;
		case 25<=val && val<=30:
			$('.icon').attr('src', 'img/溫度計切換圖/5.png');
			break;
		case 30<val:
			$('.icon').attr('src', 'img/溫度計切換圖/6.png');
			break;
		default:
			alert('There is some error');
	}
}
function humidityChange(val){
	$('#humidPercent').html( val + '%');
	switch(true){
		case 0<=val && val<=20:
			$('#humidPercent').css({color: '#c6d4e9'});
			break;
		case 21<=val && val<=40:
			$('#humidPercent').css({color: '#a1cbe5'});
			break;
		case 41<=val && val<=60:
			$('#humidPercent').css({color: '#77c6d7'});
			break;
		case 61<=val && val<=80:
			$('#humidPercent').css({color: '#65a6bd'});
			break;
		case 81<=val && val<=100:
			$('#humidPercent').css({color: '#409ece'});
			break;
		default:
			alert('There is some error');
	}
}

//Info Page event controls
//temperature control slider
$('#tempCtrl').on('click', function(){
	$('#tempCtrl').on('mousemove', function(){
		$('#tempDsply').html( $('#tempCtrl').val() );
		temperChange($('#tempCtrl').val());
	});
});
//humidity control slider
$('#humidityCtrl').on('click', function(){
	$('#humidityCtrl').on('mousemove', function(){
		$('#humidityDsply').html( $('#humidityCtrl').val() );
		humidityChange( $('#humidityCtrl').val() );
	});
});