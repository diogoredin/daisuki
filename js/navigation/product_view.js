/*
*
* product_view.js
*
*/

$(document).ready(function() {

	// Configure Screen
	$(document).on('click', ".circle-menu ul li a.icon-configure", function(e) {
		$(".circle-menu>ul>li.active").removeClass("active");
		$(this).parent().addClass('active');

		$('.picker_share').hide();
		$('.picker_calories').hide();
		$('.picker_review').hide();

		$('.picker_configure').show();
		e.preventDefault();
	});

	// Share Screen
	$(document).on('click', ".circle-menu ul li a.icon-share", function(e) {
		$(".circle-menu>ul>li.active").removeClass("active");
		$(this).parent().addClass('active');

		$('.picker_configure').hide();
		$('.picker_review').hide();
		$('.picker_calories').hide();

		$('.picker_share').show();
		e.preventDefault();
	});

	// Calories Screen
	$(document).on('click', ".circle-menu ul li a.icon-calories", function(e) {
		$(".circle-menu>ul>li.active").removeClass("active");
		$(this).parent().addClass('active');

		$('.picker_configure').hide();
		$('.picker_review').hide();
		$('.picker_share').hide();

		$('.picker_calories').show();
		e.preventDefault();
	});

	// Review Screen
	$(document).on('click', ".circle-menu ul li a.icon-review", function(e) {
		$(".circle-menu>ul>li.active").removeClass("active");
		$(this).parent().addClass('active');

		$('.picker_share').hide();
		$('.picker_configure').hide();
		$('.picker_calories').hide();

		$('.picker_review').show();
		e.preventDefault();
	});

});