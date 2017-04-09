/*
*
* menu_views.js
*
*/

$(document).ready(function() {

	/*
	*
	*	MAIN MENU & SIDE SCREENS
	*
	*/

	$(document).on('click', "#menu ul li", function(e) {

		if (!$(this).hasClass('active')) {
			$(this).parent().children("li.active").toggleClass("active");
			$(this).toggleClass("active");

			// Main Screens
			if ($(this).hasClass('order') || $(this).hasClass('check')) {

				// Get the menu to be loaded from the class
				var screen = $( this ).attr('class').split(' ')[0];

				// Load the Menu
				$('#submenu').load('menu_' + screen + '.html', function(data){
					$('#page').hide();
					$('#page').replaceWith( "<div id='page'></div>" );
					$('#submenu').hide();
					$('#submenu').fadeIn(300);
				});

			}

			// Help & Waiter
			if ($(this).hasClass('waiter') || $(this).hasClass('help')) {

				// Get the menu to be loaded from the class
				var screen = $( this ).attr('class').split(' ')[0];

				// Load the Menu
				$('#submenu').load('side_' + screen + '.html', function(data){
					$('#submenu').hide();
					$('#submenu').fadeIn(300);
				});
			}

		}

		e.preventDefault();
	});

	/*
	*
	*	SUB MENU
	*
	*/

	$(document).on('click', "#submenu ul li", function(e) {
		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");

		// Get the page to be loaded from the class
		var screen = $( this ).attr('class').split(' ')[0];

		// Load the Page
		$('#page').load( screen + '.html', function(data){
			$('#screen_' + screen ).fadeIn(300);

			// Specific Functions to Execute
			switch (screen) {
				case "order_status":
					loadOrderStatus();
					break;
			}

    	});

		e.preventDefault();
	});

});