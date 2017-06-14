var headerlistTpl = require('../tpls/header-car.html');
var menuTpl = require('../tpls/car.html');
var footerTpl = require('../tpls/footer-car.html');
var commonUtil = require('../utils/common.js');

commonUtil.renderBody(menuTpl);
commonUtil.render($('#header_car_box'), headerlistTpl);
commonUtil.render($('#footer'), footerTpl);
commonUtil.addLink();
commonUtil.setActive();

//数量减少
$('#god_menu li').each(function(value) {
	$(this).find('.jian').on('click', function(e) {
		e.preventDefault();
		var shu = parseInt($(this).next().text());
		shu--;
		$(this).next().text(shu)
		var danjia = parseInt($(this).parent().parent().parent().find('.price').text());
		var youhui = parseInt($(this).parent().parent().parent().find('.yh').text());
		var zongjia = (danjia + youhui) * shu;
		$('.m1').text(danjia * shu)
		$('.m2').text(zongjia)
		$('.m3').text(youhui)
		$('.m4').text(shu)

		if(parseInt($(this).next().text()) <= 0) {
			$(this).next().text(0)
			$('.m1').text(0)
			$('.m2').text(0)
			$('.m3').text(0)
			$('.m4').text(0)
		}

	})
	//数量增加
	$(this).find('.jia').on('click', function(e) {
		e.preventDefault();
		// console.log($(this))
		var shu = parseInt($(this).prev().text());
		shu++;
		$(this).prev().text(shu)
		var danjia = parseInt($(this).parent().parent().parent().find('.price').text());
		var youhui = parseInt($(this).parent().parent().parent().find('.yh').text());
		var zongjia = (danjia + youhui) * shu;
		$('.m1').text(danjia * shu)
		$('.m2').text(zongjia)
		$('.m3').text(youhui)
		$('.m4').text(shu)
	})
})