function timer() {
    var countdown = $("#countdown").countdown360({
        radius: 60,
        seconds: 20,
        label: ['sec', 'secs'],
        fontColor: '#FFFFFF',
        autostart: false,
        onComplete: function () {
        console.log('done');
        }
    });

    countdown.start();
}