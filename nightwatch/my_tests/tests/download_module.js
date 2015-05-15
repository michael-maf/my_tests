var sel = require ('./../assets/selector_module.js');

module.exports = {
	'Download a model' : function (browser) {
		browser
			.loginJohnny()
			.pause(1000)
			.waitForElementVisible(sel.profile.article.getNth_article(1), 3000, function() {
				browser.click(sel.creations.article.getNth_article(1));
			})
			.pause(1000)
			.download()
			.pause();
	}
}