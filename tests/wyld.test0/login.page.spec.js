describe('test0 - login verification', function(){
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
		element(by.model('vm.currentUser.username')).sendKeys('raheel.modassar');
		element(by.model('vm.password')).sendKeys('password');
		element(by.buttonText('Log in')).click();
		browser.wait(EC.urlIs('https://test0.wyldmesh.net:8443/'), 20000);
		expect(browser.getTitle()).toEqual('Wyld Mesh: Home');
		//expect(browser.getCurrentUrl()).toEqual('https://demo0.wyldmesh.net/');
		console.log('Logged in successfully and navigated to Home page');
	});
	afterAll(function(){
		console.log('Browser closed');
	});
});
