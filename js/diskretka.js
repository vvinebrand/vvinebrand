$(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({
            scrollTop: dn
        }, 1000);
    });
});
/* анимация меню */
$(document).ready(function () {
    $(".clickMenu_catalog").click(function () {
        $(".visibleMenu_catalog").slideToggle(600);
        $(".visibleMenu_contacts").slideUp(200);

    });
});
$(document).ready(function () {
    $(".clickMenu_contacts").click(function () {
        $(".visibleMenu_contacts").slideToggle(600);
        $(".visibleMenu_catalog").slideUp(200);
    });
    /* анимация подменю */
    $(document).ready(function () {
        $("#minus_1").hide();
        $("#clickMenuCatalog_1").click(function () {
            $("#sub_menu_box_catalog_1").slideToggle(600);
            $("#minus_1").toggle();
            $("#pluse_1").toggle();
        });
    });
    $(document).ready(function () {
        $("#minus_2").hide();
        $("#clickMenuCatalog_2").click(function () {
            $("#sub_menu_box_catalog_2").slideToggle(700);
            $("#minus_2").toggle();
            $("#pluse_2").toggle();
        });
    });
    $(document).ready(function () {
        $("#minus_3").hide();
        $("#clickMenuCatalog_3").click(function () {
            $("#sub_menu_box_catalog_3").slideToggle(600);
            $("#minus_3").toggle();
            $("#pluse_3").toggle();
        });
    });
    /* закрытие подменю при нажатии вне области */
    $(".central_box").click(function () {
        $(".visibleMenu_catalog").slideUp(400);
    })
    $(".central_box").click(function () {
        $(".visibleMenu_contacts").slideUp(400);
    })
});
/* слайдер */
var slideIndex = 1;
showSlides(slideIndex);

function pluseSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("sub_spec_box_1");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




/* varslideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex+=n);

}
function currentSlide(n){
    showSlides(slideIndex=n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("sub_spec_box_1");
    if(n>slides.length){
        slideIndex=1
    }
    if(n<1){
        slideIndex=slides.length
    }
    for(i=0;i<slides.length;i++){
        slides[i].style(display)="none";

    }
    slides[slideIndex-1].style.display="block"; */


/* function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} */