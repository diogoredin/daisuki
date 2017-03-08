/*
*
* script.js
*
*/

$(document).ready(function() {

	// Enable User Strict Mode
	'use strict';

	// Slide Simulation Controls
	$(".toggle_simulation_controls").click(function(){
		$("#simulation_controls").slideToggle('fast', function() {
			$("img.toggle_simulation_icon").toggleClass('open', $(this).is(':visible'));
            $(".toggle_simulation_controls").toggleClass('open', $(this).is(':visible'));
		});
    });

});