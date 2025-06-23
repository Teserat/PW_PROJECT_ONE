import { test } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';

test.describe('Login & search flow', () => {
  test(' Poprawne logowanie i znalezienie istniejącego wniosku', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.goto();
    await loginPage.login('lukasz', 'mistrzu');

    await mainPage.search('wniosek123');
    await mainPage.expectResult('wniosek 123');
  });

  test(' Poprawne logowanie i brak wyników dla nieistniejącego wniosku', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.goto();
    await loginPage.login('lukasz', 'mistrzu');

    await mainPage.search('nieistniejacyWniosek');
    await mainPage.expectError('Nie znaleziono wyniku.');

  });
});
