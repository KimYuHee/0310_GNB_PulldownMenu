$(function () {
    $("#gnb>ul#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(1200);
      //$(this).children("ul").stop().slideDown(800);
        //this 자리에 서브메뉴 ul 넣으면 전체 서브메뉴 내려옴
    });
    $("#gnb>ul#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(1200);
     //$(this).children("ul").stop().slideUp(800);
    });
});
