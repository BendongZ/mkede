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


	var app = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var login = JSON.parse(localStorage.getItem("login"));
		if(login){
			var headerTpl = __webpack_require__(3);
			var accountTpl = __webpack_require__(4);
			var footerTpl = __webpack_require__(5);
			var dialogTpl = __webpack_require__(6);
			var commonUtil = __webpack_require__(7);
			commonUtil.renderBody(accountTpl);
			commonUtil.render($("#header"),headerTpl);
			commonUtil.render($("#footer"),footerTpl);
			$('#header .header_search').css("display", "none");
			$('#header .header_other').css("display", "block");
			$('#header .header_other .hd_btn_right').css("display", "block");
			$('#header .header_other h3').text("我的");
			$(".centerinfo p").text(login.username);
			$('#header .header_other a .special_i').css("display","inline-block");
			$('#header .header_other .hd_btn_left a .yo-ico').on('click', function(e) {
				e.preventDefault();
				history.back(-1);
			})
			$('#header .header_other .hd_btn_left a .special_i').on('click', function(e) {
				commonUtil.renderBody(dialogTpl);
				commonUtil.toastShow("该功能正在开发中...");
				$("#ok").on("tap", function() {
					$("#zhaozi").parent().remove();
				})
			})
			
			commonUtil.addLink();
			commonUtil.setActive();
			window.onload = function(){
					var myScroll = new IScroll("#account_scroll", {
						probeType: 3,
						mouseWheel: true,
					})
					myScroll.on("scroll",function(){
			//			console.log(this.y);
					})
			}
			$("#exit").on("tap",function(){
					commonUtil.renderBody(dialogTpl);
					commonUtil.toastShowCancel("你真的要残忍退出么");
					$("#ok").on("tap", function() {
						$("#zhaozi").parent().remove();
							localStorage.removeItem("login");
							location.href="index.html";
					})
					$("#cancel").on("tap", function() {
						$("#zhaozi").parent().remove();
					})
					
			})
		}else{
			location.href = 'login.html';
		}

















