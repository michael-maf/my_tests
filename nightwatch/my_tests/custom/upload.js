var sel = require('./../tests/selector_module.js');
var upl = sel.upload.upload_prompt;

exports.command = function(fileIn, formIn, callback) {
	var self = this;
	this
		.waitForElementVisible(upl.dropzone_text, 1000)
		.setValue(upl.dropzone_input, fileIn)
		.waitForElementVisible(upl.upload_button, 2000, function() {
			this.click(upl.upload_button);
		})
		.waitForElementVisible(sel.upload.details_prompt.save_button, 10000, function() {
			this.fillForm(formIn.title, formIn.description, formIn.tags, formIn.public, formIn.license,  function() {
				this.click(sel.upload.details_prompt.save_button);
			});
		})
		.pause(1000);
		

	if(typeof callback === "function")
		callback.call(self);

	return this;
};