import { Page, Locator } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) { }

  /* ----------  locators  ---------- */
  private readonly usernameInput = this.page.locator('#username');
  private readonly passwordInput = this.page.locator('#password');
  private readonly loginButton = this.page.getByRole('button', { name: 'Zaloguj' });
  private readonly loginError = this.page.locator('[data-test="login-error"]'); // <== DODANE

  // get
  get loginErrorLocator(): Locator {
    return this.loginError;
  }


  /* ----------  actions  ---------- */
  async goto(): Promise<void> {
    await this.page.goto('/strona-html');
  }

  /** Loguje użytkownika */
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

}
