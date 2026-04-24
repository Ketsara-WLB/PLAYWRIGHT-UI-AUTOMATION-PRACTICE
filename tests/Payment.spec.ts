import { test, expect } from '@playwright/test';
import path from 'path';

test('กรอก Payment confirmation Detail Success', async ({ page }) => {
    await test.step('Go to Invoice Page', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
        await page.getByRole('link', { name: 'Confirm Payment' }).click()
    })
    
    await test.step('Upload Image.jpg', async () => {
        await page.getByTestId('slip-file-input').setInputFiles(path.join(__dirname, '../test-images/cat-1.jpg'))
        await expect(page.getByTestId('slip-remove')).toBeVisible()
    })

    await test.step('กรอก Transaction details', async () => {
        await page.getByTestId('order-id').fill('7673912371231243')
        await page.getByTestId('payment-amount').fill('3000')
        await page.getByTestId('transaction-date').fill('2002-12-30')
        await page.getByTestId('transaction-time').fill('14:30')
    });

    await test.step('กด Submit และตรวจสอบว่าไปหน้า Payment received', async () => {
        await page.getByTestId('payment-submit').click()
        await expect(page.getByTestId('success-heading')).toHaveText('Payment received')
    });

    await test.step('ตรวจสอบข้อมูลในหน้า Payment received', async () => {
        await expect(page.getByTestId('success-slip-filename')).toBeVisible
        await expect(page.getByTestId('success-order-id')).toHaveText('7673912371231243')
        await expect(page.getByTestId('success-amount')).toHaveText('฿ 3,000.00')
        await expect(page.getByTestId('success-date')).toHaveText('30/12/2002')
        await expect(page.getByTestId('success-time')).toHaveText('14:30')
        await expect(page.getByTestId('success-filename')).toHaveText('cat-1.jpg')
    });
});