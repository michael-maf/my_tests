/*
	Michael Bahng 5/14/2015
	functions for the login page for the Alpha cashew website.
*/

var sel = require('./../assets/selector_module.js');
var log_sel = sel.login;

module.exports = {
	'Log in': function(browser) {
		browser
			.loginJohnny()
			.end();
	}
};