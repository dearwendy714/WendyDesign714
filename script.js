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

$('.owl-carousel').owlCarousel({
    loop: true,
    items: 4,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        938: {
            items: 4
        }
    }
});

// WHy does it not work load the numbers when scrolled doen 
$(function () {
    $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor: '#fff',
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }

    });

    var skillsTopOffset = $(".skillsSection").offset().top;
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }

            });


        }
    });
});