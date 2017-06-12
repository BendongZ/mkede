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

	module.exports = __webpack_require__(10);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer>\r\n\t<ul>\r\n\t\t<li><a href=\"###\" class=\"active\"><span class=\"yo-ico\">&#xe653;</span><span>首页</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe644;</span><span>分类</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe69d;</span><span>购物车</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe64f;</span><span>我的</span></a></li>\r\n\t</ul>\r\n</footer>\r\n";

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


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerlistTpl = __webpack_require__(12);
	var menuTpl = __webpack_require__(13);
	var footerTpl = __webpack_require__(5);
	var commonUtil = __webpack_require__(6);



	commonUtil.renderBody(menuTpl);
	commonUtil.render($('#header_list_box'),headerlistTpl);
	commonUtil.render($('#footer'),footerTpl);


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"header_list\">\r\n\t<div class=\"head_list_title\">\r\n\t\t<a href=\"\" class=\"back\"></a>\r\n\t\t<h1>彩色隐形眼镜</h1>\r\n\t\t<span><a href=\"\">筛选</a></span>\r\n\t</div>\r\n\t<ul class=\"head_list_select\"></ul>\r\n</div>";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n    <div id=\"header_list_box\"></div>\r\n    <section>\r\n   \r\n        <div id=\"menu\"> \r\n      \r\n            <ul class=\"menu_list\">\r\n                 <script type=\"text/html\" id=\"menulist\"> \r\n        {{if show}}\r\n                    <div class=\"yo-modal\">\r\n                        <div class=\"cont\">\r\n                            <div class=\"yo-loading\">\r\n                                <i class=\"yo-ico\"></i>\r\n                                <div class=\"text\">加载中...</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    {{/if}} \r\n                    {{if !show}} \r\n                    \r\n                    {{each result}}\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/{{$value.companyLogo}}\" alt=\"\"></i>\r\n                            <p>{{$value.positionName}}</p>\r\n                        </a>\r\n                    </li>\r\n                    {{/each}}  {{/if}}  </script>             \r\n            </ul>\r\n           \r\n\r\n        </div>\r\n      \r\n    </section>\r\n    <div id=\"footer\"></div>\r\n</div>\r\n";

/***/ })
/******/ ]);