 var sel = require('./../assets/selector_module.js');
 var path = require("path");
 //var userDir = "C:/Users/Muhammad/Desktop" 
 /* Specify the location of your nightwatch-testing folder until we learn how to use relative file path
    E.g., C:/Users/Michael/...
 */
 var filepath = path.join(__dirname, "..", "assets", "drewsdog.obj");
 console.log(filepath);

var formObj = {
	title: "Drew's Cute Dog",
	description: "MOO!!!!! :3",
	tags: ["tuna","cat food","birds","fabulous"],
	public: false,
	license: 3,
	callback: undefined
};

var details = [formObj.title, formObj.description, formObj.tags, formObj.public, formObj.license];

module.exports = {
	'Upload a creation then delete it': function(browser) {
		browser
			.loginJohnny()
			.waitForElementVisible(sel.header.upload_link, 1000, function() {
				browser.click(sel.header.upload_link);
			})
			.upload(filepath, formObj, function() {
				browser
					.waitForElementPresent("a[data-hook='close-button']", 1000, false, function(present) {
						if(present)
							browser.clickElement("a[data-hook='close-button']")
					})
					.pause(1000)
					.clickElement(sel.profile.article.getNth_article(1))
					.getInfo(function(title, desc, tags, public, license) {
						console.log(title, desc, tags, public, license);
						for(var i = 0; i < arguments.length - 1; i++)
							browser.assert.deepEqual(arguments[i], details[i]);
						browser.assert.deepEqual(arguments[arguments.length - 1], "Creative Commons Attribution-ShareAlike");
					});
			})
			.assert.title(formObj.title)
			browser.deleteCreation(function() {
				browser.pause(1000);
		    })
			.assert.title('Creations')
			.end();
	}
};