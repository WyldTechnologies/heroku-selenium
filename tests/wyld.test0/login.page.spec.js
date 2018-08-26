describe('demo001-Verify Home Page Title', function(){
	var EC = protractor.ExpectedConditions;
	beforeAll(function(){
		browser.get('https://demo0.wyldmesh.net/admin');
		console.log('Browser Launched');
	});
	it('assert Login page title', function() {	
		expect(browser.getTitle()).toEqual('Wyld Mesh: Admin');
		console.log('Navigated to Login page');
	});
	it('login with valid credentials', function() {
		element(by.id('username')).sendKeys('raheel.modassar');
		element(by.id('password')).sendKeys('password');
		element(by.id('login-submit')).click();
		browser.wait(EC.urlIs('https://demo0.wyldmesh.net/'), 20000);
		expect(browser.getTitle()).toEqual('Wyld Mesh: Home');
		expect(browser.getCurrentUrl()).toEqual('https://demo0.wyldmesh.net/');
		console.log('Navigated to Home page');
	});
	afterAll(function(){
		console.log('Browser closed');
	});
});