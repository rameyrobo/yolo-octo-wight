$(document).ready(function() {
    $(window).height();
    var b = $(window).width(),
        a = $("#navigation").outerHeight();
    $(window).resize(function() {
        b = $(window).width();
        $(window).height()
    });
    $(window).trigger("scroll");


$("#navigation").fixedonlater({
        speedDown: 250,
        speedUp: 100
    });
    $(".centralized").centralized({
        delay: 1500,
        fadeSpeed: 500
    });
    $.fn.responsivevideos();
    $("#quote-slider").each(function() {
        $(".item", this).length && $(this).carousel({
            interval: 2E4
        })
    });
    $("#main-menu").onePageNav({
        currentClass: "active",
        changeHash: !1,
        scrollOffset: a - 10,
        scrollThreshold: 0.0,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });
    
    $("#page-welcome .logo a").click(function() {
        $("html, body").animate({
            scrollTop: $($.attr(this, "href")).offset().top - a + 4
        }, 800);
        setTimeout(function() {
            $(window).trigger("scroll")
        }, 900);
        return !1
    });
    $("#welcome-messages ul").bxSlider({
        mode: "vertical",
        auto: !0,
        minSlides: 1,
        responsive: !0,
        touchEnabled: !0,
        pager: !1,
        controls: !1,
        useCSS: !1,
        pause: 1E4
    });
    $(".plugin-filter").click(function() {
        return !1
    });
    $(".plugin-filter-elements").mixitup({
        targetSelector: ".mix",
        filterSelector: ".plugin-filter",
        sortSelector: ".sort",
        buttonEvent: "click",
        effects: ["fade", "rotateY"],
        listEffects: null,
        easing: "smooth",
        layoutMode: "grid",
        targetDisplayGrid: "inline-block",
        targetDisplayList: "block",
        gridClass: "",
        listClass: "",
        transitionSpeed: 600,
        showOnLoad: "all",
        sortOnLoad: !1,
        multiFilter: !1,
        filterLogic: "or",
        resizeContainer: !0,
        minHeight: 0,
        failClass: "fail",
        perspectiveDistance: "3000",
        perspectiveOrigin: "50% 50%",
        animateGridList: !0,
        onMixLoad: null,
        onMixStart: null,
        onMixEnd: null
    });

});
$(document).ajaxSend(function() {
    0 == $(".loading").length && ($("body").append('<div class="loading"><div class="progress progress-striped active"><div class="bar"></div></div></div>'), $(".loading").slideDown(), $(".loading .progress .bar").delay(300).css("width", "100%"))
});
$(document).ajaxComplete(function() {
    $(".loading").delay(1E3).slideUp(500, function() {
        $(this).remove()
    });
    $(".close-portfolio span").click(function(b) {
        $(".portfolio-item-details").delay(500).slideUp(500, function() {
            $(this).remove()
        });
        window.location.hash = "!";
        return !1
    }) /* Portfolio details - close. */
    $(".close-work span").click(function(e) {
        $(".work-item-details").delay(500).slideUp(500, function() {
            $(this).remove();
        });

        $(document).ready(function() {
            $("#navbar li a").click(function(event) {
                // check if window is small enough so dropdown is created
                $("#nav-collapse").removeClass("in").addClass("collapse");
            });
        });

        window.location.hash = "!";
        return false;
    });
});