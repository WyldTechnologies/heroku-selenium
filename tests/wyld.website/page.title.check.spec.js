describe('Verify Page titles of Wyld website pages', function(){
	beforeAll(function(){
		browser.waitForAngularEnabled(false);
		browser.get('https://wyldtechnologies.com/');
		console.log('navigated to Home page');
	});
	it('should verify Home page title', function(){
		expect(browser.getTitle()).toBe('Wyld Technologies');
	});
	it('should verify Contact Us page title',function(){
		browser.get('http://wyldtechnologies.com/wyld-contact.html');
		console.log('navigated to Contact Us page');
		expect(browser.getTitle()).toBe('Wyld Tech - Contact Us');
	});
});