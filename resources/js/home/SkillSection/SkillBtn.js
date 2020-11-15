$('.slide-btn').on('click', function() {
	console.log('here')
	$('.skill-slide-1').toggleClass('slide-closed');
	$('.skill-slide-2').toggleClass('slide-open');
	$('.next').toggleClass('slide-open');
});
