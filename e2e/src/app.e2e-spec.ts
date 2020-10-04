import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

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
    debugger;
    expect(element(by.className('about-container'))).toBeTruthy();
    // expect(browser.getCurrentUrl()).toEqual('http://localhost:4000/about');
  });

  it('should goto "/contact"', () => {
    page.navigateTo();
    page.NavButtonContact.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4000/contact');
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
