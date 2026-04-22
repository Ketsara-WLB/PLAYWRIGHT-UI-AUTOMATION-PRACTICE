import { test, expect } from '@playwright/test';

test('Login Page: Invalid Password', async ({ page }) => {
    await test.step('navigate ไปหน้า login', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
        await page.getByRole('link', { name: 'Login Form Practice login' }).click()
      });
    
      await test.step('กรอก email', async () => {
        const emailInput = page.getByTestId('email-input')
        await expect(emailInput).toBeVisible()
        await emailInput.fill('user@company.com')
      });
    
      await test.step('กรอก password', async () => {
        await page.getByTestId('password-input').fill('Test1234')
      });
    
      await test.step('กดปุ่ม login', async () => {
        await page.getByTestId('login-btn').click()
      });

    // Validate
    await expect(page.getByTestId('password-error')).toHaveText('Incorrect email or password.') 
    
})