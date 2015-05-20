var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;
var action = sel.creations.creations_creation.action.edit;

module.exports = {
	'Delete a creation': function(browser) {
		browser
			.loginJohnny()
				browser.waitForElementVisible(sel.profile.article.getNth_article(1), 1000, function() {
				browser.click(sel.profile.article.getNth_article(1), function() {
					browser.deleteCreation(function() {
						browser.pause(1000);
					});
				});
			})
			browser.assert.title('Creations')
			.end();
	}
};