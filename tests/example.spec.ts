import { test, expect } from '@playwright/test';
// https://ui-sandbox-omega.vercel.app/
// 1. เปิด browser
// 2. navigate ไปหน้า login
// 3. กรอก email
// 4. กรอก password
// 5. กดปุ่ม login
// 6. ตรวจสอบ url /login/sucess
// 7. ตรวจสอบข้อความบนหน้าเว็บ

test('Login Success', async ({ page }) => {
  
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
    await page.getByTestId('password-input').fill('Test1234!')
  });

  await test.step('กดปุ่ม login', async () => {
    await page.getByTestId('login-btn').click()
  });

  await test.step('ตรวจสอบ url /login/sucess', async () => {
    await expect(page).toHaveURL('https://ui-sandbox-omega.vercel.app/login/success');
  });

  await test.step('ตรวจสอบข้อความบนหน้าเว็บ', async () => {
    await expect(page.getByTestId('success-heading')).toHaveText('Login successful');
  });
})