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
    $('.mobile-search').click(function(event) {

        $('.mobile-search__close').css({
            "display": "flex"
        });
        $('.header-search__location-mobile').css({
            "display": "block",
            "box-shadow": "none"

        });
        $('.mobile-navbar').css({
            "background": "var(--white-color)"

        });
        $('.padding-space').css({
            "box-shadow": "none"
        });
    });
    $('.mobile-search__close').click(function(event) {

        $('.mobile-search__close').css({
            "display": "none"
        });
        $('.header-search__location-mobile').css({
            "display": "none",
            "box-shadow": "none"

        });
        $('.mobile-navbar').css({
            "background": "none"

        });
        $('.padding-space').css({
            "box-shadow": "0px -5px 32px -16px var(--shadow-color)"
        });
    });

});

$(function() {
    $(window).scroll(function(event) {
        var pos_body = $('html,body').scrollTop();
        // console.log(pos_body);
        if (pos_body > 100) {
            $('.header__subnav').css({
                "display": "none"
            });
            $('.mobile-search').css({
                "box-shadow": "0 0 32px -17px var(--shadow-color)"
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
// $(window).resize(function() {

//     var width = $(window).width();
//     console.log(width);
//     if (width < 740) {
//         if (pos_body > 100) {
//             $('.padding-space').css({
//                 "display": "none !important",
//             });
//         }
//         // $('.left, .right').addClass('responsive_768');
//     } else {
//         // $('.left, .right').removeClass('responsive_768');
//     }
// });