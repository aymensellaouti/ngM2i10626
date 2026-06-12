import { test, expect } from '@playwright/test';
import { cvs } from './fixtures/cvs-fixtures';

test('has title', async ({ page }) => {
  await page.route('**/personnes/**', async route => {
    const json = cvs;
    await route.fulfill({
      json:cvs
    })
  })
  await page.goto('/cv');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/M2i/);

  const mesCvs = await page.locator("[data-testid='cvsList']");
  const lis = await mesCvs.locator("li");
  await expect(lis).toHaveCount(cvs.length);
  await expect(page.getByTestId('cvCard')).not.toBeVisible();
  const firstCv = lis.nth(0);
  firstCv.click();
  await expect(page.getByTestId('cvCard')).toBeVisible();
});
