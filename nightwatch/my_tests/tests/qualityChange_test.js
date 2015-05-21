var sel = require('./../assets/selector_module.js');
var qbuttonBigger = sel.creations.creations_creation.preview.quality.qualityBigger_button;
var qbuttonSmaller = sel.creations.creations_creation.preview.quality.qualitySmaller_button;
var currentFaces, newFaces = 0;

module.exports = {
	'Quality change : low to medium to high; Change size then quality : low to medium to high' : function (browser) {
		browser
			.loginJohnny()
			.waitForElementVisible(sel.profile.article.getNth_article(1), 1000, function() {
				browser.click(sel.creations.article.getNth_article(1));
			})
			.waitForElementVisible(qbuttonBigger, 1000, function() {
				browser.qualityChange(1, function() {
					browser.pause(1000);
				})
				.getText(sel.creations.creations_creation.info.geometryCount_text, function (result) {
					browser.assert.equal(result.value, 4096);
				})
				browser.qualityChange(2, function() {
					browser.pause(1000)
				})
				.getText(sel.creations.creations_creation.info.geometryCount_text, function (result) {
					browser.assert.equal(result.value, 32768);
				})
				browser.qualityChange(3, function() {
					browser.pause(1000)
				})
				.getText(sel.creations.creations_creation.info.geometryCount_text, function (result) {
					browser.assert.equal(result.value, 109113);
				})
				.assert.visible(sel.creations.creations_creation.action.nice_button)
				.assert.visible(sel.creations.creations_creation.action.comment_button)
				.assert.visible(sel.creations.creations_creation.action.share_button)
				.assert.visible(sel.creations.creations_creation.action.save_button)
				.assert.visible(sel.creations.creations_creation.info.geometryCount_text)
				.assert.visible(sel.creations.creations_creation.info.license_link)
				.assert.visible(sel.creations.creations_creation.info.author.author_link)
				.assert.visible(sel.creations.creations_creation.info.author.authorName_text)
			})
			.waitForElementVisible(sel.creations.creations_creation.preview.bigger_button, 1000, function() {
				browser.click(sel.creations.creations_creation.preview.bigger_button);
			})
			browser.waitForElementVisible(qbuttonSmaller, 1000, function() {
				browser
				.qualityChange(1, function() {
					browser.pause(1000)
				})
				.qualityChange(2, function() {
					browser.pause(1000);
				})
			})
			.end();
  }
}