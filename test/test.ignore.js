var assert = require('assert');
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
var express = require('express');
var app = express();
var mocha = require('mocha');
	describe = require('mocha').describe,
	it = require('mocha').it;
var chai = require('chai');

var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
    'args': ['--test-type', '--start-maximized']
	//'args': ['--headless']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
	

	
	var driver;
	
	before(function(){
		driver=new webdriver.Builder().forBrowser('phantomjs').build();
		//driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
		driver.getWindowHandle();
	});
	
	describe('Test001-Verify Page Title', function(){
		
	it('navigate to Wyld Technologies home page', function(){
		driver.get('http://wyldtechnologies.com/').then(function(){
		console.log('driver instantiated')
		});
	});
	
	it('assert page title', function(){
		driver.wait(function() {
			return driver.getTitle().then(function(title) {
				console.log('> ',title);
				return title === 'Wyld Technologies';
				});
		},10000).then(function(){
			expect(driver.findElement(By.css('.navbar-brand')).isDisplayed().toBe(true));
		});
	});
	
	});
	
	after(function(){
		driver.quit().then(function(){
			console.log('quit driver session')
		});
	});
