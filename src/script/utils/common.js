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