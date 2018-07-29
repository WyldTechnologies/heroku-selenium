describe('Test001-Verify Home Page Title', function(){
	var EC = protractor.ExpectedConditions;
	beforeAll(function(){
		browser.get('https://demo0.wyldmesh.net:8443/admin');
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
		browser.wait(EC.titleIs('Wyld Mesh: Home'), 10000);
		console.log('Navigated to Home page');
		expect(browser.getTitle()).toEqual('Wyld Mesh: Home');
	});
});