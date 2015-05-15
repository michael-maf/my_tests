var sel = require('./../assets/selector_module.js');

var filepath = require('path').resolve("C:\\Users\\Michael\\Desktop\\nightwatch-testing\\assets\\3D_models\\head.obj");

var formObj = {
	title: "Waffle",
	description: "A WAFFLE",
	tags: ["waffle","food","mad swag"],
	public: false,
	license: 3,
	callback: undefined
};

module.exports = {
	'Upload': function(browser) {
		browser
			.loginJohnny()
			.waitForElementVisible(sel.header.upload_link, 1000, function() {
				browser.click(sel.header.upload_link);
			})
			.upload(filepath, formObj)
			.waitForElementNotPresent(sel.upload.details_prompt.waiting_text, 30000)
			.assert.title(formObj.title)
			.end();
	}
};