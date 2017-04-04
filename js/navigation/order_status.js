function timer() {

   var timer = 'true',
        mmin = 2,
        min = 0,
        minPres = 0,
        msec = 0,
        sec = 0,
        secPres = 0,
        perc = 612,
        percm = perc;

    startTimer(timer);
    $('.t-time').text(min + ':0' + sec);
    
    function startTimer(func) {
        timer = !timer;
        if (func) {

            timerInt = setInterval(function() {
                sec++;
                perc =  perc + (percm / (2 * 60));
                
                min = Math.floor(sec/60);
                
                secPres = (60 * mmin + msec - sec) % 60;
               
                minPres = Math.floor((60 * mmin + msec - sec) / 60);
                
                if (secPres <= 9)
                    secPres = '0' + secPres;
 
                if (minPres <= 9)
                    minPres = '0' + minPres;

                $('.c-c').css('stroke-dashoffset', perc);
                $('.t-time').text(minPres + ':' + secPres);

                if (min >= mmin) {
                    timer = !timer;
                    min = 0;
                    sec = 0;
                    perc = 612;
                    clearInterval(timerInt);

                }
            }, 1000);
        } else {
            clearInterval(timerInt);
        }
    };
}