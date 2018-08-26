exports.config = {
    framework: 'jasmine2',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
        wyld_test0: './wyld.test0/*.spec.js',
        wyld_website: './wyld.website/*.spec.js'
    },
    directConnect:true,
    capabilities: {
        browserName:'chrome',
		chromeOptions: {
		binary:'/app/.apt/usr/bin/google-chrome',
		args: ["--headless"]
		}
    },
    jasmineNodeOpts:{defaultTimeoutInterval:60000}
};
