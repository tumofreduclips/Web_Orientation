// HTML
$('.h1-text').keyup(function() {
	$('.result_h1').text($('.h1-text').text())
});


$('.p-text').keyup(function() {
	$('.result_p').text($('.p-text').text())
});

$('.img-text').keyup(function() {
	$('.result_img').attr('src',$('.img-text').text());

});
$('.img-text1').keyup(function() {
	$('.result_img1').attr('src',$('.img-text1').text());

});


$('.a-text').keyup(function() {
	$('.result_a').attr('href',$('.a-text').text());

});

$('.a-text-2').keyup(function() {
	$('.result_a').text($('.a-text-2').text())
});







$('.css-color').keyup(function() {
	$('.result_css_h1').css("color", $('.css-color').text());
	if($('.css-color').text() == ''){
		$('.result_css_h1').css('color','#fff');
	}
});

$('.css').keyup(function() {
	$('.result_css_h1').css("font-size", $('.css-size').text()+'px');
});


$('.css-align').keyup(function() {
	$('.result_css_h1').css("text-align", $('.css-align').text());
	if($('.css-align').text() == ''){
		$('.result_css_h1').css('text-align','center');
	}
});


$('.css-backgroundb').keyup(function() {
	$('.paret-sm').css("background-color", $('.css-backgroundb').text());
	if($('.css-backgroundb').text() == ''){
		$('.paret-sm').css('background-color','grey');
	}
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


$('.title-text').keyup(function() {
	document.title = $('.title-text').text()
});

$('.css-decorationaa').keyup(function() {
	$('.result_a').css('text-decoration',$('.css-decorationaa').text());
	if($('.css-decorationaa').text() == ''){
		$('.result_a').css('text-decoration','none');
	}
});

$('.css-colora').keyup(function() {
	$('.result_a').css('color',$('.css-colora').text());
	if($('.css-colora').text() == ''){
		$('.result_a').css('color','black');
	}
});


$('.css-backgrounda').keyup(function() {
	$('.result_a').css("background-color", $('.css-backgrounda').text());
	if($('.css-backgrounda').text() == ''){
		$('.result_a').css('background-color','grey');
	}
});
