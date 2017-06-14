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

	module.exports = __webpack_require__(7);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var app = __webpack_require__(8)


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerlistTpl = __webpack_require__(9);
	var menuTpl = __webpack_require__(10);
	var footerTpl = __webpack_require__(5);
	var commonUtil = __webpack_require__(6);

	commonUtil.renderBody(menuTpl);
	commonUtil.render($('#header_car_box'), headerlistTpl);
	commonUtil.render($('#footer'), footerTpl);

	//ajax请求数据
	//https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png
	// var isShow = true;
	// var html = template('godList', { show: isShow });
	// $('#god_menu').html(html);
	// $.ajax({
	//     url: './mock/godmore',
	//     success: function(res) {
	//         var dataSource = res.content.data.page; //去掉result
	//         dataSource['show'] = !isShow;
	//         var html = template('godList', dataSource) //dataSource对象
	//         $('#god_menu').html(html)
	//     }
	// })
	// var shang = true;
	// $('.head_list_select li').each(function(index) {
	//     $(this).on('click', function(e) {
	//         e.preventDefault();
	//         $(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');

	//     })

	// })
	// $('.price').on('click', function() {

	//     if (shang) {
	//         $('.sanjiao').css({

	//             "transform": "rotate(180deg)"

	//         })
	//         shang = false
	//     } else {
	//         $('.sanjiao').css({
	//             "transform": "rotate(0deg)"
	//         })

	//         shang = true
	//     }
	// })


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"header_car\">\r\n    <div class=\"head_list_title\">\r\n        <a href=\"\" class=\"back\"></a>\r\n        <h1>购物车</h1>\r\n        <span class=\"shaixuan\"><a href=\"\">编辑</a></span>\r\n    </div>\r\n    <div class=\"header_gundong\">\r\n        <marquee behavior=\"\" direction=\"left\">\r\n            <i></i><span>提前加车商品付款至多减200元</span>\r\n\r\n        </marquee>\r\n    </div>\r\n</div>";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n    <div id=\"header_car_box\"></div>\r\n    <section>\r\n        <div id=\"list_car\">\r\n            <p class=\"youhui\">\r\n                <i>满减</i><span>6.18眼镜节满269减20、满369减30、满569减50 再买170.00元，即可参与满269.00减20.00</span>\r\n            </p>\r\n            <ul id=\"god_menu\">\r\n\r\n            </ul>\r\n        </div>\r\n    </section>\r\n    <div id=\"footer\"></div>\r\n</div>";

/***/ })
/******/ ]);