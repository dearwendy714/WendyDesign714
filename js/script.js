$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var type = new Typed(".typed", {
        strings: ["Life Long Learner.", "Designer.", "UX/UI.", "Web Developer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});