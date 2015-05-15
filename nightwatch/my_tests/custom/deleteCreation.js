var sel = require('./../tests/selector_module.js');

exports.command = function(callback) {
	var self = this;



	if(typeof callback === "function")
		callback.call(self);

	return this;
};