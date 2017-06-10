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
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\r\n\t<div class=\"header_mask\"></div>\r\n\t<header>\r\n\t\t<div class=\"header_search\">\r\n\t\t\t<i></i>\r\n\t\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t\t</div>\r\n\t\t<div class=\"header_other\">\r\n\t\t\t<a href=\"\"><i class=\"yo-ico\">&#xe604;</i></a>\r\n\t\t\t<h3>登录</h3>\r\n\t\t</div>\r\n\t</header>\r\n</div>";

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<footer>\r\n\t<ul>\r\n\t\t<li><a href=\"index.html\" class=\"active\"><span class=\"yo-ico\">&#xe653;</span><span>首页</span></a></li>\r\n\t\t<li><a href=\"menu.html\"><span class=\"yo-ico\">&#xe644;</span><span>分类</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe69d;</span><span>购物车</span></a></li>\r\n\t\t<li><a href=\"###\"><span class=\"yo-ico\">&#xe64f;</span><span>我的</span></a></li>\r\n\t</ul>\r\n</footer>\r\n";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/


	var common = {
		renderBody:function(tpl){
			$('body').prepend(tpl);
			// var body = document.body;
			// body.innerHTML = tpl + body.innerHTML;
		},
		render:function($obj,tpl){
			$obj.html(tpl);
			// obj.innerHTML = tpl + obj.innerHTML;
		}
	}

	module.exports = common;



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	 var app2 = __webpack_require__(8);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var menuTpl = __webpack_require__(9);
	var footerTpl = __webpack_require__(5);
	var commonUtil = __webpack_require__(6);

	commonUtil.renderBody(menuTpl);
	commonUtil.render($('#header'), headerTpl);
	commonUtil.render($('#footer'), footerTpl);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section>\r\n    <div id=\"menu\">\r\n      <ul class=\"menu_list\">\r\n        <li><a href=\"\">\r\n      <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n      \" alt=\"\"></i>\r\n      <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>\r\n\r\n\r\n    <li><a href=\"\">\r\n    <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n    \" alt=\"\"></i>\r\n    <p>透明隐形眼镜</p>\r\n    </a>\r\n\r\n    </li>    <li><a href=\"\">\r\n        <i><img src=\"https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png\r\n        \" alt=\"\"></i>\r\n        <p>透明隐形眼镜</p>\r\n        </a>\r\n\r\n        </li>\r\n    </ul></div>\r\n\t</section>\r\n\t<div id=\"footer\"></div>\r\n</div>\r\n";

/***/ })
/******/ ]);