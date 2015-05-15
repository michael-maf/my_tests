var sel = require('./../tests/selector_module.js');
var upl = sel.upload.upload_prompt;

exports.command = function(username, password, callback) {
	var self = this;
	this
		

	if(typeof callback === "function")
		callback.call(self);

	return this;
};