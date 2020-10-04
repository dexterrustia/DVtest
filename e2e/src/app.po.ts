import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return browser.getTitle().then((res) => {
      console.log(res);
      return res;
    }) as Promise<string>;
    //return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  get NavButtonContact() {
    return element(by.className('nav-contact'));
  }

  get NavButtonAbout() {
    return element(by.className('nav-about'));
  }

  get googleLoginButton() {
    return element(by.className('btn-google-login'));
  }

  get AboutContainer() {
    return element(by.className('about-conatiner'));
  }
}
