var login = JSON.parse(localStorage.getItem("login"));
	if(login){
		var headerTpl = require('../tpls/header.html');
		var accountTpl = require('../tpls/accounttpl.html');
		var footerTpl = require('../tpls/footer.html');
		var dialogTpl = require('../tpls/dialog.html');
		var commonUtil = require('../utils/common.js');
		commonUtil.renderBody(accountTpl);
		commonUtil.render($("#header"),headerTpl);
		commonUtil.render($("#footer"),footerTpl);
		$('#header .header_search').css("display", "none");
		$('#header .header_other').css("display", "block");
		$('#header .header_other .hd_btn_right').css("display", "block");
		$('#header .header_other h3').text("我的");
		$(".centerinfo p").text(login.username);
		$('#header .header_other a .special_i').css("display","inline-block");
		$('#header .header_other .hd_btn_left a .yo-ico').on('click', function(e) {
			e.preventDefault();
			history.back(-1);
		})
		$('#header .header_other .hd_btn_left a .special_i').on('click', function(e) {
			commonUtil.renderBody(dialogTpl);
			commonUtil.toastShow("该功能正在开发中...");
			$("#ok").on("tap", function() {
				$("#zhaozi").parent().remove();
			})
		})
		
		commonUtil.addLink();
		commonUtil.setActive();
		window.onload = function(){
				var myScroll = new IScroll("#account_scroll", {
					probeType: 3,
					mouseWheel: true,
				})
				myScroll.on("scroll",function(){
		//			console.log(this.y);
				})
		}
		$("#exit").on("tap",function(){
				commonUtil.renderBody(dialogTpl);
				commonUtil.toastShowCancel("你真的要残忍退出么");
				$("#ok").on("tap", function() {
					$("#zhaozi").parent().remove();
						localStorage.removeItem("login");
						location.href="index.html";
				})
				$("#cancel").on("tap", function() {
					$("#zhaozi").parent().remove();
				})
				
		})
	}else{
		location.href = 'login.html';
	}














