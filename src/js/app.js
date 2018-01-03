const css = require('../scss/app.scss');

console.log("It works!");

$(document).ready(function() {
	
	$(window).scroll(function() {
		var height = $(window).scrollTop();

		if(height > 80) {
			$('.navbar-top').addClass('scrolled');
		} else {
			$('.navbar-top').removeClass('scrolled');
		}
	})

	$('.navbar-toggler').on('click', function() {
		$(this).toggleClass('open');
	})

	$('[data-toggle="collapse"]').click(function() {
		var target = $(this).data('target');
		$(target).toggleClass('open');
	});

	$('.dropdown').on('click', function() {
		$(this).toggleClass('open');
	})

	$('.accordion')
		.on('click', '[data-toggle="accordion"]', function(e) {
			e.preventDefault();
			$(this).closest('.accordion-items').siblings().removeClass('open');
			$(this).closest('.accordion-items').toggleClass('open');
		})

});