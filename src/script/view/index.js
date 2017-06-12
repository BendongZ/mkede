var headerTpl = require('../tpls/header.html');
var homeTpl = require('../tpls/home.html');
var footerTpl = require('../tpls/footer.html');
var commonUtil = require('../utils/common.js');


commonUtil.renderBody(homeTpl);
// var header = document.getElementById("header");
// commonUtil.render($('#header'),headerTpl);
commonUtil.render($("#header"),headerTpl);
// var footer = document.getElementById("footer");
commonUtil.render($("#footer"),footerTpl);

$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:2000,
        autoplayDisableOnInteraction: false, 
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable:true
    })
    $('.swiper-container .swiper-pagination').on('tap', 'span', function (){ 
        var index = $(this).index(); 
        mySwiper.slideTo(index+1); 
    });      
    var myScroll = new IScroll('#index-scroll',{
        probeType:3,
        mouseWheel:true,
        scrollbars:true,
        fadeScrollbars:true
    })
    myScroll.on("scroll",function(){
        if(this.y<-$("#index-scroll").height()){
            $("#back_top").css("display","block");
        }
        if(this.y>=-$("#index-scroll").height()){
            $("#back_top").css("display","none");
        }
    })
    $("#back_top").on("tap",function(){
        myScroll.scrollTo(0,0,500);
    })
})