/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\r\n\t<div class=\"header_mask\"></div>\r\n\t<header>\r\n\t\t<div class=\"header_search\">\r\n\t\t\t<i></i>\r\n\t\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t\t</div>\r\n\t\t<div class=\"header_other\">\r\n\t\t\t<div class=\"hd_btn_left\">\r\n\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"yo-ico\">&#xe604;</i><i class=\"special_i\"></i></a>\r\n\t\t\t</div>\r\n\t\t\t<h3></h3>\r\n\t\t\t<div class=\"hd_btn_right\">\r\n\t\t\t\t<a href=\"javascript:void(0)\"></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n</div>";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section id=\"account_scroll\">\r\n\t\t<div>\r\n\t\t\t<div class=\"banner\">\r\n\t\t\t\t<img src=\"/images/center_banner.jpg\" alt=\"\">\r\n\t\t\t\t\t<div class=\"centerinfo\">\r\n\t\t\t\t\t\t<img class=\"userimg\" src=\"/images/photo.jpg\"/>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t17608284778\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<div class=\"userlevel\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<i></i>\r\n\t\t\t\t\t\t\t\t普通会员\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div id=\"middle\">\r\n\t\t\t\t<div class=\"center_nav\">\r\n\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t<li><a href=\"###\">待付款</a></li>\r\n\t\t\t\t\t\t<li><a href=\"###\">待发货</a></li>\r\n\t\t\t\t\t\t<li><a href=\"###\">待评价</a></li>\r\n\t\t\t\t\t\t<li><a href=\"###\">退换货</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h3 class=\"line\"></h3>\r\n\t\t\t\t<div class=\"center_menu_nav\">\r\n\t\t\t\t\t<ul>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link\"></span><span class=\"title \">全部订单</span>\r\n                            <span class=\"nav_r\">\r\n                                全部已购商品\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link wallet_icon\"></span><span class=\"title \">我的钱包</span>\r\n                            <span class=\"nav_r\">\r\n                                优惠券、余额、积分\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    <h3 class=\"line\" style=\"padding-top: 20px;\"></h3>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link collect_icon\"></span><span class=\"title \">我的收藏</span><span class=\"nav_r\">\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    \r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link security\"></span><span class=\"title \">账户安全</span><span class=\"nav_r\">\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    \r\n                    <h3 class=\"line\" style=\"padding-top: 20px;\"></h3>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link feedback\"></span><span class=\"title \">意见反馈</span><span class=\"nav_r\">\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link about_icon\"></span><span class=\"title \">关于可得</span><span class=\"nav_r\">\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                     <h3 class=\"line\" style=\"padding-top: 20px;\"></h3>\r\n                     <li id=\"exit\">\r\n                        <a href=\"javascript:void(0)\">\r\n                            <span class=\"nav_link about_icon\"></span><span class=\"title \">退出登录</span><span class=\"nav_r\">\r\n                                <b></b>\r\n                            </span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<div id=\"footer\"></div>\r\n</div>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer>\r\n\r\n\t<ul>\r\n\t\t<li data-url=\"index.html\"><a href=\"javascript:void(0)\" class=\"active\"><span class=\"yo-ico\">&#xe653;</span><span>首页</span></a></li>\r\n\t\t<li data-url=\"menu.html\"><a href=\"javascript:void(0)\"><span class=\"yo-ico\">&#xe644;</span><span>分类</span></a></li>\r\n\t\t<li data-url=\"car.html\"><a href=\"javascript:void(0)\"><i>0</i><span class=\"yo-ico car\">&#xe69d;</span><span>购物车</span></a></li>\r\n\t\t<li data-url=\"account.html\"><a href=\"javascript:void(0)\"><span class=\"yo-ico\">&#xe64f;</span><span>我的</span></a></li>\r\n\t</ul>\r\n</footer>\r\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n\t<div id=\"zhaozi\" data-reactroot=\"\" class=\"yo-modal yo-modal-center\" style=\"display: none;\">\r\n\t\t<div id=\"confirmK\" class=\"cont fade-out ani\" style=\"position: absolute; top: 50%;transform: translate(-50%,-50%); left: 50%; animation-duration: 200ms; width: auto; height: auto;\">\r\n\t\t\t<div class=\"yo-dialog\">\r\n\t\t\t\t<header class=\"hd\">\r\n\t\t\t\t\t<h2 class=\"title\">温馨提示！</h2></header>\r\n\t\t\t\t<div id=\"msg\" class=\"bd\"></div>\r\n\t\t\t\t<footer class=\"ft\"><button id=\"cancel\" class=\"yo-btn yo-btn-dialog yo-btn-l\">取消</button><button id=\"ok\" class=\"yo-btn yo-btn-dialog yo-btn-l\">确定</button></footer>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	//单例模式,公共工具
	var common = {//封装
	  renderBody:function(tpl){//tpl模板，方法 ，render翻译提供
	    $('body').prepend(tpl)
	  },
	  render: function(obj,tpl){//第一个参数：对象，在那个对象上用
	    $(obj).html(tpl)
	  },
	  url:"http://10.9.166.125:8000/",
	  toastShow:function(msg) {
			$("#zhaozi").css("display", "block").children("div").removeClass("fade-out").addClass("fade-in");
			$("#cancel").css("display","none");
			$("#msg").text(msg);
		},
	  toastShowCancel:function(msg) {
			$("#zhaozi").css("display", "block").children("div").removeClass("fade-out").addClass("fade-in");
			$("#cancel").css("display","block");
			$("#msg").text(msg);
		},
		addLink:function(){
			$("#footer li").on("tap",function(){
				var attrUrl = $(this).attr("data-url");
				if(location.pathname.replace(/^\//,'')!==attrUrl){
					location.href = attrUrl;
				}
			})
		},
		setActive:function(){
			var filename = location.pathname.replace(/^\//,'');
			$('#footer li[data-url="'+filename+'"] > a').addClass("active").parent().siblings().find("a").removeClass("active");
		}
	}
	module.exports = common


/***/ })
/******/ ]);