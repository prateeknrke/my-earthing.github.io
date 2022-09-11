window.onscroll = function () {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        $(".navbar").addClass("navbar-active");
    }
    else {
        $(".navbar").removeClass("navbar-active");
    }
}

// navbar toggler
$(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("toggled");
})