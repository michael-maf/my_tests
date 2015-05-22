 var sel = require('./../assets/selector_module.js');
 var userDir = "C:/Users/Muhammad/Desktop" 
 /* Specify the location of your nightwatch-testing folder until we learn how to use relative file path
    E.g., C:/Users/Michael/...
 */
 var filepath = require('path').resolve(userDir + "/nightwatch-testing/my_tests/assets/3D_models/drewsdog.obj");

 
 
 var licenseArr = ["All Rights Reserved", "Creative Commons Attribution", "Creative Commons Attribution-ShareAlike",
				"Creative Commons Attribution-NoDerivatives",
				"Creative Commons Attribution-NonCommercial", "Creative Commons Attribution-NonCommercial-ShareAlike",
				"Creative Commons Attribution-NonCommercial-NoDerivatives", "No Rights Reserved", "No Known Copyright"];
var formObj = {
	title: "Drew's Cute Dog",
	description: "Moo, get out the way.",
	tags: ["tuna","cat food","birds","fabulous"],
	public: false,
	license: 3
};

var details = [formObj.title, formObj.description, formObj.tags, formObj.public, formObj.license];

module.exports = {
	'Upload a creation then delete it': function(browser) {
		browser
			.loginJohnny()
			.clickElement(sel.header.upload_link)
			.upload(filepath, formObj, function() {
				browser
					.waitForElementPresent(sel.upload.details_prompt.close_button, 1000, false, function(present) {
						if(present)
							browser.clickElement(sel.upload.details_prompt.close_button)
					})
					.pause(5000)
					.clickElement(sel.header.username_link)
					.clickElement(sel.profile.article.getNth_article(1))
					.getInfo(function(title, desc, tags, public, license) {
						console.log(title, desc, tags, public, license);
						for(var i = 0; i < arguments.length - 1; i++) {
							browser.assert.deepEqual(arguments[i], details[i]);
						}
						browser.assert.deepEqual(license, licenseArr[formObj.license - 1]);
					});
			})
			.assert.title(formObj.title)
			.clickElement(sel.header.username_link)
			.assert.title('Profile')
			.clickElement(sel.profile.article.getNth_article(1))
			.deleteCreation()
			.assert.title('Creations')
			.end();
	}
};