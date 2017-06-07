var common = {
	renderBody:function(tpl){
//		$('body').html(tpl+$('body').html());
		var body = document.body;
		body.innerHTML = tpl + body.innerHTML;
	},
	render:function(obj,tpl){
//		obj.html(tpl+obj.html());
		obj.innerHTML = tpl + obj.innerHTML;
	}
}

module.exports = common;
