/*
	Michael Bahng 5/14/2015
	functions for the profile page for the Alpha cashew website.
*/

var sel = require('./selector_module.js');
var log = require('./login_module.js');
var prf_sel = sel.profile;

var logout = function(browser) {
	browser
		.waitForElementNotPresent(sel.login.login_prompt.close_button, 3000)
		.click(sel.login.login_prompt.close_button);
	//sel.run(browser, sel.login.login_prompt.close_button, 0, 0, 3000, 'np');
	//sel.run(browser, prf_sel.logout_button, browser.click);
};

var getNthCreation = function(browser, n) {
	sel.run(browser, sel.login.login_prompt.close_button, 0, 0, 5000, 'nv');
	sel.run(browser, prf_sel.article.getNth_article(n), browser.click);
};

module.exports = {
	/*
	'Logout Test': function(browser) {
		browser.url("http://alpha-preview.cashew3d.com/login");
		browser.assert.title('Log in');
		log.login_johnny(browser);
		//sel.run(browser, sel.login.login_prompt.close_button, browser.click);
		logout(browser);
		browser.end();
	},
	*/
	'Get Creation Test': function(browser) {
		browser.url("http://alpha-preview.cashew3d.com/login");
		browser.assert.title('Log in');
		log.login_johnny(browser);
		logout(browser);
		/*
		getNthCreation(browser, 1);
		sel.run(browser, sel.header.username_link, browser.click);
		logout(browser);
		browser.execute(function() { this.assert.title('Log in'); });
		browser.end();
		//browser.pause(10000);*/
	}
};