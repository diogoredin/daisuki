function timer() {
    $("#countdown").countdown360({
        radius      : 60.5,
        seconds     : 5,
        strokeWidth : 15,
        fillStyle   : '#0276FD',
        strokeStyle : '#003F87',
        fontSize    : 50,
        fontColor   : '#FFFFFF',
        autostart: false,
        onComplete  : function () { console.log('completed') }
    }).start()
}