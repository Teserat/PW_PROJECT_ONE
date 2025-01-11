import { Page } from '@playwright/test';

export class WelcomePage {
  readonly page: Page;
  readonly welcomeTitleLocator = 'h1';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://teserat.github.io/welcome/');
  }

  async getTitleText(): Promise<string> {
    return this.page.textContent(this.welcomeTitleLocator);
  }
}
