import HomePage from '../pageobjects/home.page';

describe('home page', () => {
    it('should have the ability to contact us', () => {
        browser.url('http://automationpractice.com/')
        HomePage.contactUsButton.click();
        browser.pause(3000)
        expect(driver.getTitle()).toContain('Contact us');
    })
})