import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { afterEach, beforeEach } from 'node:test';

test.describe('Login & search flow', () => {
  test(' Poprawne logowanie i znalezienie istniejącego wniosku', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.goto();
    await loginPage.login('lukasz', 'mistrzu');

    await mainPage.search('wniosek123');
    await expect(mainPage.resultHeaderLocator).toHaveText('wniosek 123');
  });

  test(' Poprawne logowanie i brak wyników dla nieistniejącego wniosku', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.goto();
    await loginPage.login('lukasz', 'mistrzu');

    await mainPage.search('nieistniejacyWniosek');
    await expect(mainPage.errorBannerLocator).toHaveText('Nie znaleziono wyniku.');
    
  });
  test(' Próba przejścia bez podana loginu i hasła', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.goto();
    await page.getByRole('button', { name: 'Zaloguj' }).click();

    await expect(loginPage.loginErrorLocator).toBeVisible();
    await expect(loginPage.loginErrorLocator).toHaveText('Wpisz login i hasło!');
  });
});
