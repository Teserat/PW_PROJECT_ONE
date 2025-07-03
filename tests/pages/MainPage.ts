import { Page, Locator } from '@playwright/test';

/** Ekran główny z wyszukiwarką wniosków */
export class MainPage {
  constructor(private readonly page: Page) { }

  /* ----------  locators  ---------- */
  private readonly searchInput: Locator = this.page.locator('#searchInput');
  private readonly searchButton: Locator = this.page.getByRole('button', { name: 'Wyszukaj' });
  private readonly resultHeader: Locator = this.page.locator('#searchResults > div > div.record-header');
  private readonly errorBanner: Locator = this.page.locator('#searchError');

  get resultHeaderLocator(): Locator {
    return this.resultHeader;
  }

  get errorBannerLocator(): Locator {
    return this.errorBanner;
  }

  /* ----------  actions  ---------- */
  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }
}
