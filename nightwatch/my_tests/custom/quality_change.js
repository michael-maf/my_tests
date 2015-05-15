var sel = require ('./../tests/selector_module.js');

exports.command = function (
//gridIndex, qualIndex, 
callback) {
    var self = this;
    this
        //.frame(null)
		.pause(1000)
        .waitForElementVisible(sel.creations.article.getNth_article(1), 1000, function() {	
			this.click(sel.creations.article.getNth_article(1));
		})
        .waitForElementVisible(sel.creations.creations_creation.preview.quality.quality_button, 3000, function() {
			this.click(sel.creations.creations_creation.preview.quality.quality_button);
		})
		.waitForElementVisible(sel.creations.creations_creation.preview.quality.getNth_button(1), 1000, function() {
			this.click(sel.creations.creations_creation.preview.quality.getNth_button(1));
		})
		.pause(1000);

    if( typeof callback === "function"){
        callback.call(self);
    }
    return this; // allows the command to be chained.
};