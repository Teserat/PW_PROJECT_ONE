import { test, expect } from '@playwright/test';
import { WelcomePage } from './pages/WelcomePage';

test.describe('Welcome Page Tests', () => {
  
  test('Powinien wyświetlić odpowiedni tytuł', async ({ page }) => {
    const welcomePage = new WelcomePage(page);

    // Przejście na stronę
    await welcomePage.goto();

    // Pobranie tekstu tytułu
    const titleText = await welcomePage.getTitleText();
    
    // Sprawdzenie, czy tytuł jest zgodny z oczekiwaniami
    // np. "Witaj na (testowej) Stronie Internetowej!"
    expect(titleText?.trim()).toBe('Witaj na (testowej) Stronie Internetowej!');
  });

});
