import { Page, Locator } from '@playwright/test';

/** Ekran główny z wyszukiwarką wniosków */
export class MainPage {

  /* ----------  locators  ---------- */
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;
  private readonly resultHeader: Locator;
  private readonly errorBanner: Locator;

  constructor(private readonly page: Page) {
    this.searchInput = this.page.locator('#searchInput');
    this.searchButton = this.page.getByRole('button', { name: 'Wyszukaj' });
    this.resultHeader = this.page.locator('#searchResults > div > div.record-header');
    this.errorBanner = this.page.locator('#searchError');
  }

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
