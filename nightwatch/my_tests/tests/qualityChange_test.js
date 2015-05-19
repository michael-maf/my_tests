var sel = require('./../assets/selector_module.js');
var qbuttonBigger = sel.creations.creations_creation.preview.quality.qualityBigger_button;
var qbuttonSmaller = sel.creations.creations_creation.preview.quality.qualitySmaller_button;

module.exports = {
	'Quality Change Test' : function (browser) {
		browser
			.loginJohnny()
			.waitForElementVisible(sel.profile.article.getNth_article(1), 1000, function() {
				browser.click(sel.creations.article.getNth_article(1));
			})
			
			.waitForElementVisible(qbuttonBigger, 1000, function() {
				browser.qualityChange(1, function() {
					browser.pause(1000);
					});
				browser.qualityChange(2, function() {
					browser.pause(1000)
					});
				browser.assert.title('Creation')
				browser.assert.visible(sel.creations.creations_creation.action.nice_button)
				browser.assert.visible(sel.creations.creations_creation.action.comment_button)
				browser.assert.visible(sel.creations.creations_creation.action.share_button)
				browser.assert.visible(sel.creations.creations_creation.action.save_button)
				browser.assert.visible(sel.creations.creations_creation.info.geometryCount_text)
				browser.assert.visible(sel.creations.creations_creation.info.license_link)
				browser.assert.visible(sel.creations.creations_creation.info.author.author_link)
				browser.assert.visible(sel.creations.creations_creation.info.author.authorName_text);
			})
			.waitForElementVisible(sel.creations.creations_creation.preview.bigger_button, 1000, function() {
				browser.click(sel.creations.creations_creation.preview.bigger_button);
			})
			.waitForElementVisible(qbuttonSmaller, 1000, function() {
				browser.qualityChange(1, function() {
					browser.pause(1000);
				});
				browser.qualityChange(2, function() {
					browser.pause(1000);
				});
			})
			.end();
  }
}