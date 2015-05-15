var sel = require('./../tests/selector_module.js');

var form = sel.detailsForm;

//string, string, string[], boolean, int
exports.command = function(title, description, tags, public, license, callback) {
	var self = this;
	this
		//title
		.waitForElementVisible(form.title_field, 1000, function() {
			this.clearValue(form.title_field, function() {
				this.setValue(form.title_field, title);
			});
		})
		//description
		.waitForElementVisible(form.description_field, 1000, function() {
			this.clearValue(form.description_field, function() {
				this.setValue(form.description_field, description);
			});
		})
		//tags
		.waitForElementVisible(form.tags.getNthTag_field(1), 1000, function() {
			for(var i = 0; i < tags.length; i++) {
				this.click(form.tags.addTag_button, function() {
					this.waitForElementVisible(form.tags.getNthTag_field(i), 1000, function() {
						this.clearValue(form.tags.getNthTag_field(i), function() {
							this.setValue(form.tags.getNthTag_field(i), tags[i]);
						});
					});
				});
			}
		})
		//privacy
		.waitForElementVisible(form.privacy.public_button, 1000, function() {
			this.waitForElementVisible(form.privacy.private_button, 1000, function() {
				if(public)
					this.click(form.privacy.public_button);
				else
					this.click(form.privacy.private_button);
			});
		})
		//license
		.waitForElementVisible(form.license, 1000, function() {
			this.click(form.license, function() {
				this.click(form.getNthLicense_link(license));
			});
		});

	if(typeof callback === "function")
		callback.call(self);

	return this;
};