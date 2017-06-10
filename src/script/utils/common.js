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
