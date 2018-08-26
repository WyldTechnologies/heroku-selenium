describe('Verify that Wyld websites are accessible only through HTTPS', function(){
	it('attempting to access through HTTP', function() {
		browser.waitForAngularEnabled(false);
		browser.get('http://wyldtechnologies.com/');
		if(browser.getCurrentUrl()=='https://wyldtechnologies.com/'){
			expect(browser.getTitle()).toBe('Wyld Technologies');
			console.log('redirected to HTTPS site');
		}
		else{
			expect(browser.getTitle()).not.toBe('Wyld Technologies');
			console.error('Wyld Technologies website is accessible via HTTP');
		}
	});
});