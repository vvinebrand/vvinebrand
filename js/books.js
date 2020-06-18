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
$(document).ready(function () {
    $("#minus_4").hide();
    $("#clickSpec_1").click(function () {
        $("#sub_spec_box_1").slideToggle(600);
        $("#minus_4").toggle();
        $("#pluse_4").toggle();
    });
});
$(document).ready(function () {
    $("#minus_5").hide();
    $("#clickSpec_2").click(function () {
        $("#sub_spec_box_2").slideToggle(600);
        $("#minus_5").toggle();
        $("#pluse_5").toggle();
    });
});
$(document).ready(function () {
    $("#minus_6").hide();
    $("#clickSpec_3").click(function () {
        $("#sub_spec_box_3").slideToggle(600);
        $("#minus_6").toggle();
        $("#pluse_6").toggle();
    });
});
$(document).ready(function () {
    $("#minus_7").hide();
    $("#clickSpec_4").click(function () {
        $("#sub_spec_box_4").slideToggle(600);
        $("#minus_7").toggle();
        $("#pluse_7").toggle();
    });
});
$(document).ready(function () {
    $("#minus_8").hide();
    $("#clickSpec_5").click(function () {
        $("#sub_spec_box_5").slideToggle(600);
        $("#minus_8").toggle();
        $("#pluse_8").toggle();
    });
});
$(document).ready(function () {
    $("#minus_9").hide();
    $("#clickSpec_6").click(function () {
        $("#sub_spec_box_6").slideToggle(600);
        $("#minus_9").toggle();
        $("#pluse_9").toggle();
    });
});
$(document).ready(function () {
    $("#minus_10").hide();
    $("#clickSpec_6").click(function () {
        $("#sub_spec_box_6").slideToggle(600);
        $("#minus_10").toggle();
        $("#pluse_10").toggle();
    });
});
$(document).ready(function () {
    $("#minus_11").hide();
    $("#clickSpec_7").click(function () {
        $("#sub_spec_box_7").slideToggle(600);
        $("#minus_11").toggle();
        $("#pluse_11").toggle();
    });
});
$(document).ready(function () {
    $("#minus_12").hide();
    $("#clickSpec_8").click(function () {
        $("#sub_spec_box_8").slideToggle(600);
        $("#minus_12").toggle();
        $("#pluse_12").toggle();
    });
});
$(document).ready(function () {
    $("#minus_13").hide();
    $("#clickSpec_9").click(function () {
        $("#sub_spec_box_9").slideToggle(600);
        $("#minus_13").toggle();
        $("#pluse_13").toggle();
    });
});
$(document).ready(function () {
    $("#minus_14").hide();
    $("#clickSpec_10").click(function () {
        $("#sub_spec_box_10").slideToggle(600);
        $("#minus_14").toggle();
        $("#pluse_14").toggle();
    });
});
$(document).ready(function () {
    $("#minus_15").hide();
    $("#clickSpec_11").click(function () {
        $("#sub_spec_box_11").slideToggle(600);
        $("#minus_15").toggle();
        $("#pluse_15").toggle();
    });
});
$(document).ready(function () {
    $("#minus_16").hide();
    $("#clickSpec_12").click(function () {
        $("#sub_spec_box_12").slideToggle(600);
        $("#minus_16").toggle();
        $("#pluse_16").toggle();
    });
});
$(document).ready(function () {
    $("#minus_17").hide();
    $("#clickSpec_13").click(function () {
        $("#sub_spec_box_13").slideToggle(600);
        $("#minus_17").toggle();
        $("#pluse_17").toggle();
    });
});
$(document).ready(function () {
    $("#minus_18").hide();
    $("#clickSpec_14").click(function () {
        $("#sub_spec_box_14").slideToggle(600);
        $("#minus_18").toggle();
        $("#pluse_18").toggle();
    });
});
$(document).ready(function () {
    $("#minus_19").hide();
    $("#clickSpec_15").click(function () {
        $("#sub_spec_box_15").slideToggle(600);
        $("#minus_19").toggle();
        $("#pluse_19").toggle();
    });
});
$(document).ready(function () {
    $("#minus_20").hide();
    $("#clickSpec_16").click(function () {
        $("#sub_spec_box_16").slideToggle(600);
        $("#minus_20").toggle();
        $("#pluse_20").toggle();
    });
});
$(document).ready(function () {
    $("#minus_21").hide();
    $("#clickSpec_17").click(function () {
        $("#sub_spec_box_17").slideToggle(600);
        $("#minus_21").toggle();
        $("#pluse_21").toggle();
    });
});
/* $(document).ready(function () {
$("body").click(function () {
    $("#sub_spec_box_1").slideUp(400);
})
}); */
