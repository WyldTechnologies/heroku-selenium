var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
	
var driver;

test.describe('Test002-Verify Communications page title', function(){
	
	test.beforeEach(function(done){
		this.timeout(50000);
		//driver=new webdriver.Builder().forBrowser('phantomjs').build();
		driver=new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build();
		//driver.get('http://wyldtechnologies.com/wyld-story.html').then(function(){
		driver.get('https://demo0.wyldmesh.net:8443/comms').then(function(){
		console.log('driver instantiated');});
		done();
	});
	
	test.it('assert Communications page title', function(done){
		var promise = driver.getTitle();
		promise.then(function(title){
			console.log('Communications page title is: ' + title);
			assert.equal(title,'Wyld Mesh: Comms');
		});
		done();
	});
	
	
	test.afterEach(function(done){
		driver.quit().then(function(){
			console.log('quit driver session');
		});
		done();
	});
});