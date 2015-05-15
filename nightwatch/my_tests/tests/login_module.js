/*
	Michael Bahng 5/14/2015
	functions for the login page for the Alpha cashew website.
*/

var sel = require('./selector_module.js');
var log_sel = sel.login;

var username = "johnnytests@matterandform.net";
var password = "ReadyPlayerOne";

var login_johnny = function(browser) {
	browser.login(username, password);
};

module.exports = {
	'Log in': function(browser) {
		browser
			.url("http://alpha-preview.cashew3d.com/login")
			.waitForElementVisible('body', 1000, function() {
				browser.assert.title('Log in');
			})
			.login("waffle", "potato", function() {
				login_johnny(browser);
			})
			.pause(1000)
			.end();
	}
};