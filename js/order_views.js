/*
*
* order_views.js
*
*/

function timer() {
    $("#countdown").countdown360({
        radius: 60.5,                    // radius of arc
        strokeStyle: "#0276FD",          // the color of the stroke
        strokeWidth: 10,                 // the stroke width, dynamically calulated if omitted in options
        fillStyle: "transparent",        // the fill color
        fontColor: "#FFFFFF",            // the font color
        fontFamily: "HeeboLight",        // the font family
        fontSize: 50,                    // the font size, dynamically calulated if omitted in options
        fontWeight: 700,                 // the font weight
        autostart: true,                 // start the countdown automatically
        seconds: 300,                    // the number of seconds to count down
        label: ["minute", "minutes"],    // the label to use or false if none, first is singular form, second is plural
        startOverAfterAdding: true,      // Start the timer over after time is added with addSeconds
        smooth: true,                    // update the ticks every 16ms when true
        onComplete  : function () { console.log('completed') }
    }).start();
}

// On Page Load
function loadOrderStatus() {
    timer();
}