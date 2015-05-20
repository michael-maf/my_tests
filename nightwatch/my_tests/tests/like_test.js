var sel = require('./../assets/selector_module');
var action = sel.creations.creations_creation.action;

module.exports = {
	'Like a creation': function(browser) {
		browser
			.url("http://alpha-preview.cashew3d.com/creations")
			.clickElement(sel.creations.article.getNth_article(1))
			.clickElement(action.nice_button)
			.clickElement(action.niceClose_button)
			.loginJohnny()
			.assert.title("Profile")
			.clickElement(sel.profile.article.getNth_article(1))
			.assert.visible(action.nice_button)
			.clickElement(action.nice_button)
			.end();
	}
};