var sel = require('./../assets/selector_module');
var action = sel.creations.creations_creation.action;

module.exports = {
	'Like a creation': function(browser) {
		browser
			.url("http://alpha-preview.cashew3d.com/creations")
			.clickElement(sel.creations.article.getNth_article(1))
			.assert.visible(action.nice_button)
			.clickElement(action.nice_button)
			.pause(1000)
			.clickElement(action.nice_prompt.close_button)
			.pause(1000)
			.end();
	}
};