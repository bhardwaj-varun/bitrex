$(document).ready(function (e) {



        $('input[name="optionsRadios"]').on('change', function () {
            $('#tshirt-div')
                .toggle(+this.value === 1 && this.checked);
        }).change();

        $('#tshirt-div').show();


    $('a.smooth-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh');
    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });

    //hide t-shirt div if include a tshirt is unchecked
    $("#register-include-tshirt").on('change',function () {
        if($("#register-include-tshirt").is(':checked')) {
            $('#tshirt-div').show();
        }else{
            $('#tshirt-div').hide();
        }
    });
});
