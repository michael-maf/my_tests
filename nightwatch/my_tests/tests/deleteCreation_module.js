var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;
var action = sel.creations.creations_creation.action.edit;

module.exports = {
	'Delete': function(browser) {
		browser
			.loginJohnny()
			.pause(1000);
	}
};