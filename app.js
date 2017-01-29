function setColor(selectors, color) {

    $(selectors).animate({
        backgroundColor: color
    }, 500);
}

function hideAndShow(toHide) {
    if (toHide) {
        $('.main-break-container').addClass('hidden');
        $('.main-session-container').addClass('hidden');
        $('.animation-container').removeClass('hidden');
    } else {
        $('.main-break-container').removeClass('hidden');
        $('.main-session-container').removeClass('hidden');
        $('.animation-container').addClass('hidden');
    }
}

$(document).ready(function () {
    var sessionTime = 25;
    var breakTime = 5;
    var timeInterval;
    var isBreakTimeNow;


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

    function updateClock(deadline) {
        var t = getRemainingTime(deadline);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            if (isBreakTimeNow) {
                startBreak();
            } else {
                startSession();
            }

        }

        $('#minutes').html(("0" + t.minutes).slice(-2));
        $('#seconds').html(("0" + t.seconds).slice(-2));
    }

    function startSession() {

        var currentTime = Date.parse(new Date());
        var deadline = new Date(currentTime + sessionTime * 60 * 1000);
        updateClock(deadline);
        timeInterval = setInterval(updateClock.bind(null, deadline), 1000);
        $('#start-btn').addClass('hidden');
        $('#refresh-btn').removeClass('hidden');
        isBreakTimeNow = true;
        setColor('body', '#2B9720');
    }

    function startBreak() {
        var currentTime = Date.parse(new Date());
        var deadline = new Date(currentTime + breakTime * 60 * 1000);
        updateClock(deadline);
        timeInterval = setInterval(updateClock.bind(null, deadline), 1000);
        isBreakTimeNow = false;

        setColor('body', '#D95D39');
    }

    function resetPomodoro() {
        clearInterval(timeInterval);
        $('#minutes').html(("0" + sessionTime).slice(-2));
        $('#seconds').html('00');
        $('#refresh-btn').addClass('hidden');
        $('#start-btn').removeClass('hidden');
        setColor('body', '#160C28');
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

    $('#start-btn').click(function () {
        startSession();
        hideAndShow(true);
    });

    $('#refresh-btn').click(function () {
        resetPomodoro();
        hideAndShow(false);
    });

});