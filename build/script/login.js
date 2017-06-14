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
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\r\n\t<div class=\"header_mask\"></div>\r\n\t<header>\r\n\t\t<div class=\"header_search\">\r\n\t\t\t<i></i>\r\n\t\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t\t</div>\r\n\t\t<div class=\"header_other\">\r\n\t\t\t<a href=\"\"><i class=\"yo-ico\">&#xe604;</i></a>\r\n\t\t\t<h3>登录</h3>\r\n\t\t</div>\r\n\t</header>\r\n</div>";

/***/ }),

/***/ 6:
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


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var login = __webpack_require__(20);


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var loginTpl = __webpack_require__(21);
	var commonUtil = __webpack_require__(6);

	commonUtil.renderBody(loginTpl);
	commonUtil.render($('#header'), headerTpl);
	$('#header .header_search').css("display", "none");
	$('#header .header_other').css("display", "block");
	$('#header .header_other a').attr("href","index.html");
	console.log("login");
	console.log(IScroll);

	var myScroll = new IScroll("#login_scroll", {
		probeType: 3,
		mouseWheel: true,
	})
	myScroll.on("scroll",function(){
		
	})



/***/ }),

/***/ 21:
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section id=\"login_scroll\">\r\n\t\t<div>\r\n\t\t\t<div class=\"banner\">\r\n\t\t\t\t<img src=\"/images/login_topimg.jpg\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<form id=\"login_form\" onsubmit=\"return false\">\r\n\t\t\t\t<div class=\"login_info\">\r\n\t\t\t\t\t<label for=\"username\">账户</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"username\" name=\"username\" value=\"\" placeholder=\"请输入手机号/邮箱/可得账户\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login_info\">\r\n\t\t\t\t\t<label for=\"\">密码</label>\r\n\t\t\t\t\t<input type=\"password\" id=\"userpwd\" name=\"userpwd\" value=\"\" placeholder=\"请输入密码\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"err_tips\"></div>\r\n\t\t\t\t<div class=\"login_btn\">\r\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"login\" value=\"登    录\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login_btn\">\r\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"register\" value=\"手机快速注册\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"forget_code\">\r\n\t\t\t\t\t<a href=\"###\">\r\n\t\t\t\t\t\t<span>?</span> 忘记密码\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login_footer\">\r\n\t\t\t\t\t<h3>第三方登录</h3>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<a href=\"###\"></a>\r\n\t\t\t\t\t\t<a href=\"###\"></a>\r\n\t\t\t\t\t\t<a href=\"###\"></a>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t</div>\r\n\t</section>\r\n</div>";

/***/ })

/******/ });