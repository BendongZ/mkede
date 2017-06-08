var headerTpl = require('../tpls/header.html');
var menuTpl = require('../tpls/menu.html');
var footerTpl = require('../tpls/footer.html');
var commonUtil = require('../utils/common.js');


commonUtil.renderBody(menuTpl);
var header = document.getElementById("header");
// commonUtil.render($('#header'),headerTpl);
commonUtil.render(header,headerTpl);
var footer = document.getElementById("footer");
commonUtil.render(footer,footerTpl);
// console.log($('#header'));
