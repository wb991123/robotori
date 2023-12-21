$(document).ready(function(){
    $(".gnb").mouseenter(function(){
        $(".header_bg").stop().animate({"height":"350px"},300);
        $(".nav_bg").css({"background-color":"white"})
    });

    $(".gnb").mouseleave(function(){
        $(".header_bg").stop().animate({"height":"0px"},300);
        $(".nav_bg").css({"background-color":"transparent"})
    });
})