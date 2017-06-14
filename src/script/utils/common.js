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