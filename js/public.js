$(document).ready(function(e) {
    //获取屏幕的高度赋值给brand-dl
    var desW=750,winW=document.documentElement.clientWidth,winH=document.documentElement.clientHeight,radio=winW/desW;
    var headerH=$("header").height();
    // console.log("eweweewe"+headerH);
    // console.log(headerH*radio);
    var screenH = document.body.clientHeight;
    var pageH = $(".simu-brand dl");
    var scr2 = $("body").scrollTop();
    console.log(scr2)
    pageH.height(screenH-headerH*radio);
    console.log(screenH);
    $("#car-model").on("click",function () {
        $("#container").css("display","block");
//                        alert("111")
    });
    $(".letter-abc a").on("click",function() {
        console.log($(this));
        var id = $(this).attr("id");//取当前点击对象id
        var tgid = 'tg' + id;//取点击字母所对应的品牌名称标记位置ID
        console.log(tgid)
        var tgtop = $("#" + tgid).position().top + $(".brand-dl").scrollTop();
        console.log(tgtop+"top距离顶部的："+$("#" + tgid).position().top+"st滚动条的："+$(".brand-dl").scrollTop());
        // 取字母标记位置top值 + 当前dl滚动条的top值 = 当前需要的top值
        $(".brand-dl").animate({scrollTop:tgtop}, 500);
        //这里利用jq animate动画给scrolltop 添加一个动画效果，瞬间高大上
    });
    //遮罩
    document.onreadystatechange = function () {
        if (document.readyState==="complete"){
            $(".loading").fadeOut();
        }
    };
    //input bug
    if(/Android [4-6]/.test(navigator.appVersion)) {
        window.addEventListener("resize", function() {
            if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
                window.setTimeout(function() {
                    document.activeElement.scrollIntoViewIfNeeded();
                },0);
            }
        })
    }
    //动画
    $(function(){
        setTimeout(function(){
            $('.icon-leopard-warp').addClass('animated bounceInLeft');
            $('.icon-leopard-warp').css("opacity","1")
        }, 0);
        // setTimeout(function(){
        //     $('.top-banner-icon').addClass('animated bounceInLeft');
        //     $('.top-banner-icon').css("opacity","1")
        // }, 2000);
        // setTimeout(function(){
        //     $('.top-banner-icon2').addClass('animated bounceInDown');
        //     $('.top-banner-icon2').css("opacity","1")
        // }, 2500);
        // setTimeout(function(){
        //     $('.top-banner-icon3').addClass('animated bounceInRight');
        //     $('.top-banner-icon3').css("opacity","1")
        // }, 3000);
        // setTimeout(function(){
        //     $('.top-banner-icon4').addClass('animated bounceInUp');
        //     $('.top-banner-icon4').css("opacity","1")
        // }, 3500);
    });

    function phoneType() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
//                alert("安卓手机");
            window.location.href = "http://zhushou.360.cn/detail/index/soft_id/3867306?recrefer=SE_D_%E6%83%A0%E8%BD%A6%E8%81%94%E5%8A%A8";
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            window.location.href = "https://itunes.apple.com/cn/app/%E6%83%A0%E8%BD%A6%E8%81%94%E5%8A%A8/id1255058049?mt=8";
//                alert("苹果手机");
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
//                alert("winphone手机");
            window.location.href = "http://zhushou.360.cn/detail/index/soft_id/3867306?recrefer=SE_D_%E6%83%A0%E8%BD%A6%E8%81%94%E5%8A%A8";
        }
    }
    $("#red_btn_load").on("click",function () {
        phoneType()
    });
    $("#btn-down").on("click",function () {
        phoneType()
    });
    $("#btn-down-2").on("click",function () {
        phoneType()
    });
    $("#download-btn").on("click",function () {
        phoneType()
    });
    $("#down-load").on("click",function () {
        phoneType()
    });
    function popAlert() {
        $(".pop").css("display","block");
        $(".pop").on("click",".pop-btn-close",function () {
            $(".pop").css("display","none")
        });
        $(".shade").on("click",function () {
            $(".pop").css("display","none")
        });
    }
    $("#btn-receive").on("click",function () {
        popAlert()
    });
    $("#red-packet-rule").on("click",function () {
//        var pageTop = $(document).scrollTop();
//        pageTop = 617;
        $("html,body").animate({scrollTop:$("#red_btn_load").offset().top},500);
    })

});
