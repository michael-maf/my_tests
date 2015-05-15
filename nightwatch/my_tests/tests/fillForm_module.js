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
	'Form': function(browser) {
		browser
			.url("http://alpha-preview.cashew3d.com/login")
			.waitForElementVisible('body', 1000, function() {
				browser.assert.title('Log in');
			})
			.login(username, password)
			.waitForElementVisible(sel.profile.article.first_article, 1000, function() {
				browser.click(sel.profile.article.first_article);
			})
			.waitForElementVisible(sel.creations.creations_creation.info.edit.edit_button, 1000, function() {
				browser.click(sel.creations.creations_creation.info.edit.edit_button);
			})
			.waitForElementVisible(sel.creations.creations_creation.info.edit.save_button, 1000, function() {
				browser.fillForm("Potato", "Tomato", ['a', 'b', 'c'], false, 2);
			})
			.pause(1000)
			.end();
	}
};