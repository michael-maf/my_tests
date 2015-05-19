var sel = require('./../assets/selector_module');
var info = sel.creations.creations_creation.info;

var details = ["Potato", "Tomato", ["wasd", "potato", "ham"], false, 2];

module.exports = {
	'Edit Model' : function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.profile.article.getNth_article(1))
			.clickElement(info.edit.edit_button)
			.fillForm(details[0], details[1], details[2], details[3], details[4])
			.clickElement(info.edit.save_button)
			.getInfo(function(title, desc, tags, public, license) {
				console.log(title, desc, tags, public, license);
				for(var i = 0; i < arguments.length; i++)
					browser.assert.deepEqual(arguments[i], details[i]);
			})
			.pause(1000)
			.end();
	}
};