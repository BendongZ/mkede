var headerTpl = require('../tpls/header.html');
var loginTpl = require('../tpls/registertpl.html');
var commonUtil = require('../utils/common.js');
var dialogTpl = require('../tpls/dialog.html');
var loadingTpl = require('../tpls/loading.html');
var toastTpl = require('../tpls/toast.html');

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