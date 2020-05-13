// HTML
$('.h1-text').keyup(function() {
	$('.result_h1').text($('.h1-text').text())
});

$('.h2-text').keyup(function() {
	$('.result_h2').text($('.h2-text').text())
});

$('.h3-text').keyup(function() {
	$('.result_h3').text($('.h3-text').text())
});

$('.h4-text').keyup(function() {
	$('.result_h4').text($('.h4-text').text())
});

$('.h5-text').keyup(function() {
	$('.result_h5').text($('.h5-text').text())
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
$('.img-text2').keyup(function() {
	$('.result_img2').attr('src',$('.img-text2').text());

});

$('.a-text').keyup(function() {
	$('.result_a').attr('href',$('.a-text').text());

});

$('.a-text-2').keyup(function() {
	$('.result_a').text($('.a-text-2').text())
});

$('.a-text1').keyup(function() {
	$('.result_a1').attr('href',$('.a-text1').text());

});

$('.a-text-21').keyup(function() {
	$('.result_a1').text($('.a-text-21').text())
});