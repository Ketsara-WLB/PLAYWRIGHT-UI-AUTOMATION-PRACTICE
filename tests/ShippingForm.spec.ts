import { test, expect } from '@playwright/test';
//Shipping — full suite: success case + validation errors ทุก field + phone format 098-xxx-xxxx

test('กรอก Shipping Detail Success', async ({ page }) => {
  
  await test.step('navigate ไปหน้า login', async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
    await page.getByRole('link', { name: 'Shipping Form' }).click()
  });

  await test.step('กรอก Recipient', async () => {
    await expect(page.getByTestId('shipping-form-first-name')).toBeVisible()
    await page.getByTestId('shipping-form-first-name').fill('เกษรา')
  });

  await test.step('', async () => {

  });

})