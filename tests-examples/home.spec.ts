import { test, expect } from "@playwright/test";
import { WelcomePage } from '../tests/pages/WelcomePage';

//basic concept test
test.describe('Home', () => {
    test("Open HomePage", async ({page}) => {
        const welcomePage = new WelcomePage(page);
        await welcomePage.goto();
        await expect(page).toHaveTitle('Zabawna Strona Internetowa')
    });
})