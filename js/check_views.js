/*
*
* check.js
*
*/

$(document).ready(function() {

    $(document).on('click', ".confirm_check", function(e) {

    	$("#submenu ul").children("li.active").toggleClass("active");
        $("#submenu ul li.check_review").addClass("inactive");
        $("#submenu ul li.check_tax").removeClass("inactive");
		$("#submenu ul li.check_tax").toggleClass("active");

		// Disable back
		$(".go_back").removeClass().addClass("go_back").hide();

		// Load the Page
		$('#page').load( 'check_tax.html', function(data){
			$('#screen_check_tax' ).fadeIn(300);

    		});
    
        e.preventDefault();
    });

    $(document).on('click', ".confirm_receipt", function(e) {

    	$("#submenu ul").children("li.active").toggleClass("active");
        $("#submenu ul li.check_review").addClass("inactive");
        $("#submenu ul li.check_tax").addClass("inactive");
        $("#submenu ul li.check_pay").removeClass("inactive");
		$("#submenu ul li.check_pay").toggleClass("active");

		// Disable back
		$(".go_back").removeClass().addClass("go_back").hide();

		// Load the Page
		$('#page').load( 'check_pay.html', function(data){
			$('#screen_check_pay' ).fadeIn(300);

    		});
    
        e.preventDefault();
    });
    
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