var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

module.exports = {
	'Edit Model' : function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.profile.article.getNth_article(1))
			.clickElement(info.edit.edit_button)
			.fillForm("Potato", "Tomato", ["wasd", "potato", "ham"], false, 2)
			.clickElement(info.edit.save_button)
			.pause(10000)
			.end();
	}
};