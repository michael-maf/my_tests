var sel = require ('./../assets/selector_module.js');

module.exports = {
	'Download a model' : function (browser) {
		browser
			.loginJohnny()
			.browser.clickElement(sel.creations.article.getNth_article(1))
			.download()
			.pause();
	}
}