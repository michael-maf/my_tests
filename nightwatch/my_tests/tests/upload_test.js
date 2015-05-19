 var sel = require('./../assets/selector_module.js');
 var userDir = "C:/Users/Muhammad/Desktop" 
 /* Specify the location of your nightwatch-testing folder until we learn how to use relative file path
    E.g., C:/Users/Michael/...
 */
 var filepath = require('path').resolve(userDir + "/nightwatch-testing/my_tests/assets/3D_models/head.obj");

var formObj = {
	title: "Cats",
	description: "I like cats lol meow :P !!!",
	tags: ["tuna","cat food","birds","fabulous"],
	public: false,
	license: 3,
	callback: undefined
};

module.exports = {
	'Upload Test': function(browser) {
		browser
			.loginJohnny()
			.waitForElementVisible(sel.header.upload_link, 1000, function() {
				browser.click(sel.header.upload_link);
			})
			.upload(filepath, formObj)
			.waitForElementNotPresent(sel.upload.details_prompt.waiting_text, 30000)
			.getText(sel.creations.creations_creation.info.title_text, function(result) {
				browser.assert.equal(result.value, formObj.title);
			})
			.getText(sel.creations.creations_creation.info.description_text, function(result) {
				browser.assert.equal(result.value, formObj.description);
			})
			.assert.title(formObj.title)
			browser.deleteCreation(function() {
				browser.pause(1000);
		    })
			.assert.title('Creations')
			.end();
	}
};