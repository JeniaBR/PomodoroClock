$(document).ready(function () {
    var sessionTime = 25;
    var breakTime = 5;

    // var clock = document.getElementsByClassName('big-clock');
    // var clockMinutes = clock.querySelector('.minutes');
    // var clockSeconds = clock.querySelector('.seconds');

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
});