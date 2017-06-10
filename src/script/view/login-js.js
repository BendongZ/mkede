var headerTpl = require('../tpls/header.html');
var loginTpl = require('../tpls/logintpl.html');
var commonUtil = require('../utils/common.js');

commonUtil.renderBody(loginTpl);
commonUtil.render($('#header'), headerTpl);
$('#header .header_search').css("display", "none");
$('#header .header_other').css("display", "block");
$('#header .header_other a').attr("href","index.html");
console.log("login");
console.log(IScroll);

var myScroll = new IScroll("#login_scroll", {
	probeType: 3,
	mouseWheel: true,
})
myScroll.on("scroll",function(){
	
})
