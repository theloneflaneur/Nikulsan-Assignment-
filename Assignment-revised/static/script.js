const setAllInactive = () => {
    $(".pagination .pages a.active").removeClass("active");
};

$(document).ready(function(){
    $(".pagination a").not("a.previous").not("a.next").click(function (e) {
        e.preventDefault();
        setAllInactive();
    });

    $(".pagination .pages a").click(function (e) {
        $(this).addClass("active");
    });

    $(".pagination a.first").click(function (e) {
        $(".pagination .pages a").first().addClass("active");
    });

    $(".pagination a.last").click(function (e) {
        $(".pagination .pages a").last().addClass("active");
    });

    $(".pagination a.previous").click(function (e) {
        e.preventDefault();
        let current = $(this).parent().find(".pages .active");
        setAllInactive();


        if(!$(current).is(":first-child")) {
            $(current).prev().addClass("active");
        } else {
            $(current).addClass("active");
        }
    });

    $(".pagination a.next").click(function (e) {
        e.preventDefault();
        let current = $(this).parent().find(".pages .active");
        setAllInactive();


        if(!$(current).is(":last-child")) {
            $(current).next().addClass("active");
        } else {
            $(current).addClass("active");
        }
    });
});
