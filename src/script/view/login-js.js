var headerTpl = require('../tpls/header.html');
var loginTpl = require('../tpls/logintpl.html');
var commonUtil = require('../utils/common.js');
var dialogTpl = require('../tpls/dialog.html');
var loadingTpl = require('../tpls/loading.html');
var toastTpl = require('../tpls/toast.html');

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
