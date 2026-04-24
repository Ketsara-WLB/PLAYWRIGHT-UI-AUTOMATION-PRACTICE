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

// 51นาที
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
    await page.getByTestId('password-input').fill('Invalid1234!')
  });
  
  await test.step('กดปุ่ม login', async () => {
    await page.getByTestId('login-btn').click()
  });

  // Validate
  await test.step('Validate แจ้งเตือนการกรอกรหัสผิด', async () => {
    await expect(page.getByTestId('password-error')).toHaveText('Incorrect email or password.') 

    await expect(page.getByTestId('toast-title')).toHaveText('Login failed')
    await expect(page.getByTestId('toast-msg')).toHaveText('Invalid email or password. Please try again.')
  });
})

// 4 นาที
test('Login Page: Invalid Email', async ({ page }) => {
  await test.step('navigate ไปหน้า login', async () => {
      await page.goto('https://ui-sandbox-omega.vercel.app');
      await page.getByRole('link', { name: 'Login Form Practice login' }).click()
    });
  
  await test.step('กรอก email', async () => {
    const emailInput = page.getByTestId('email-input')
    await expect(emailInput).toBeVisible()
    await emailInput.fill('invalid@company.com')
  });
  
  await test.step('กรอก password', async () => {
    await page.getByTestId('password-input').fill('Test1234!')
  });
  
  await test.step('กดปุ่ม login', async () => {
    await page.getByTestId('login-btn').click()
  });

  // Validate
  await test.step('Validate แจ้งเตือนการกรอก Email ผิด', async () => {
    await expect(page.getByTestId('password-error')).toHaveText('Incorrect email or password.') 

    await expect(page.getByTestId('toast-title')).toHaveText('Login failed')
    await expect(page.getByTestId('toast-msg')).toHaveText('Invalid email or password. Please try again.')
  });
})

// 2 นาที
test('Login Page: Invalid Email, Invalid Password', async ({ page }) => {
  await test.step('navigate ไปหน้า login', async () => {
      await page.goto('https://ui-sandbox-omega.vercel.app');
      await page.getByRole('link', { name: 'Login Form Practice login' }).click()
    });
  
  await test.step('กรอก email', async () => {
    const emailInput = page.getByTestId('email-input')
    await expect(emailInput).toBeVisible()
    await emailInput.fill('invalid@company.com')
  });
  
  await test.step('กรอก password', async () => {
    await page.getByTestId('password-input').fill('Invalid1234!')
  });
  
  await test.step('กดปุ่ม login', async () => {
    await page.getByTestId('login-btn').click()
  });

  // Validate
  await test.step('Validate แจ้งเตือนการกรอก Email และ Password ผิด', async () => {
    await expect(page.getByTestId('password-error')).toHaveText('Incorrect email or password.') 

    await expect(page.getByTestId('toast-title')).toHaveText('Login failed')
    await expect(page.getByTestId('toast-msg')).toHaveText('Invalid email or password. Please try again.')
  });
})

//5 นาที
test('Login Page: Empty', async ({ page }) => {
  await test.step('navigate ไปหน้า login', async () => {
      await page.goto('https://ui-sandbox-omega.vercel.app');
      await page.getByRole('link', { name: 'Login Form Practice login' }).click()
    });
  
  await test.step('กรอก email', async () => {
    const emailInput = page.getByTestId('email-input')
    await expect(emailInput).toBeVisible()
    await emailInput.fill('')
  });
  
  await test.step('กรอก password', async () => {
    await page.getByTestId('password-input').fill('')
  });
  
  await test.step('กดปุ่ม login', async () => {
    await page.getByTestId('login-btn').click()
  });

  // Validate
  await test.step('Validate แจ้งเตือนการกรอกค่าว่าง', async () => {
    await expect(page.getByTestId('email-error')).toHaveText('Please enter a valid email address.') 
    await expect(page.getByTestId('password-error')).toHaveText('Password is required.') 
  });
})