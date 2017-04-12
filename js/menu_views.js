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

		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");

		// Disable Back
		$(".go_back").removeClass().addClass("go_back").hide();

		// Main Screens
		if ($(this).hasClass('order') || $(this).hasClass('check')) {

			// Get the menu to be loaded from the class
			var screen = $( this ).attr('class').split(' ')[0];

			// Load the Menu
			$('#submenu').load('menu_' + screen + '.html', function(data){

				// Clear page
				$('#page').hide();
				$('#page').replaceWith( "<div id='page'></div>" );

				// Update sub menu display of number of orders
				if ( screen == "order" ) {

					var NoOrders = sessionStorage.getItem("NoOrders");
					var menu_item = $('#submenu ul li.order_current');
	
					menu_item.find("span").text(parseInt(NoOrders));
				}

				// Show new submenu
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

		// Disable back
		$(".go_back").removeClass().addClass("go_back").hide();

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
				case "order_current":
					loadCurrentOrder();
			}

    	});

		e.preventDefault();
	});

});