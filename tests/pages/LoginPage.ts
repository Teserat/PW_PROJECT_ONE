import { Page, Locator } from '@playwright/test';

export class LoginPage {

  /* ----------  locators  ---------- */
  private readonly usernameInput;
  private readonly passwordInput;
  private readonly loginButton;
  private readonly loginError;

  constructor(private readonly page: Page) {
    this.usernameInput = this.page.locator('#username');
    this.passwordInput = this.page.locator('#password');
    this.loginButton = this.page.getByRole('button', { name: 'Zaloguj' });
    this.loginError = this.page.locator('[data-test="login-error"]');

  }

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
