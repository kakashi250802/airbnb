$(document).ready(function() {
    $('#search-item__2  ').mouseenter(function() {
        // window.getComputedStyle(document.querySelector('psearch-item__1'), ':before');
        $('#select-item__1').css({
            "display": "none"

        })
    });
    $('.header-account-option__link:nth-child(2)'),
        $('.header-account-option__link:nth-child(1)').click(function(event) {
            $('.modal').css({
                "display": "block"
            });
            $('.header-account-option').css({
                "opacity": "0"
            });
            $('.register-login').css({
                "display": "block"
            });
        });
    $('.header__nav-item:nth-child(2) ').click(function(event) {
        $('.modal').css({
            "display": "block"
        });
        $('.country-select').css({
            "display": "block"
        });
    });

    $('.modal__close-btn').click(function(event) {
        $('.modal').css({
            "display": "none"
        });
        $('.header-account-option').css({
            "opacity": "1"

        });
        $('.register-login').css({
            "display": "none"
        });
        $('.country-select').css({
            "display": "none"
        });
    });
    $('.header-subsearch').click(function(event) {
        $('.header-subsearch').css({
            "display": "none"

        });
        $('.header__subnav').css({
            "display": "block"
        });
        $('.padding-space').css({
            "padding-bottom": "82px",
        });
    });

});
$(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        console.log(pos_body);
        if (pos_body > 100) {
            $('.header__subnav').css({
                "display": "none"
            });
            $('.header-subsearch').css({
                "display": "flex"
            });
            $('.header__bar').css({
                "background": "var(--white-color)",
            });
            $('.padding-space').css({
                "display": "block",
            });
            $('.header__subnav-item--link').css({
                "color": "var(--primary-color)"
            });
            $('.header__nav-item').css({
                "color": "var(--primary-color)"
            });

            $('.header__logo__tablet--link').css({
                "color": "var(--header-brand-color)"

            });
            $('.header__logo__pc--link').css({
                "color": "var(--header-brand-color)"
            });
            $('.padding-space').css({
                "padding-bottom": "0",
            });
            // $('.header__subnav-item--active .header__subnav-item--link').css({
            //     "color": "var(--primary-color)"
            // });
        } else {
            $('.header__subnav').css({
                "display": "block"
            });
            $('.header__bar').css({
                "background": "var(--transparent-color)"
            });

            $('.header__nav-item').css({
                "color": "var(--white-color)"
            });
            $('.header__logo__pc--link').css({
                "color": "var(--white-color)"
            });
            $('.header-subsearch').css({
                "display": "none"
            });
            $('.padding-space').css({
                "display": "none",
            });
            $('.header__subnav-item--link').css({
                "color": "var(--white-color)"
            });
            $('.header__logo__tablet--link').css({
                "color": "var(--white-color)"

            });
        }
    });
});
$(window).resize(function() {
    if (window.matchMedia('(max-width: 1023px)').matches) {
        // functionality for screens smaller than 1200px
    }
    if (window.matchMedia('(min-width: 12023px) and (max-width: 1023px)').matches) {
        // functionality for screens smaller than 1200px
    }
});