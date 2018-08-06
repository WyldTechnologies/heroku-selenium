describe('Test002-Verify that Wyld websites are accessible only through HTTPS', function(){

var EC = protractor.ExpectedConditions;
	
	beforeAll(function(){
		//browser.get('http://wyldtechnologies.com/');
		//console.log('navigated to Wyld webiste using HTTP URL');
		browser.ignoreSynchronization = true;
	});
	
	it('verify HTTPS redirection', function() {
		browser.get('http://wyldtechnologies.com/');
		//browser.wait(EC.titleIs('Wyld Technologies'), 10000);
		//expect(browser.getCurrentUrl()).toBe('https://wyldtechnologies.com/');
		
		
				if(browser.getCurrentUrl()==='https://wyldtechnologies.com/'){
			//expect(browser.getCurrentUrl()).toBe('https://wyldtechnologies.com/');
			expect(browser.getTitle().toEqual('Wyld Technologies'));
			console.log('redirected to HTTPS site');
		}
		else{
			if(expect(browser.getTitle()==='Wyld Technologies')){
				console.error('able to access site with HTTP URL');
		}}
	});
		
		/*
		console.log('navigated to Wyld website with HTTP URL');
		if(browser.getCurrentUrl()==='https://wyldtechnologies.com/'){
			//expect(browser.getCurrentUrl()).toBe('https://wyldtechnologies.com/');
			expect(browser.getTitle().toEqual('Wyld Technologies'));
			console.log('redirected to HTTPS site');
		}
		else{
			if(expect(browser.getTitle()==='Wyld Technologies')){
				console.error('able to access site with HTTP URL');
			}
			console.error('NOT redirected to HTTP site');
		}
		//browser.close();
		//console.log('Browser closed');
	});
	*/
	
	afterAll(function(){
		//browser.close();
		browser.ignoreSynchronization = false;
		console.log('Browser closed');
	});
});