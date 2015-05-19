/*
	Michael Bahng 5/14/2015
	functions for the login page for the Alpha cashew website.
*/

var sel = require('./../assets/selector_module.js');

module.exports = {
	'Login': function(browser) {
		browser
			.loginJohnny()
			.end();
	}
};