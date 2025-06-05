import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test("Open HomePage and verify title", async ({ page }) => {
    await page.goto('https://teserat.github.io/strona-html');
    
    await expect(page).toHaveTitle("Strona testowa - Logowanie & wnioski");
    })
})

