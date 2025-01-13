import { test, expect } from "@playwright/test";
import { WelcomePage } from '../tests/pages/WelcomePage';

//basic concept test
test.describe('Testy logowania i wyszukiwarki', () => {

    const baseUrl = 'https://teserat.github.io/strona-html'; 
  
    test('MVP - Poprawne logowanie + wyszukanie wniosku + assercja : "Znaleziono: wniosek123"', async ({ page }) => {
      await page.goto(baseUrl);
  
      await page.fill('#username', 'lukasz');
      await page.fill('#password', 'mistrzu');
      await page.click('button:has-text("Zaloguj")');
      //await expect(page.locator('h2')).toHaveText('Wyszukiwarka');
      await page.fill('#searchInput', 'wniosek123');
      await page.click('button:has-text("Wyszukaj")');
  
      const result = await page.locator('#searchResults').textContent();
      expect(result).toBe('Znaleziono: wniosek123');
    });
  
    test('MVP - Poprawne logowanie + Wyszukanie nieistniejącego wniosku + assercja : "Nie znaleziono wyniku."', async ({ page }) => {
      await page.goto(baseUrl);
  
      await page.fill('#username', 'lukasz');
      await page.fill('#password', 'mistrzu');
      await page.click('button:has-text("Zaloguj")');
      //await expect(page.locator('h2')).toHaveText('Wyszukiwarka');
      await page.fill('#searchInput', 'nieistniejacyWniosek');
      await page.click('button:has-text("Wyszukaj")');
  
      const result = await page.locator('#searchResults').textContent();
      expect(result).toBe('Nie znaleziono wyniku.');
    });
  });