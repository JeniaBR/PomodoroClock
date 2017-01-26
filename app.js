$(document).ready(function () {
    var sessionTime = 1;
    var breakTime = 5;
    var currentTime = Date.parse(new Date());
    var deadline;
    // var clock = document.getElementsByClassName('big-clock');
    // var clockMinutes = clock.querySelector('.minutes');
    // var clockSeconds = clock.querySelector('.seconds');
    deadline = new Date(currentTime + sessionTime * 60 * 1000);

    function getRemainingTime(endTime) {
        var time = Date.parse(endTime) - Date.parse(new Date());
        var seconds = Math.floor((time / 1000) % 60);
        var minutes = Math.floor((time / 1000 / 60) % 60);
        return {
            'total': time,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function updateClock() {
        var t = getRemainingTime(deadline);

        if (t.total<0) {
            clearInterval(timeInterval);
            t.minutes = 0;
            t.seconds = 0;
        }

        $('#minutes').html(("0" + t.minutes).slice(-2));
        $('#seconds').html(("0" + t.seconds).slice(-2));
    }

    $('#break-num').html(("0" + breakTime).slice(-2));
    $('#session-num').html(("0" + sessionTime).slice(-2));
    $('#minutes').html(("0" + sessionTime).slice(-2));
    $('#seconds').html('00');

    $('#btn-break-minus').click(function () {
        breakTime--;
        if (breakTime < 1) {
            breakTime = 1;
        }

        $('#break-num').html(("0" + breakTime).slice(-2));
    });

    $('#btn-break-plus').click(function () {
        breakTime++;
        if (breakTime > 15) {
            breakTime = 15;
        }

        $('#break-num').html(("0" + breakTime).slice(-2));
    });

    $('#btn-session-minus').click(function () {
        sessionTime--;
        if (sessionTime < 1) {
            sessionTime = 1;
        }

        $('#session-num').html(("0" + sessionTime).slice(-2));
        $('#minutes').html(("0" + sessionTime).slice(-2));
    });

    $('#btn-session-plus').click(function () {
        sessionTime++;
        if (sessionTime > 90) {
            sessionTime = 90;
        }

        $('#session-num').html(("0" + sessionTime).slice(-2));
        $('#minutes').html(("0" + sessionTime).slice(-2));
    });

    var timeInterval = setInterval(updateClock,1000);

});