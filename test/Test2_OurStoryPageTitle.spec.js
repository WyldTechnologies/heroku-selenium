var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
	
var driver;

test.describe('Test001-Verify Our Story Page Title', function(){
	
	test.beforeEach(function(done){
		this.timeout(20000);
		driver=new webdriver.Builder().forBrowser('phantomjs').build();
		driver.get('http://wyldtechnologies.com/wyld-story.html').then(function(){
		console.log('driver instantiated');});
		done();
	});
	
	test.it('assert Our Story page title', function(done){
		var promise = driver.getTitle();
		promise.then(function(title){
			console.log('page title is: ' + title);
			assert.equal(title,'Wyld Tech - Our Story');
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