var sel = require('./../assets/selector_module');
var action = sel.creations.creations_creation.action;

module.exports = {
	'share': function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.profile.article.getNth_article(1))
			.clickElement(action.share_button)
			.clickElement("a[data-network='tumblr']")
			.window_handles(function(result) {
				console.log(result.value);
				browser.switchWindow(result.value[1], function() {
					browser.url(function(url) {
						console.log(url);
					});
				});
			})
			.pause(10000)
			.end();
	}
};