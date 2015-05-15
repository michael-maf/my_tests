var sel = require('./../assets/selector_module.js');

exports.command = function(callback) {
	var self = this;

	this.



	if(typeof callback === "function")
		callback.call(self);

	return this;
};