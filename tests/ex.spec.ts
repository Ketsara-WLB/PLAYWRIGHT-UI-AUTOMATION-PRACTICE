import { test, expect } from '@playwright/test';

test('Login Page: Invalid Password', async ({ page }) => {
    // Open Browser - Navigate to Login Page 
    await page.goto('/login');

    // fill email
    const emailInput =  page.getByTestId('email-input')
    await expect(emailInput).toBeVisible()
    await emailInput.fill('user@company.com')

    // fill password
    const passwordInput = page.getByTestId('password-input')
    await expect(passwordInput).toBeVisible()
    await passwordInput.fill('Test12345')

    // Press Enter
    await page.keyboard.press('Enter')

    // Validate
    await expect(page.locator('#password-error')).toHaveText('Incorrect email or password.') 
    
})