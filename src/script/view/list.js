var headerlistTpl = require('../tpls/header-list.html');
var menuTpl = require('../tpls/list.html');
var commonUtil = require('../utils/common.js');

commonUtil.renderBody(menuTpl);
commonUtil.render($('#header_list_box'),headerlistTpl);
$(".back").on("tap",function(e){
	e.preventDefault();
	history.go(-1);
})
//ajax请求数据
//https://pic.keede.com/Mobile/SystemImg/Class/894fb563-fcf0-4bd9-b304-eed7f37eec8e.png
var isShow =true;
var html=template('godList',{show:isShow});
$('#god_menu').html(html);
$.ajax({
    url: './mock/godmore',
    success: function(res) {
        var dataSource = res.content.data.page; //去掉result
        dataSource['show']=!isShow;
        var html = template('godList', dataSource) //dataSource对象
        $('#god_menu').html(html)
    }
})
var shang=true;
$('.head_list_select li').each(function(index){
  $(this).on('click',function(e){
    e.preventDefault();
    $(this).find('a').addClass('active').parent('li').siblings('li').find('a').removeClass('active');

  })

})
$('.price').on('click',function(){

  if(shang){
    $('.sanjiao').css({

            "transform":"rotate(180deg)"

    })
    shang=false
  }else{
    $('.sanjiao').css({
    "transform":"rotate(0deg)"
      })

      shang=true
  }
})
