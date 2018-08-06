// conf.js
exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,
  specs: ['./specs/*.js'],
  capabilities: {
    browserName: 'chrome',
	chromeOptions: {
		args: ["--headless"]
		}
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 50000
	}
}