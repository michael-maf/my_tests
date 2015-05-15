var sel = require('./selector_module');
var info = sel.creations.creations_creation.info;
var action = sel.creations.creations_creation.action.edit;

var login_johnny = require('./login_module').login_johnny;

module.exports = {
	'Delete': function(browser) {
		login_johnny(browser);
		browser
			.pause(1000);
	}
};