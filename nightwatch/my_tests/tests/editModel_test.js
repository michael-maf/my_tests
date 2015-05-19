var sel = require('./../assets/selector_module');

module.exports = {
	'Edit Model' : function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.header.explore_link)
			.clickElement(sel.creations.article.getNth_article(1))
			.clickElement(sel.creations.creations_creation.bigger_button)
			.pause(1000)
			.execute("scrollTo(0, 3000)");
	}
};