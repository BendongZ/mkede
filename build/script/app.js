/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	/**
	 * Created by zd on 2017/6/6.
	 */
	var app = __webpack_require__(2);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var homeTpl = __webpack_require__(4);
	var footerTpl = __webpack_require__(5);
	var commonUtil = __webpack_require__(6);


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



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\r\n\t<div class=\"header_mask\"></div>\r\n\t<header>\r\n\t\t<div class=\"header_search\">\r\n\t\t\t<i></i>\r\n\t\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t\t</div>\r\n\t\t<div class=\"header_other\">\r\n\t\t\t<a href=\"\"><i class=\"yo-ico\">&#xe604;</i></a>\r\n\t\t\t<h3>登录</h3>\r\n\t\t</div>\r\n\t</header>\r\n</div>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section id=\"index-scroll\">\r\n\t\t<div>\r\n\t\t\t<div class=\"swiper-container\">\r\n\t\t\t\t<div class=\"swiper-wrapper\">\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/baaner_sj.jpg\"/></a></div>\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/banner_jhyg.jpg\"/></a></div>\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/banner_kjg.jpg\"/></a></div>\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/banner_mz.jpg\"/></a></div>\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/banner_sjgg.jpg\"/></a></div>\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/banner_sj (1).jpg\"/></a></div>\r\n\t\t\t\t\t<div class=\"swiper-slide\"><a href=\"###\"><img src=\"/images/banner_aekg.jpg\"/></a></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- 如果需要分页器 -->\r\n\t\t\t\t<div class=\"swiper-pagination\"></div>\r\n\t\t\t</div>\r\n\t\t\t<nav>\r\n\t\t\t\t<a href=\"###\"><i></i><span>我的收藏</span></a>\r\n\t\t\t\t<a href=\"###\"><i></i><span>积分商城</span></a>\r\n\t\t\t\t<a href=\"###\"><i></i><span>查询物流</span></a>\r\n\t\t\t\t<a href=\"###\"><i></i><span>值得买</span></a>\r\n\t\t\t</nav>\r\n\t\t\t<div class=\"special\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/ban1.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/ban2.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/ban3.jpg\"/></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"single_product\">\r\n\t\t\t\t<h3>热销单品</h3>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"single_product_de\">\r\n\t\t\t\t<div><a href=\"###\"><img src=\"/images/sja1g.jpg\"/></a></div>\r\n\t\t\t\t<div><a href=\"###\"><img src=\"/images/sja2g.jpg\"/></a></div>\r\n\t\t\t\t<div><a href=\"###\"><img src=\"/images/sja3.jpg\"/></a></div>\r\n\t\t\t\t<div><a href=\"###\"><img src=\"/images/sja4g.jpg\"/></a></div>\r\n\t\t\t\t<div><a href=\"###\"><img src=\"/images/sja5.jpg\"/></a></div>\r\n\t\t\t\t<div><a href=\"###\"><img src=\"/images/sja6.jpg\"/></a></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"touming_product\">\r\n\t\t\t\t<h3>透明隐形眼镜</h3>\r\n\t\t\t\t<a href=\"###\"><span>更多</span><i class=\"yo-ico\">&#xf07f;</i></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"invisible_glass_de\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_1.jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_6.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5(1).jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_8.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_9.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"caise_product\">\r\n\t\t\t\t<h3>彩色隐形眼镜</h3>\r\n\t\t\t\t<a href=\"###\"><span>更多</span><i class=\"yo-ico\">&#xf07f;</i></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"colour_glass_de\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_1.jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_6.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5(1).jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_8.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_9.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"huili_product\">\r\n\t\t\t\t<h3>护理用品</h3>\r\n\t\t\t\t<a href=\"###\"><span>更多</span><i class=\"yo-ico\">&#xf07f;</i></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"huli\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_1.jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_6.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5(1).jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_8.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_9.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"frame_product\">\r\n\t\t\t\t<h3>框架眼镜</h3>\r\n\t\t\t\t<a href=\"###\"><span>更多</span><i class=\"yo-ico\">&#xf07f;</i></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"frame_glass\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_1.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3g.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5(1).jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_8.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_9.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_9.jpg\"/></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a><a href=\"###\"><img src=\"/images/4f_21.jpg\"/></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"beauty_product\">\r\n\t\t\t\t<h3>美妆个护</h3>\r\n\t\t\t\t<a href=\"###\"><span>更多</span><i class=\"yo-ico\">&#xf07f;</i></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"beauty\">\r\n\t\t\t\t<ul>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_1.jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_3g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_6.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5(1).jpg\"/><h4>6片装强生润眸两周抛6片装</h4><b>￥78.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_5.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥42.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_8.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥99.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_11g.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥79.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_12gg.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥58.00</b></a></li>\r\n\t\t\t\t\t<li><a href=\"###\"><img src=\"/images/1f_9.jpg\"/><h4>强生润眸两周抛6片装</h4><b>￥128.00</b></a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t</div>\r\n\t</section>\r\n\t<div id=\"footer\"></div>\r\n</div>\r\n<div id=\"downloadApp\">\r\n\t<div class=\"close_bor\"></div>\r\n\t<img src=\"/images/app-download-bottom-11.png\" alt=\"\">\r\n</div>\r\n<aside id=\"back_top\">\r\n\t<span></span>\r\n</aside>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer>\r\n\t<ul>\r\n\t\t<li><a href=\"index.html\" class=\"active\"><span class=\"yo-ico\">&#xe653;</span><span>首页</span></a></li>\r\n\t\t<li><a href=\"menu.html\"><span class=\"yo-ico\">&#xe644;</span><span>分类</span></a></li>\r\n\t\t<li><a href=\"###\"><i>0</i><span class=\"yo-ico car\">&#xe69d;</span><span>购物车</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe64f;</span><span>我的</span></a></li>\r\n\t</ul>\r\n</footer>\r\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	// var common = {
	// 	renderBody:function(tpl){
	// //		$('body').html(tpl+$('body').html());
	// 		var body = document.body;
	// 		body.innerHTML = tpl + body.innerHTML;
	// 	},
	// 	render:function(obj,tpl){
	// //		obj.html(tpl+obj.html());
	// 		obj.innerHTML = tpl + obj.innerHTML;
	// 	}
	// }

	// module.exports = common;
	//单例模式,公共工具
	var common = {//封装
	  renderBody:function(tpl){//tpl模板，方法 ，render翻译提供
	    // var body = document.body;
	    // body.innerHTML=tpl+body.innerHTML;
	   // var $body=$(body);
	    //$(body).html(tpl+$body.html())
	    $('body').prepend(tpl)
	  },
	  render: function(obj,tpl){//第一个参数：对象，在那个对象上用
	    $(obj).html(tpl)
	  }
	}
	module.exports = common


/***/ })
/******/ ]);