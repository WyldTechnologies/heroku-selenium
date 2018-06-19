var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
	
var driver;

test.describe('Test001-Verify Home Page Title', function(){
	
	test.beforeEach(function(done){
		this.timeout(20000);
		driver=new webdriver.Builder().forBrowser('phantomjs').build();
		driver.get('http://wyldtechnologies.com/').then(function(){
		console.log('driver instantiated');});
		done();
	});
	
	test.it('assert Home page title', function(done){
		var promise = driver.getTitle();
		promise.then(function(title){
			console.log('page title is: ' + title);
			assert.equal(title,'Wyld Technologies');
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