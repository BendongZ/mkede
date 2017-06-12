var headerTpl = require('../tpls/header.html');
var menuTpl = require('../tpls/menu.html');
var footerTpl = require('../tpls/footer.html');
var commonUtil = require('../utils/common.js');

commonUtil.renderBody(menuTpl);
commonUtil.render($('#header'),headerTpl);
commonUtil.render($('#footer'),footerTpl);
//ajax请求数据
//https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png
var isShow =true;
var html=template('menulist',{show:isShow});
$('.menu_list').html(html);
$.ajax({
	url:'./mock/listmore',
	success:function(res){
		var dataSource = res.content.data.page;
		dataSource['show']=!isShow;
		 var html=template('menulist',dataSource);
		$('.menu_list').html(html);

	}
})

// $.ajax({
//         url: './mock/listmore',
//         success: function(res) {
//             var str = '';
//             var dataSource=res.content.data.page.result;
//             for(var i=0;i<dataSource.length;i++){
//              str +='<li>\
//              <div><img src="//www.lgstatic.com/'+dataSource[i].companyLogo+'" /></div>\
//              <div>\
//                  <h2>'+dataSource[i].companyName+'</h2>\
//                  <p>'+dataSource[i].positionName+'</p>\
//                  <span>'+dataSource[i].createTime+'0</span>\
//              </div>\
//              <div>'+dataSource[i].salary+'</div>\
//          </li>';
//             }
//             $('.m-index section ul').html(str)
            
//                   //console.log(str);
//         }
//     })
