var headerTpl = require('../tpls/header.html');
var menuTpl = require('../tpls/menu.html');
var footerTpl = require('../tpls/footer.html');
var commonUtil = require('../utils/common.js');

commonUtil.renderBody(menuTpl);
commonUtil.render($('#header'), headerTpl);
commonUtil.render($('#footer'), footerTpl);