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

	module.exports = __webpack_require__(12);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\r\n\t<div class=\"header_mask\"></div>\r\n\t<header>\r\n\t\t<div class=\"header_search\">\r\n\t\t\t<i></i>\r\n\t\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t\t</div>\r\n\t\t<div class=\"header_other\">\r\n\t\t\t<a href=\"\"><i class=\"yo-ico\">&#xe604;</i></a>\r\n\t\t\t<h3>登录</h3>\r\n\t\t</div>\r\n\t</header>\r\n</div>";

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer>\r\n\r\n\t<ul>\r\n\t\t<li><a href=\"index.html\" class=\"active\"><span class=\"yo-ico\">&#xe653;</span><span>首页</span></a></li>\r\n\t\t<li><a href=\"menu.html\"><span class=\"yo-ico\">&#xe644;</span><span>分类</span></a></li>\r\n\t\t<li><a href=\"###\"><i>0</i><span class=\"yo-ico car\">&#xe69d;</span><span>购物车</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe64f;</span><span>我的</span></a></li>\r\n\t</ul>\r\n</footer>\r\n";

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
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	 var app = __webpack_require__(13);



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var menuTpl = __webpack_require__(14);
	var footerTpl = __webpack_require__(5);
	var commonUtil = __webpack_require__(6);

	commonUtil.renderBody(menuTpl);
	commonUtil.render($('#header'),headerTpl);
	commonUtil.render($('#footer'),footerTpl);
	//ajax请求数据
	//https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png
	var isShow =true;
	var html=template('menulist',{show:isShow});
	$('.menu_list').html(html);
	$.ajax({
		url:'./mock/listmore',
		success:function(res){
			var dataSource = res.content.data.page;
			dataSource['show']=!isShow;
			 var html=template('menulist',dataSource);
			$('.menu_list').html(html);

		}
	})

	// $.ajax({
	//         url: './mock/listmore',
	//         success: function(res) {
	//             var str = '';
	//             var dataSource=res.content.data.page.result;
	//             for(var i=0;i<dataSource.length;i++){
	//              str +='<li>\
	//              <div><img src="//www.lgstatic.com/'+dataSource[i].companyLogo+'" /></div>\
	//              <div>\
	//                  <h2>'+dataSource[i].companyName+'</h2>\
	//                  <p>'+dataSource[i].positionName+'</p>\
	//                  <span>'+dataSource[i].createTime+'0</span>\
	//              </div>\
	//              <div>'+dataSource[i].salary+'</div>\
	//          </li>';
	//             }
	//             $('.m-index section ul').html(str)

	//                   //console.log(str);
	//         }
	//     })



/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n    <div id=\"header\"></div>\r\n    <section>\r\n\r\n        <div id=\"menu\">\r\n\r\n            <ul class=\"menu_list\">\r\n                 <script type=\"text/html\" id=\"menulist\">\r\n        {{if show}}\r\n                    <div class=\"yo-modal\">\r\n                        <div class=\"cont\">\r\n                            <div class=\"yo-loading\">\r\n                                <i class=\"yo-ico\"></i>\r\n                                <div class=\"text\">加载中...</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    {{/if}}\r\n                    {{if !show}}\r\n\r\n                    {{each result}}\r\n                    <li>\r\n                        <a href=\"\">\r\n                            <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/{{$value.companyLogo}}\" alt=\"\"></i>\r\n                            <p>{{$value.positionName}}</p>\r\n                        </a>\r\n                    </li>\r\n                    {{/each}}  {{/if}}\r\n                    </script>             \r\n            </ul>\r\n\r\n\r\n        </div>\r\n\r\n    </section>\r\n    <div id=\"footer\"></div>\r\n</div>\r\n";

/***/ })
/******/ ]);