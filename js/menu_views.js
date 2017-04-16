/*
*
* menu_views.js
*
*/

/*
*
*	CLOSE SUBMENU (WAITER || HELP)
*
*/

function closeSubmenu(originalMenu, originalSubmenu) {

	// Load the Menu
	$("#menu").replaceWith(originalMenu);

	// Load the Submenu
	$("#submenu").replaceWith(originalSubmenu);

	// Update sub menu display of number of orders
	var NoOrders = sessionStorage.getItem("NoOrders");
	var menu_item = $('#submenu ul li.order_current');
	menu_item.find("span").text(parseInt(NoOrders));

}

function waiterComing() {

	// Show waiter
	$(".confirmation_box").hide();
	$(".waiter_comming").show();

}

/*
*
*	PAGE ANIMATIONS & DATA
*
*/

$(document).ready(function() {

	/*
	*
	*	MAIN MENU & SIDE SCREENS
	*
	*/

	// Store Screen
	var location;

	// Stores orgin when opening help or waiter
	var originalSubmenu;
	var originalMenu;

	// Menu Click
	$(document).on('click', "#menu ul li", function(e) {

			// Get Plate Status
			if ( sessionStorage.getItem("Plate") == "off" ) {
				location = "#page";
			} else {
				location = "#submenu";
			}

			// Disable Back
			$(".go_back").removeClass().addClass("go_back").hide();

			// Main Screens
			if ($(this).hasClass('order') || $(this).hasClass('check')) {

				// Get the menu to be loaded from the class
				var screen = $( this ).attr('class').split(' ')[0];

				// Load the Menu
				$('#submenu').load('menu_' + screen + '.html', function(data){

					// Update sub menu display of number of orders
					if ( screen == "order" && sessionStorage.getItem("Plate") == "off" ) {
						$(location).load( 'order_categories.html', function(data){
							$('#screen_order_categories' ).fadeIn(300);
						});
					}

					// Make First Screen Imeddiatly Available
					if ( screen == "check" && sessionStorage.getItem("Plate") == "off" ) {
						$(location).load( 'check_review.html', function(data){
							$('#screen_check_review' ).fadeIn(300);
						});
					}

					// Removes Default Active
					if ( sessionStorage.getItem("Plate") == "on" ) {
						$('#submenu ul').children("li.active").removeClass("active");
					}

					// Update Number of Orders
					var NoProductsInOrder = parseInt(sessionStorage.getItem("NoProductsInOrder"));
					var menu_item = $('#submenu ul li.order_current');
		
					menu_item.find("span").text(parseInt(NoProductsInOrder));

					// Show new submenu
					$('#submenu').hide();
					$('#submenu').fadeIn(300);

				});

		}

		// Help & Waiter
		if ($(this).hasClass('waiter') || $(this).hasClass('help')) {

			// Stores orgin menus when opening waiter but only if we arent there already
			if ( $(this).hasClass('waiter') && ( !$('#side_help').length && !$('#side_waiter').length ) ) {
				originalSubmenu = $("#submenu").clone();
				originalMenu = $("#menu").clone();
			}

			// Stores orgin menus when opening help but only if we arent there already
			if ( $(this).hasClass('help') && ( !$('#side_help').length && !$('#side_waiter').length ) ) {
				originalSubmenu = $("#submenu").clone();
				originalMenu = $("#menu").clone();
			}

			// Get the menu to be loaded from the class
			var screen = $( this ).attr('class').split(' ')[0];

			// Load the Menu
			$('#submenu').load('side_' + screen + '.html', function(data){

				// Shows Submenu
				$('#submenu').hide();
				$('#submenu').fadeIn(300);

			});
			
			// If we just called the waiter
			//if ( ($(this).hasClass('waiter')) && ( Cookies.getJSON("waiter") == "yes" ) ) {
				//waiterComing();
			//}
	
		}

		// Activates New Screen
		$(this).parent().children("li.active").toggleClass("active");
		$(this).toggleClass("active");

		e.preventDefault();
	});

	/*
	*
	*	SUB MENU
	*
	*/

	$(document).on('click', "#submenu ul li", function(e) {

		// Get Plate Status
		if ( sessionStorage.getItem("Plate") == "off" ) {
			location = "#page";
		} else {
			location = "#submenu";
		}

		if ( !($(this).hasClass("inactive") ) && 
			  ( sessionStorage.getItem("Plate") == "off" ) ) {

			$(this).parent().children("li.active").toggleClass("active");
			$(this).toggleClass("active");

			// Disable back
			$(".go_back").removeClass().addClass("go_back").hide();

			// Get the page to be loaded from the class
			var screen = $( this ).attr('class').split(' ')[0];

			// Load the Page
			$(location).load( screen + '.html', function(data){
				$('#screen_' + screen ).fadeIn(300);

				// Specific Functions to Execute
				switch (screen) {
					case "order_status":
						loadOrderStatus();
						break;
					case "order_current":
						loadCurrentOrder();
					case "order_review":
						loadOrderReview();
				}

				});
			
		}

		if ( !($(this).hasClass("inactive") ) && !($(this).hasClass("check_review") ) &&
			  ( sessionStorage.getItem("Plate") == "on" ) ) {
	
			$(this).parent().children("li.active").toggleClass("active");

			// Get the page to be loaded from the class
			var screen = $( this ).attr('class').split(' ')[0];

			// Load the Page
			$(location).load( screen + '.html', function(data){
				$('#screen_' + screen ).fadeIn(300);

				// Specific Functions to Execute
				switch (screen) {
					case "order_status":
						loadOrderStatus();
						break;
					case "order_current":
						loadCurrentOrder();
					case "order_review":
						loadOrderReview();
				}

				});
			
		}

		e.preventDefault();
	});

	/*
	*
	*	WAITER
	*
	*/

	// Waiter Confirmed
	$(document).on('click', ".confirm_waiter", function(e) {

		// Show waiter
		waiterComing();

		e.preventDefault();
	});

	// Canceled Window
	$(document).on('click', ".cancel_waiter", function(e) {
		closeSubmenu(originalMenu, originalSubmenu);
	});

	// Closed Window
	$(document).on('click', ".close_side", function(e) {
		closeSubmenu(originalMenu, originalSubmenu);
	});

});