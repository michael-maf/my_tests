var webdriver = require('selenium-webdriver');

var url = "http://web-page-to-test-for-alert";

driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get(url);

driver.switchTo().alert().then(
  function() {
    console.log("alert detected");
  },
  function() {
    console.log("no alert detected");
  }
);

driver.quit(); 