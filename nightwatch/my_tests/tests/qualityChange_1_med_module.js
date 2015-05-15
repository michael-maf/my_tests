var sel = require('./../assets/selector_module.js');

module.exports = {
  "Select from creations grid: 1; Change quality: medium" : function (client) {
	client
		.url('http://alpha-preview.cashew3d.com/creations')
		.waitForElementVisible('body', 1000, function() {
			client.qualityChange(1,2);
		})
		.end();
  }
}