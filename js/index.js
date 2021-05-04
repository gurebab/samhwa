$(document).ready(function(){

    // 스크롤하면 나타나는 헤더
    var header = $('header');
    $(window).scroll(function(){
        if(header.offset().top > 100){
            $("header").addClass("active");
            $(".list-1 ul li").addClass("black");
            $(".util .search").addClass("black");
            $(".util .log-in").addClass("black");
            $("header > .header> .logo-box > .white").addClass("hide");
            $("header > .header> .logo-box > .color").addClass("void");
            $(".util .m-menu-wrap .bar").addClass("black");
        }
    });
    $(window).scroll(function(){
        if(header.offset().top < 400){
            $("header").removeClass("active");
            $(".list-1 ul li").removeClass("black");
            $(".util .search").removeClass("black");
            $(".util .log-in").removeClass("black");
            $("header > .header> .logo-box > .white").removeClass("hide");
            $("header > .header> .logo-box > .color").removeClass("void");
            $(".util .m-menu-wrap .bar").removeClass("black");
        }
    });
    // 스크롤 헤더 끝

    //스크롤 박스
    $(window).scroll(function(){
        $(".new-box").each(function(){
            var bot_object = $(this).offset().top + $(this).outerHeight();
            var bot_window = $(window).scrollTop() + $(window).height();
            if (bot_window >= bot_object/1.8 ){
                $(".new-box").animate({"margin-top" : "0"},400);
                $(".new-box").animate({"opacity" : "1"},400);
                setTimeout(function(){
                    $(".news-wrap .box2").animate({"margin-top" : "0"},300);
                }, 500);
            }
        });
        var ti = $(".m-item").index();
        var hT = $('.m-item').offset().top
        var wS = $(window).scrollTop();
       if (hT - 500 >= wS ){
        $(".m-item").addClass("act");
        $('.text-wrap').animate({
            opacity : 1 ,
            duration : 100,
        },1500);
   }
    });


    // 2차메뉴 호버
    $(".list-1 > ul > li").mouseover(function(){
        $("header").addClass("active");
        $(".list-1 ul li").addClass("active");
        $(".nav-2-depth").addClass("active");
        $(".util .search").addClass("active");
        $(".util .log-in").addClass("active");
        $("header > .header  > .logo-box > .white").addClass("active");
        $("header > .header  .logo-box > .color").addClass("active");
    });
    $(".list-1 > ul > li").mouseleave(function(){
        $("header").removeClass("active");
        $(".list-1 ul li").removeClass("active");
        $(".nav-2-depth").removeClass("active");
        $(".util .search").removeClass("active");
        $(".util .log-in").removeClass("active");
        $("header > .header > .logo-box > .white").removeClass("active");
        $("header > .header > .logo-box > .color").removeClass("active");
    });
    // 2차메뉴 호버 끝

    //슬릭 슬라이드
    $(".slider-wrap").slick({
        infinite : true,
        autoplay : true,
        autoplaySpeed : 2500,
        pauseOnHover : false,
        dots : true,
        arrows : true,
        prevArrow : $(".arrows-left"),
        nextArrow : $(".arrows-right"),
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 1024, //화면 사이즈 960px
                settings: {
                    arrows : true,
                    prevArrow : false,
                    nextArrow : false,
                } 
            },
        ]
    });
    if($('.slick-dots li').hasClass('slick-active')){
        $(this).addClass("active")
    };
    //슬릭 끝
    

    // 컬러피커창 관련

        //버튼
    $(".more-list").click(function(){
        $(".more-list").addClass("hide");
        $(".color-path-wrap .color-path-list .hide-list").addClass("show");
    });
    $(".close-list").click(function(){
        $(".more-list").removeClass("hide");
        $(".color-path-wrap .color-path-list .hide-list").removeClass("show");
    });
    // 컬러창
    $(".color-path-list > li").mouseover(function(){
        var color = $(this).index();
        var colorSet = $(".color-path-list > li").eq(color).css("background-color");
        $(".path-text > span").text(colorSet);
        console.log(colorSet);
        $(".sec3").css({"background-color" : colorSet});
    });

    $(".color-path-list > .more-list").mouseover(function(){
        $(".path-text > span").text("더보기");
    });
    $(".color-path-list > .close-list").mouseover(function(){
        $(".path-text > span").text("색상을 미리 확인해보세요");
    });
    $(".color-path-wrap").mouseleave(function(){
        $(".path-text > span").text("색상을 미리 확인해보세요");
    });

    //푸터영역
    $(".foot-sec3 .family-site").click(function(){
        $(".hide-family-site-wrap").toggleClass("active");
        $(".arrow").toggleClass("rev");
    });


    // 모바일의 경우

    $(".m-menu-wrap").click(function(){
        $(".util .m-menu-wrap .bar1").toggleClass("active");
        $(".util .m-menu-wrap .bar2").toggleClass("active");
        $(".util .m-menu-wrap .bar3").toggleClass("active");
        $(".mobile-nav-2").toggleClass("active");
    });
    $(".mobile-login-list > ul > li").click(function(){
		var list2 = $(this).index();
        $(".mobile-login-list > ul > li > ul").removeClass("active");
		$(".mobile-login-list > ul > li > ul").eq(list2).toggleClass("active");
        $(".mobile-login-list > ul > li > .mobile-login-arrows").eq(list2).toggleClass("active");
	});

        // m-sec3 색변하는 페이지 관련
        // 팝업 꺼버림
    $(".m-sec3-pop-up").click(function(){
        $(this).addClass("active");
    });

        //색변함
    $(".m-sec3-color-list > ul > li").mouseover(function(){
        var color = $(this).index();
        var chan = $(".m-sec3-color-list > ul > li").eq(color).css("background-color");
        $(".m-sec3 > img").css({'background-color' : chan});
        $(".m-sec3 .m-sec3_for_new_link > .change-color-name").text(chan);
    });
        //창 움직이는거 무쓸모
        $(".m-sec3-color-list > .arrows-left").click(function(){
            $('.m-sec3-color-list > ul').scrollLeft( $('.m-sec3-color-list > ul').scrollLeft() - 75 );
        });
        $(".m-sec3-color-list > .arrows-right").click(function(){
            $('.m-sec3-color-list > ul').scrollLeft($('.m-sec3-color-list > ul').scrollLeft() + 75 );
        });

});