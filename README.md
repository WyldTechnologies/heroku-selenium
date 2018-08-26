# Tests for Wyld website and Wyld test0 site
Basic tests in Protractor JavaScript for Wyld Technologies web applications

# Requirements
* Node and npm
* Protractor
* Chrome driver

# Installation
1. Clone the repository: git clone https://github.com/WyldTechnologies/heroku-selenium.git
2. Install dependencies: npm install
3. Run tests : npm test 

# NOTES
* Chrome headless and Chrome driver buildpacks were included to run tests on Chrome headless. ref : https://github.com/heroku/heroku-buildpack-chromedriver & https://github.com/heroku/heroku-buildpack-google-chrome
* Chrome binary path is set to  '/app/.apt/usr/bin/google-chrome' as chromedriver expects Chrome to be installed at /usr/bin/google-chrome, which is a read-only filesystem in a Heroku slug
