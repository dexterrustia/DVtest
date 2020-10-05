import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';
import { SSL_OP_NO_TICKET } from 'constants';

describe('workspace-project App', () => {
  let page: AppPage;
  let baseUrl: string = 'http://localhost:4200';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title "dvtest"', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('dvtest');
    expect();
  });

  it('should goto "/about"', () => {
    page.navigateTo();
    page.NavButtonAbout.click();
    expect(element(by.className('about-container'))).toBeTruthy();
    expect(browser.getCurrentUrl()).toEqual(`${baseUrl}/about`);
  });

  it('should goto "/contact"', () => {
    page.navigateTo();
    page.NavButtonContact.click();

    expect(element(by.className('about-contact'))).toBeTruthy();
    expect(browser.getCurrentUrl()).toEqual(`${baseUrl}/contact`);
    expect(element(by.name('contactName'))).toBeTruthy();

    let contact = element(by.css('.input-contact-name'));
    contact.sendKeys('this is my text');

    setTimeout(() => {
      element(by.css('.btn-submit')).click();
      element(by.css('a-test-link')).click();
    }, 10000);
  });

  xit('should to go "/profile" after logging in', () => {
    page.navigateTo();
    page.googleLoginButton.click();
    setTimeout(() => {
      expect(browser.getCurrentUrl()).toEqual(`${baseUrl}/profile`);
    }, 10000);

    page.NavButtonAbout.click();
    page.NavButtonLogo.click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
