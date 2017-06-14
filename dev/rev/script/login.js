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

	module.exports = __webpack_require__(23);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"header_wrap\">\r\n\t<div class=\"header_mask\"></div>\r\n\t<header>\r\n\t\t<div class=\"header_search\">\r\n\t\t\t<i></i>\r\n\t\t\t<input type=\"search\" name=\"\" id=\"\" value=\"\" placeholder=\"请输入你要搜索的内容\"/>\r\n\t\t</div>\r\n\t\t<div class=\"header_other\">\r\n\t\t\t<div class=\"hd_btn_left\">\r\n\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"yo-ico\">&#xe604;</i><i class=\"special_i\"></i></a>\r\n\t\t\t</div>\r\n\t\t\t<h3></h3>\r\n\t\t\t<div class=\"hd_btn_right\">\r\n\t\t\t\t<a href=\"javascript:void(0)\"></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n</div>";

/***/ }),
/* 4 */,
/* 5 */,
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


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var login = __webpack_require__(24);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var loginTpl = __webpack_require__(25);
	var commonUtil = __webpack_require__(7);
	var dialogTpl = __webpack_require__(6);
	var loadingTpl = __webpack_require__(26);
	var toastTpl = __webpack_require__(27);

	commonUtil.renderBody(loginTpl);
	commonUtil.renderBody(dialogTpl);
	commonUtil.renderBody(loadingTpl);
	commonUtil.render($('#header'), headerTpl);
	$('#header .header_search').css("display", "none");
	$('#header .header_other').css("display", "block");
	$('#header .header_other h3').text("登录");
	$('#header .header_other a').on('click',function(e){
		e.preventDefault();
		history.go(-1);
	})

	function loginVerify(){
		var login = JSON.parse(localStorage.getItem("login"));
		if(login){
			$("#username").val(login.username);
			$("#userpwd").val(login.userpwd);
		}
	}
	loginVerify();
	$("#register").on("tap",function(){
		location.href = 'register.html';
	})
	$("#login").on("tap",function(){
		if(!/^1(3|4|5|7|8)\d{9}/.test($("#username").val())) {
			commonUtil.toastShow("请输入正确的手机号");
		}else if($("#userpwd").val()==null||$("#userpwd").val()==''){
			commonUtil.toastShow("密码不能为空");
		}else{
			$("#loading").css("display", "block");
			$.ajax({
				type: "post",
				url: "/zhuce/kede/service/login.php",
				async: true,
				data: $("#login_form").serialize(),
				success: function(result) {
					$("#loading").css("display", "none");
					console.log(JSON.parse(result));
					if(JSON.parse(result)[0].err == 0) {
						commonUtil.renderBody(toastTpl);
						$("#toast").css("display","block").text(JSON.parse(result)[0].msg);
						setTimeout(function(){
							$("#toast").parent().remove();
							var login = {
								"username": $("#username").val(),
								"userpwd": $("#userpwd").val(),
							}
							localStorage.setItem("login", JSON.stringify(login));
							window.open(commonUtil.url+'index.html', "_self");
						},1000)
					} else {
						commonUtil.toastShow(JSON.parse(result)[0].msg);
					}
				},
				error: function(err) {
					console.log(err);
				}
			});
			
		}
	})

	var myScroll = new IScroll("#login_scroll", {
		probeType: 3,
		mouseWheel: true,
	})
	myScroll.on("scroll",function(){
		
	})



/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section id=\"login_scroll\">\r\n\t\t<div>\r\n\t\t\t<div class=\"banner\">\r\n\t\t\t\t<img src=\"/images/login_topimg.jpg\" alt=\"\">\r\n\t\t\t</div>\r\n\t\t\t<form id=\"login_form\" onsubmit=\"return false\">\r\n\t\t\t\t<div class=\"login_info\">\r\n\t\t\t\t\t<label for=\"username\">账户</label>\r\n\t\t\t\t\t<input type=\"text\" id=\"username\" m maxlength=\"11\" name=\"username\" value=\"\" placeholder=\"请输入手机号/邮箱/可得账户\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login_info\">\r\n\t\t\t\t\t<label for=\"\">密码</label>\r\n\t\t\t\t\t<input type=\"password\" id=\"userpwd\" name=\"userpwd\" value=\"\" placeholder=\"请输入密码\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"err_tips\"></div>\r\n\t\t\t\t<div class=\"login_btn\">\r\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"login\" value=\"登    录\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login_btn\">\r\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"register\" value=\"手机快速注册\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"forget_code\">\r\n\t\t\t\t\t<a href=\"###\">\r\n\t\t\t\t\t\t<span>?</span> 忘记密码\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login_footer\">\r\n\t\t\t\t\t<h3>第三方登录</h3>\r\n\t\t\t\t\t<p>\r\n\t\t\t\t\t\t<a href=\"###\"></a>\r\n\t\t\t\t\t\t<a href=\"###\"></a>\r\n\t\t\t\t\t\t<a href=\"###\"></a>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t\t<br />\r\n\t\t</div>\r\n\t</section>\r\n</div>";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"loading\" class=\"yo-modal\" style=\"display: none;\">\r\n\t<div class=\"cont loadcont\">\r\n\t\t<div class=\"yo-loading\"><i class=\"yo-ico\"></i>\r\n\t\t\t<div class=\"text\" style=\"color: #fff;\">加载中...</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n\t<div data-reactroot=\"\" id=\"toast\" class=\"yo-toast\" style=\"/* display: none; */\">Toast demo</div>\r\n</div>";

/***/ })
/******/ ]);