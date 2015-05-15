var sel = require ('./../assets/selector_module.js');

exports.command = function (callback) {
    var self = this;
    this
		.waitForElementVisible(sel.creations.creations_creation.action.save_button, 1000, function () {
			this.click(sel.creations.creations_creation.action.save_button);
		})
		.waitForElementVisible(sel.creations.creations_creation.action.save_prompt.download_button, 1000, function () {
			this.click(sel.creations.creations_creation.action.save_prompt.download_button);
		})
		.pause(1000)
		.acceptAlert();
    if (typeof callback === "function")
        callback.call(self);
    return this; // allows the command to be chained.
};