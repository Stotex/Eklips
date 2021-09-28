function toggleLang(lang) {
    var elems = $('[data-translate]');

    for (var i = 0; i < elems.length; i++) {
        var elem = $(elems).eq(i);

        var key = $(elem).attr('data-translate')
        var value = translations[lang][key]

        $(elem).text(value)
    }
}


$(document).ready(function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " active";
    }

    $('[data-lang]').click(function () {
        var lang = $(this).attr('data-lang');

        toggleLang(lang)
    })

    toggleLang('en')

    $('.slideshow-container .pagination .dot').click(function () {
        var curSlide = $(this).index() + 1;

        currentSlide(curSlide);
    });

    $('.slideshow-container .next').click(function () {
        plusSlides(1);
    })

    $('.slideshow-container .prev').click(function () {
        plusSlides(-1);
    })

    $("body").click(function (e) {
        if (!$(e.target).parents('.navbar').length) {
            $('.dropdown.active').removeClass('active')
            $('.search-bar.active').removeClass('active')
        }
    }
    );

    $('.navbar ul li').click(function () {
        var index = $(this).index();

        $('.navbar ul li').removeClass('active');
        $(this).addClass('active');

        $('header .dropdown').addClass('active');
        $('header .search-bar').removeClass('active');

        $('header .dropdown .section').removeClass('active');
        $('header .dropdown .section').eq(index).addClass('active');
    });

    $('.navbar .search-btn').click(function () {
        $('header .dropdown').removeClass('active');
        $('header .navbar ul li').removeClass('active');
        $('header .search-bar').toggleClass('active');


    });



    $('header .logo-wrapper .mobile-dropdown').click(function () {
        $('header').toggleClass('active');
    });

    $('header .dropdown .section h4').click(function () {
        var isCurActive = $(this).parent().hasClass('active');

        $('header .dropdown .section').removeClass('active');

        if (!isCurActive) {
            $(this).parent().addClass('active');
        }
    })

});

window.onload = function () {
    const targetDiv = document.getElementById("cookie-bar");
    const btn = document.getElementById("cookieFunction");
    btn.onclick = function () {
        if (targetDiv.style.display !== "none") {
            targetDiv.style.display = "none";
        } else {
            targetDiv.style.display = "block";
        }
    };
};

