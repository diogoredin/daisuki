/*
*
* check.js
*
*/

/*
*
*   Update Check Menus
*
*/

function updateCheckMenus( screen ) {

    $("#submenu ul").children().removeClass("active");
    $("#submenu ul li." + screen ).addClass("active");

    $("#submenu ul").children().addClass("inactive");
    $("#submenu ul li." + screen ).removeClass("inactive");

}

/*
*
*   Load Check Confirmation Screen
*
*/

function loadCheckReviewScreen() {

	// Load the Page
	$('#page').load( 'check_review.html', function(data){
		$('#screen_check_review' ).fadeIn(300);
    });

}

/*
*
*   Load Tax Confirmation Screen
*
*/

function loadTaxInformationScreen() {

	// Load the Page
	$('#page').load( 'check_tax.html', function(data){
		$('#screen_check_tax' ).fadeIn(300);
    });

}

/*
*
*   Load Pay Screen
*
*/

function loadPayScreen() {

	// Load the Page
	$('#page').load( 'check_pay.html', function(data){
	    $('#screen_check_pay' ).fadeIn(300);
    });

}

/*
*
*   Page Data and Animations
*
*/

$(document).ready(function() {

    /*
    *
    *   Navigation
    *
    */

    $(document).on('click', ".confirm_check", function(e) {
        loadTaxInformationScreen();
        updateCheckMenus("check_tax");
        e.preventDefault();
    });

    $(document).on('click', ".confirm_receipt", function(e) {
        loadPayScreen();
        updateCheckMenus("check_pay");
        e.preventDefault();
    });

    $(document).on('click', ".back_pay", function(e) {
        loadTaxInformationScreen();
        updateCheckMenus("check_tax");
        e.preventDefault();
    });
    
    $(document).on('click', ".back_tax", function(e) {
        loadCheckReviewScreen();
        updateCheckMenus("check_review");
        e.preventDefault();
    });

    /*
    *
    *   Tax Information
    *
    */

    $(document).on('click', "button.change_tax", function(e) {
        $("#myCard").addClass("flip");
        e.preventDefault();
    });

    $(document).on('click', "button.save_tax_information", function(e) {
        $("#myCard").removeClass("flip");
        e.preventDefault();
    });

    $(document).on('click', "button.cancel_tax_information", function(e) {
        $("#myCard").removeClass("flip");
        e.preventDefault();
    });

    /*
    *
    *   Keypad
    *
    */
    
    var count = 0;
    $(document).on('click', ".digit", function(e) {

        var num = ($(this).clone().children().remove().end().text());
        if (count < 11) {
            $("#output").append('<span>' + num.trim() + '</span>');
            count++;
        }

        e.preventDefault();
    });

    $(document).on('click', ".clear", function(e) {
        $('#output span:last-child').remove();
        count--;

        e.preventDefault();
    });

});