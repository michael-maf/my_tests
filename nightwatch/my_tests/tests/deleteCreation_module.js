var sel = require('./selector_module');
var info = sel.creations.creations_creation.info;
var action = sel.creations.creations_creation.action.edit;

var login_johnny = require('./fillForm_module')

module.exports = {
	'Delete': function(browser) {
		browser
			.url("http://alpha-preview.cashew3d.com/login")
			.waitForElementVisible('body', 1000, function() {
				browser.assert.title('Log in');
			})
			.login(username, password)
			.pause(1000)
	}
};