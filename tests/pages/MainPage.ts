import { expect, Page } from '@playwright/test';

/** Ekran główny z wyszukiwarką wniosków */
export class MainPage {
  constructor(private readonly page: Page) { }

  /* ----------  locators  ---------- */
  private readonly searchInput = this.page.locator('#searchInput');
  private readonly searchButton = this.page.getByRole('button', { name: 'Wyszukaj' });
  private readonly resultHeader = this.page.locator('#searchResults > div > div.record-header');
  private readonly errorBanner = this.page.locator('#searchError');

  /* ----------  actions  ---------- */
  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  /* ----------  asserts  ---------- */
  async expectResult(text: string): Promise<void> {
    await expect(this.resultHeader).toHaveText(text);
  }

  async expectError(text: string): Promise<void> {
    await expect(this.errorBanner).toHaveText(text);
  }
}
