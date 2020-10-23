const { browser } = require('protractor');
var PracticePage = require('./practice.page.js');

describe('Name of the group', () => {

    beforeEach(function () {
        browser.waitForAngularEnabled(false); // This is not required for you. Only required if testing Non-Angular web app
        browser.driver.get('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('should select the 2nd option of the Select Control', () => {
        myPracticePage = new PracticePage();
        
        browser.sleep(2000);

        myPracticePage.selectControlOptionTwo.click();

        browser.sleep(2000);
    });
});