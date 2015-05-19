/*
	Michael Bahng 5/14/2015
	functions for the login page for the Alpha cashew website.
*/

var sel = require('./../assets/selector_module.js');

module.exports = {
	'Login': function(browser) {
		browser
			.loginJohnny()
			.assert.visible(sel.profile.avatar_image)
			.assert.visible(sel.profile.fullname_text)
			.assert.visible(sel.profile.creationsCount_text)
			.assert.visible(sel.profile.creatingSince_text)
			.assert.visible(sel.profile.logout_button)
			.end();
	}
};