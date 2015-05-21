var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

module.exports = {
	'Check if we own a model on creations page' : function(browser) {
		var fullName = "";
		browser
			.loginJohnny()
			.getText(sel.profile.fullname_text, function (result) {
				fullName = result.value;
			})
			.clickElement(sel.header.explore_link)
			.clickElement(sel.creations.article.getNth_article(21))
			.getText(info.author.authorName_text, function (result) {
				browser.assert.deepEqual(fullName, result.value);
			})
			.pause(1000)
			.end();
	}
};