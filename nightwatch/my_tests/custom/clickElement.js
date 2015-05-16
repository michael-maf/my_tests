var sel = require ('./../assets/selector_module.js');

exports.command = function (css, callback) {
    var self = this;

    this.waitForElementVisible(css, 1000, function() {
    	this.click(css);
    });

    if (typeof callback === "function")
        callback.call(self);
    return this; // allows the command to be chained.
};