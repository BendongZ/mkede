var headerlistTpl = require('../tpls/header-list.html');
var menuTpl = require('../tpls/list.html');
var footerTpl = require('../tpls/footer.html');
var commonUtil = require('../utils/common.js');



commonUtil.renderBody(menuTpl);
commonUtil.render($('#header_list_box'),headerlistTpl);
commonUtil.render($('#footer'),footerTpl);