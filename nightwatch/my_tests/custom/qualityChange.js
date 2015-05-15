var sel = require ('./../assets/selector_module.js');

exports.command = function (qualIndex, callback) {
    var self = this;
    this
    	.waitForElementVisible(sel.creations.creations_creation.preview.quality.quality_button, 3000, function() {
			this.click(sel.creations.creations_creation.preview.quality.quality_button);
		})
		.waitForElementVisible(sel.creations.creations_creation.preview.quality.getNth_button(qualIndex), 1000, function() {
			this.click(sel.creations.creations_creation.preview.quality.getNth_button(qualIndex));
		})
		.pause(1000);

    if(typeof callback === "function")
        callback.call(self);
    
    return this; // allows the command to be chained.
};