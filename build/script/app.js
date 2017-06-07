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
	console.log(111);



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var homeTpl = __webpack_require__(4);
	var footerTpl = __webpack_require__(5);

	var commonUtil = __webpack_require__(6);


	commonUtil.renderBody(homeTpl);
	var header = document.getElementById("header");
	//commonUtil.render($('#header'),headerTpl);
	commonUtil.render(header,headerTpl);
	var footer = document.getElementById("footer");
	commonUtil.render(footer,footerTpl);
	console.log($('#header'));



/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_mask\"></div>\r\n<header>\r\n\t<div class=\"header_search\">\r\n\t\t<i></i>\r\n\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t</div>\r\n</header>\r\n";

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section>\r\n\t\t<nav>\r\n\t\t\t<h1>10秒钟定制职位</h1>\r\n\t\t\t<div>去登录</div>\r\n\t\t</nav>\r\n\t\t<ul>\r\n\t\t\t\r\n\t\t</ul>\r\n\t</section>\r\n\t<div id=\"footer\"></div>\r\n</div>";

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer>\r\n\t<ul>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe653;</span><span>首页</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe644;</span><span>分类</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe69d;</span><span>购物车</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe64f;</span><span>我的</span></a></li>\r\n\t</ul>\r\n</footer>\r\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var common = {
		renderBody:function(tpl){
	//		$('body').html(tpl+$('body').html());
			var body = document.body;
			body.innerHTML = tpl + body.innerHTML;
		},
		render:function(obj,tpl){
	//		obj.html(tpl+obj.html());
			obj.innerHTML = tpl + obj.innerHTML;
		}
	}

	module.exports = common;



/***/ })
/******/ ]);