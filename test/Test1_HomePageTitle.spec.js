var assert = require('assert');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var By = webdriver.By;	
var driver;

test.describe('Test001-Verify Home Page Title', function(){
	
/*	var chromeCapabilities = webdriver.Capabilities.chrome();
	var chromeOptions = {
    'args': ['--test-type', '--start-maximized'],
	'args': ['--headless']
	};
	chromeCapabilities.set('chromeOptions', chromeOptions);
*/
	test.before(function(done){
		this.timeout(50000);
		driver=new webdriver.Builder().forBrowser('phantomjs').build();
		//driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build();
		//driver=new webdriver.Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build();
		//driver.get('http://wyldtechnologies.com/').then(function(){
		driver.get('https://demo0.wyldmesh.net:8443/admin').then(function(){
			console.log('driver instantiated');});
		done();
	});
	
/*	test.it('assert Login page title', function(done){
		var promise = driver.getTitle();
		promise.then(function(title){
			console.log('Login page title is: ' + title);
			assert.equal(title,'Wyld Mesh: Admin');
		});
		done();
	});
*/
	test.it('login with valid credentials', function(done){
		//var username_textBox = driver.findElement(webdriver.By.id('username'));
		//var password_textBox = driver.findElement(webdriver.By.id('password'));
		//var login_button = driver.findElement(webdriver.By.id('login-submit'));
		
		//driver.wait(until.elementLocated(webdriver.By.id('login-submit')));
		
		driver.wait(function(){
			return driver.getTitle().then(function(title){
				console.log('Login page title is: ' + title);
				return title==="Wyld Mesh: Admin";
			});
		});
		
		//username_textBox.sendKeys('raheel.modassar');
		//password_textBox.sendKeys('password');
		//login_button.click();
		
		driver.findElement(webdriver.By.id('username')).sendKeys('raheel.modassar');
		driver.findElement(webdriver.By.id('password')).sendKeys('password');
		driver.findElement(webdriver.By.id('login-submit')).click();
		//driver.wait(until.titleIs('Wyld Mesh: Home'),7000);
		driver.wait(function(){
			return driver.getTitle().then(function(title){
				console.log('Page title is: ' + title);
				return title==="Wyld Mesh: Home";
			});
		});
		
		
		/*
		//driver.wait(webdriver.until.elementIsVisible(webdriver.By.xpath("//*[@id='content']/div[2]/section/section/div/div[1]/div/h1/b")), 500);
		

		*/
		//done();
	});
	/*
	test.it('Confirm if user gets logged in', async function(){
				//await driver.wait(until.titleIs('Wyld Mesh: Home'),5000);
				
		driver.wait(until.elementIsVisible(By.xpath("//a[@href='/settings'][@class='ng-binding'][1]")),10000);
		/*
				driver.wait(function(){
			 return driver.findElement(By.xpath("//a[@href='/settings'][@class='ng-binding'][1]")).getText().then(function(text){
				 console.log('Currently logged in user is: '+ text);
				 return text==="Raheel Modassar";
			 });			
		},5000);
		done();
		
	});
	*/
	test.after(function(done){
		driver.quit().then(function(){
			console.log('quit driver session');
		});
		done();
	});
});