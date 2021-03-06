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

	module.exports = __webpack_require__(28);


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
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

	module.exports = "<div id=\"loading\" class=\"yo-modal\" style=\"display: none;\">\r\n\t<div class=\"cont loadcont\">\r\n\t\t<div class=\"yo-loading\"><i class=\"yo-ico\"></i>\r\n\t\t\t<div class=\"text\" style=\"color: #fff;\">加载中...</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = "<div>\r\n\t<div data-reactroot=\"\" id=\"toast\" class=\"yo-toast\" style=\"/* display: none; */\">Toast demo</div>\r\n</div>";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var login = __webpack_require__(29);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/


	var headerTpl = __webpack_require__(3);
	var loginTpl = __webpack_require__(30);
	var commonUtil = __webpack_require__(7);
	var dialogTpl = __webpack_require__(6);
	var loadingTpl = __webpack_require__(26);
	var toastTpl = __webpack_require__(27);

	commonUtil.renderBody(loginTpl);
	commonUtil.render($('#header'), headerTpl);
	commonUtil.renderBody(dialogTpl);
	commonUtil.renderBody(loadingTpl);
	$('#header .header_search').css("display", "none");
	$('#header .header_other').css("display", "block");
	$('#header .header_other h3').text("手机注册");
	$('#header .header_other a').on('click', function(e) {
		e.preventDefault();
		history.back(-1);
	})

	$(".agree_code a").on("tap", function(e) {
		e.preventDefault();
		$("#protocol_mask").css("display", "block").next().css("display", "block").removeClass("fadeOutDown").addClass("fadeInUp");
	})
	$('.foot_protocol h4').last().on("tap", function() {
		$(".foot_protocol").removeClass("fadeInUp").addClass("fadeOutDown").prev().css("display", "none");
	})

	function toastHide() {
		$("#ok").on("tap", function() {
			$("#confirmK").removeClass("fade-in").addClass("fade-out").parent().css("display", "none");
		})
	}

	function autoCode(obj) {
		obj.text("验证码发送中...");
		setTimeout(function(){
			$.ajax({
				type: "get",
				url: "/verify/kede/service/verifyCode.php",
				async: true,
				success: function(result) {
					console.log(result);
					obj.text("发送完成请注意查收");
					$(".err_tips").text(result);
				},
				error: function(msg) {
					alert("网络错误");
				}
			});
		},500)
	}
	$("#send_code").on("tap",function(){
		autoCode($("#send_code"))
	});

	$("#register").on("tap", function() {
		if(!/^1(3|4|5|7|8)\d{9}/.test($("#username").val())) {
			commonUtil.toastShow("请输入正确的手机号");
		} else if($("#verify_code").val() == '') {
			commonUtil.toastShow("验证码不能为空");
		} else if(!/^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,16}$/.test($("#userpwd").val())) {
			commonUtil.toastShow("密码需同时包含数字和字母");
		} else if($("#userpwd").val() != $("#userpwd1").val()) {
			commonUtil.toastShow("两次密码不一致");
		} else {
			$("#loading").css("display", "block");
			$.ajax({
				type: "post",
				url: "/zhuce/kede/service/register.php",
				async: true,
				data: $("#register_form").serialize(),
				success: function(result) {
					$("#loading").css("display", "none");
					if(JSON.parse(result)[0].err == 0) {
						commonUtil.toastShow(JSON.parse(result)[0].msg);
						$("#ok").on("tap", function() {
							$("#confirmK").removeClass("fade-in").addClass("fade-out").parent().css("display", "none");
							var login = {
								"username": $("#username").val(),
								"userpwd": $("#userpwd").val(),
							}
							localStorage.setItem("login", JSON.stringify(login));
							window.open(commonUtil.url+'login.html', "_self");
						})
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

	toastHide();


/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"m-index\">\r\n\t<div id=\"header\"></div>\r\n\t<section>\r\n\t\t<div>\r\n\t\t\t<form id=\"register_form\" onsubmit=\"return false\">\r\n\t\t\t\t<div class=\"register_info\">\r\n\t\t\t\t\t<label for=\"username\">手机号码</label>\r\n\t\t\t\t\t<input type=\"text\" maxlength=\"11\" id=\"username\" name=\"username\" value=\"\" placeholder=\"请输入正确的手机号码\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"register_info\">\r\n\t\t\t\t\t<input type=\"text\" name=\"verify_code\" id=\"verify_code\" placeholder=\"请输入短信校验码\" value=\"\" />\r\n\t\t\t\t\t<button id=\"send_code\">获取短信校验码</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"register_info\">\r\n\t\t\t\t\t<label for=\"\">设置密码</label>\r\n\t\t\t\t\t<input type=\"password\" id=\"userpwd\" name=\"userpwd\" value=\"\" placeholder=\"请输入 6~12 位字符\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"register_info\">\r\n\t\t\t\t\t<label for=\"\">再次确认</label>\r\n\t\t\t\t\t<input type=\"password\" id=\"userpwd1\" name=\"userpwd1\" value=\"\" placeholder=\"请再次输入登录密码\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"err_tips\"></div>\r\n\t\t\t\t<div class=\"register_btn\">\r\n\t\t\t\t\t<input type=\"button\" name=\"\" id=\"register\" value=\"完成注册\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"agree_code\">\r\n\t\t\t\t\t<span>点击完成注册表示您已同意</span>\r\n\t\t\t\t\t<a href=\"###\">\r\n\t\t\t\t\t\t可得用户协议\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</section>\r\n\t<div id=\"protocol_mask\" class=\"yo-modal\"><div class=\"cont\"><div class=\"yo-loading\"></div></div></div>\r\n\t<div class=\"foot_protocol animated\">\r\n\t\t<!--<div class=\"ani\" swiper-animate-effect=\"slideInUp\" swiper-animate-duration=\"0.5s\" swiper-animate-delay=\"0.3s\">-->\r\n\t\t<h4 class=\"h4_title\">用户协议</h4>\r\n\t\t<div class=\"protocol_main\">\r\n\t\t\t<div class=\"content\">\r\n\t\t\t\t<div class=\"pop-up-layer-text\">\r\n\t\t\t\t\t<b>可得移动商城服务协议</b>\r\n\t\t\t\t\t<br> 本协议是您与可得移动商城所有者（以下简称为\"可得\"）之间就可得移动商城服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击\"同意并继续\"按钮后，本协议即构成对双方有约束力的法律文件。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第1条 本站服务条款的确认和接纳</b>\r\n\t\t\t\t\t<br> 1.1本站的各项电子服务的所有权和运作权归可得所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。\r\n\t\t\t\t\t<br> 1.2用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。\r\n\t\t\t\t\t<br> 1.3如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。\r\n\t\t\t\t\t<br> 1.4可得保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第2条 本站服务</b>\r\n\t\t\t\t\t<br> 2.1可得通过互联网依法为用户提供互联网信息等服务，用户在完全同意本协议及本站规定的情况下，方有权使用本站的相关服务。\r\n\t\t\t\t\t<br> 2.2用户必须自行准备如下设备和承担如下开支：（1）上网设备，包括并不限于电脑或者其他上网终端、调制解调器及其他必备的上网装置；（2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第3条 用户信息</b>\r\n\t\t\t\t\t<br> 3.1用户应自行诚信向本站提供注册资料，用户同意其提供的注册资料真实、准确、完整、合法有效，用户注册资料如有变动的，应及时更新其注册资料。如果用户提供的注册资料不合法、不真实、不准确、不详尽的，用户需承担因此引起的相应责任及后果，并且可得保留终止用户使用可得各项服务的权利。\r\n\t\t\t\t\t<br> 3.2用户在本站进行浏览、下单购物等活动时，涉及用户真实姓名/名称、通信地址、联系电话、电子邮箱等隐私信息的，本站将予以严格保密，除非得到用户的授权或法律另有规定，本站不会向外界披露用户隐私信息。\r\n\t\t\t\t\t<br> 3.3用户注册成功后，将产生用户名和密码等账户信息，您可以根据本站规定改变您的密码。用户应谨慎合理的保存、使用其用户名和密码。用户若发现任何非法使用用户账号或存在安全漏洞的情况，请立即通知本站并向公安机关报案。\r\n\t\t\t\t\t<br> 3.4用户同意，可得拥有通过邮件、短信电话等形式，向在本站注册、购物用户、收货人发送订单信息、促销活动等告知信息的权利。\r\n\t\t\t\t\t<br> 3.5用户不得将在本站注册获得的账户借给他人使用，否则用户应承担由此产生的全部责任，并与实际使用人承担连带责任。\r\n\t\t\t\t\t<br> 3.6用户同意，可得有权使用用户的注册信息、用户名、密码等信息，登录进入用户的注册账户，进行证据保全，包括但不限于公证、见证等。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第4条 用户依法言行义务</b>\r\n\t\t\t\t\t<br> 本协议依据国家相关法律法规规章制定，用户同意严格遵守以下义务：\r\n\t\t\t\t\t<br> （1）不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；\r\n\t\t\t\t\t<br> （2）从中国大陆向境外传输资料信息时必须符合中国有关法规；\r\n\t\t\t\t\t<br> （3）不得利用本站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；\r\n\t\t\t\t\t<br> （4）不得干扰本站的正常运转，不得侵入本站及国家计算机信息系统；\r\n\t\t\t\t\t<br> （5）不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的，淫秽的、不文明的等信息资料；\r\n\t\t\t\t\t<br> （6）不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；\r\n\t\t\t\t\t<br> （7）不得教唆他人从事本条所禁止的行为；\r\n\t\t\t\t\t<br> （8）不得利用在本站注册的账户进行牟利性经营活动；\r\n\t\t\t\t\t<br> （9）不得发布任何侵犯他人著作权、商标权等知识产权或合法权利的内容；\r\n\t\t\t\t\t<br> 用户应不时关注并遵守本站不时公布或修改的各类合法规则规定。\r\n\t\t\t\t\t<br> 本站保有删除站内各类不符合法律政策或不真实的信息内容而无须通知用户的权利。\r\n\t\t\t\t\t<br> 若用户未遵守以上规定的，本站有权作出独立判断并采取暂停或关闭用户帐号等措施。用户须对自己在网上的言论和行为承担法律责任。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第5条 商品信息</b>\r\n\t\t\t\t\t<br> 本站上的商品价格、数量、是否有货等商品信息随时都有可能发生变动，本站不作特别通知。由于网站上商品信息的数量极其庞大，虽然本站会尽最大努力保证您所浏览商品信息的准确性，但由于众所周知的互联网技术因素等客观原因存在，本站网页显示的信息可能会有一定的滞后性或差错，对此情形您知悉并理解；可得欢迎纠错，并会视情况给予纠错者一定的奖励。\r\n\t\t\t\t\t<br> 为表述便利，商品和服务简称为\"商品\"或\"货物\"。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第6条 订单</b>\r\n\t\t\t\t\t<br> 6.1在您下订单时，请您仔细确认所购商品的名称、价格、数量、型号、规格、尺寸、联系地址、电话、收货人等信息。收货人与用户本人不一致的，收货人的行为和意思表示视为用户的行为和意思表示，用户应对收货人的行为及意思表示的法律后果承担连带责任。\r\n\t\t\t\t\t<br> 6.2除法律另有强制性规定外，双方约定如下：本站上销售方展示的商品和价格等信息仅仅是要约邀请，您下单时须填写您希望购买的商品数量、价款及支付方式、收货人、联系方式、收货地址（合同履行地点）、合同履行方式等内容；系统生成的订单信息是计算机信息系统根据您填写的内容自动生成的数据，仅是您向销售方发出的合同要约；销售方收到您的订单信息后，只有在销售方将您在订单中订购的商品从仓库实际直接向您发出时（ 以商品出库为标志），方视为您与销售方之间就实际直接向您发出的商品建立了合同关系；如果您在一份订单里订购了多种商品并且销售方只给您发出了部分商品时，您与销售方之间仅就实际直接向您发出的商品建立了合同关系；只有在销售方实际直接向您发出了订单中订购的其他商品时，您和销售方之间就订单中该其他已实际直接向您发出的商品才成立合同关系。您可以随时登录您在本站注册的账户，查询您的订单状态。\r\n\t\t\t\t\t<br> 6.3由于市场变化及各种以合理商业努力难以控制的因素的影响，本站无法保证您提交的订单信息中希望购买的商品都会有货；如您拟购买的商品，发生缺货，我们将联系您，并给您取消订单及要求退款的选择。\r\n\t\t\t\t\t<br> 6.4本站上的产品和定价信息在公布前已经过核实。但是，在极少数情形下会有错误。如果我们发现定价错误，我们将通知您，取消您的订单，并对订单金额全额退款。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第7条 配送</b>\r\n\t\t\t\t\t<br> 7.1销售方将会把商品（货物）送到您所指定的收货地址，所有在本站上列出的送货时间为参考时间，参考时间的计算是根据库存状况、正常的处理过程和送货时间、送货地点的基础上估计得出的。\r\n\t\t\t\t\t<br> 7.2因如下情况造成订单延迟或无法配送等，销售方不承担延迟配送的责任：\r\n\t\t\t\t\t<br> （1）用户提供的信息错误、地址不详细等原因导致的；\r\n\t\t\t\t\t<br> （2）货物送达后无人签收，导致无法配送或延迟配送的；\r\n\t\t\t\t\t<br> （3）情势变更因素导致的；\r\n\t\t\t\t\t<br> （4）不可抗力因素导致的，例如：自然灾害、交通戒严、突发战争等。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第8条 所有权及知识产权条款</b>\r\n\t\t\t\t\t<br> 8.1用户一旦接受本协议，即表明该用户主动将其在任何时间段在本站发表的任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等信息内容）的财产性权利等任何可转让的权利，如著作权财产权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利），全部独家且不可撤销地转让给可得所有，用户同意可得有权就任何主体侵权而单独提起诉讼。\r\n\t\t\t\t\t<br> 8.2本协议已经构成《中华人民共和国著作权法》第二十五条（条文序号依照2011年版著作权法确定）及相关法律规定的著作财产权等权利转让书面协议，其效力及于用户在可得网上发布的任何受著作权法保护的作品内容，无论该等内容形成于本协议订立前还是本协议订立后。\r\n\t\t\t\t\t<br> 8.3用户同意并已充分了解本协议的条款，承诺不将已发表于本站的信息，以任何形式发布或授权其它主体以任何方式使用（包括但限于在各类网站、媒体上使用）。\r\n\t\t\t\t\t<br> 8.4可得是本站的制作者,拥有此网站内容及资源的著作权等合法权利,受国家法律保护,有权不时地对本协议及本站的内容进行修改，并在本站张贴，无须另行通知用户。在法律允许的最大限度范围内，可得对本协议及本站内容拥有解释权。\r\n\t\t\t\t\t<br> 8.5除法律另有强制性规定外，未经可得明确的特别书面许可,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本站的信息内容，否则，可得有权追究其法律责任。\r\n\t\t\t\t\t<br> 8.6本站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是可得或其内容提供者的财产，受中国和国际版权法的保护。本站上所有内容的汇编是可得的排他财产，受中国和国际版权法的保护。本站上所有软件都是可得或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第9条 责任限制及不承诺担保</b>\r\n\t\t\t\t\t<br> 除非另有明确的书面说明,本站及其所包含的或以其它方式通过本站提供给您的全部信息、内容、材料、产品（包括软件）和服务，均是在\"按现状\"和\"按现有\"的基础上提供的。\r\n\t\t\t\t\t<br> 除非另有明确的书面说明,可得不对本站的运营及其包含在本网站上的信息、内容、材料、产品（包括软件）或服务作任何形式的、明示或默示的声明或担保（根据中华人民共和国法律另有规定的以外）。\r\n\t\t\t\t\t<br> 可得不担保本站所包含的或以其它方式通过本站提供给您的全部信息、内容、材料、产品（包括软件）和服务、其服务器或从本站发出的电子信件、信息没有病毒或其他有害成分。\r\n\t\t\t\t\t<br> 如因不可抗力或其它本站无法控制的原因使本站销售系统崩溃或无法正常使用导致网上交易无法完成或丢失有关的信息、记录等，可得会合理地尽力协助处理善后事宜。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第10条 协议更新及用户关注义务</b>\r\n\t\t\t\t\t<br> 根据国家法律法规变化及网站运营需要，可得有权对本协议条款不时地进行修改，修改后的协议一旦被张贴在本站上即生效，并代替原来的协议。用户可随时登录查阅最新协议；用户有义务不时关注并阅读最新版的协议及网站公告。如用户不同意更新后的协议，可以且应立即停止接受可得网站依据本协议提供的服务；如用户继续使用本网站提供的服务的，即视为同意更新后的协议。可得建议您在使用本站之前阅读本协议及本站的公告。&nbsp;如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第11条 法律管辖和适用</b>\r\n\t\t\t\t\t<br> 本协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区适用之有效法律（但不包括其冲突法规则）。 如发生本协议与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。 如缔约方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向有管辖权的中华人民共和国大陆地区法院提起诉讼。\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<br>\r\n\t\t\t\t\t<b>第12条 其他</b>\r\n\t\t\t\t\t<br> 12.1可得眼镜网所有者是指在政府部门依法许可或备案的可得眼镜网经营主体。\r\n\t\t\t\t\t<br> 12.2可得尊重用户和消费者的合法权利，本协议及本网站上发布的各类规则、声明等其他内容，均是为了更好的、更加便利的为用户和消费者提供服务。本站欢迎用户和社会各界提出意见和建议，可得将虚心接受并适时修改本协议及本站上的各类规则。\r\n\t\t\t\t\t<br> 12.3本协议内容中以黑体、加粗、下划线、斜体等方式显著标识的条款，请用户着重阅读。\r\n\t\t\t\t\t<br> 12.4您点击本协议下方的\"同意并继续\"按钮即视为您完全接受本协议，在点击之前请您再次确认已知悉并完全理解本协议的全部内容。\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<h4 class=\"h4_title\">确 定</h4>\r\n\t\t<!--</div>-->\r\n\t</div>\r\n</div>";

/***/ })
/******/ ]);