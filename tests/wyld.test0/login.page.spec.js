describe('test0-verify successful login', function(){
	var EC = protractor.ExpectedConditions;
	beforeAll(function(){
		browser.get('https://test0.wyldmesh.net:8443/admin');
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
		browser.wait(EC.urlIs('https://test0.wyldmesh.net:8443/'), 20000);
		expect(browser.getTitle()).toEqual('Wyld Mesh: Home');
		//expect(browser.getCurrentUrl()).toEqual('https://test0.wyldmesh.net:8443/');
		console.log('Navigated to Home page');
	});
	afterAll(function(){
		console.log('Browser closed');
	});
});
