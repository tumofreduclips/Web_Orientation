$('.css-color').keyup(function() {
	$('.result_css_h1').css("color", $('.css-color').text());
	if($('.css-color').text() == ''){
		$('.result_css_h1').css('color','#fff');
	}
});

$('.css').keyup(function() {
	$('.result_css_h1').css("background-color", $('.css-background').text());
	if($('.css-background').text() == ''){
		$('.result_css_h1').css('background-color','#fff');
	}
});

$('.css').keyup(function() {
	$('.result_css_h1').css("font-size", $('.css-size').text()+'px');
});






$('.css-color1').keyup(function() {
	$('.result_css_h2').css("color", $('.css-color1').text());
	if($('.css-color1').text() == ''){
		$('.result_css_h2').css('color','#fff');
	}
});

$('.css-width1').keyup(function() {
	$('.result_css_h2').css("width", $('.css-width1').text());
	if($('.css-width1').text() == ''){
		$('.result_css_h2').css('width','80px');
	}
});

$('.css-border1').keyup(function() {
	$('.result_css_h2').css("border-style", $('.css-border1').text());
	if($('.css-border1').text() == ''){
		$('.result_css_h2').css('border-style','none');
	}
});

$('.css-decoration').keyup(function() {
	$('.result_h3').css('text-decoration',$('.css-decoration').text());
	$('.result_h4').css('text-decoration',$('.css-decoration').text());
	$('.result_h5').css('text-decoration',$('.css-decoration').text());
	if($('.css-decoration').text() == ''){
		$('.result_h3').css('text-decoration','none');
		$('.result_h4').css('text-decoration','none');
		$('.result_h5').css('text-decoration','none');
	}
});

$('.css-transform').keyup(function() {
	$('.result_h3').css('text-transform',$('.css-transform').text());
	$('.result_h4').css('text-transform',$('.css-transform').text());
	$('.result_h5').css('text-transform',$('.css-transform').text());
	if($('.css-transform').text() == ''){
		$('.result_h3').css('text-transform','none');
		$('.result_h4').css('text-transform','none');
		$('.result_h5').css('text-transform','none');
	}
});

$('.css-spacing').keyup(function() {
	$('.result_h3').css('letter-spacing',$('.css-spacing').text()+'px');
	$('.result_h4').css('letter-spacing',$('.css-spacing').text()+'px');
	$('.result_h5').css('letter-spacing',$('.css-spacing').text()+'px');
	if($('.css-spacing').text() == ''){
		$('.result_h3').css('letter-spacing','2px');
		$('.result_h4').css('letter-spacing','2px');
		$('.result_h5').css('letter-spacing','2px');
	}
});


$('.title-text').keyup(function() {
	document.title = $('.title-text').text()
});



$('.css-weight').keyup(function() {
	$('.result_p').css('font-weight',$('.css-weight').text());
	if($('.css-weight').text() == ''){
		$('.result_p').css('font-weight','bold');
	}
});

$('.css-colorp').keyup(function() {
	$('.result_p').css('color',$('.css-colorp').text());
	if($('.css-colorp').text() == ''){
		$('.result_p').css('color','grey');
	}
});