var sel = require('./../assets/selector_module.js');

var info = sel.creations.creations_creation.info;
var edit = sel.creations.creations_creation.action.edit;

exports.command = function(callback) {
	var self = this;



	if(typeof callback === "function")
		callback.call(self);

	return this;
};