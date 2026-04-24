import { test, expect } from '@playwright/test';
//Shipping — full suite: success case + validation errors ทุก field + phone format 098-xxx-xxxx

//59 นาที
test('กรอก Shipping Detail Success', async ({ page }) => {
  
  await test.step('navigate ไปหน้า login', async () => {
    await page.goto('https://ui-sandbox-omega.vercel.app');
    await page.getByRole('link', { name: 'Shipping Form' }).click()
  });

  await test.step('กรอก Recipient', async () => {
    await expect(page.getByTestId('shipping-form-first-name')).toBeVisible()
    await page.getByTestId('shipping-form-first-name').fill('Somchai')
    await page.getByTestId('shipping-form-last-name').fill('Jaidee')
    await page.getByTestId('shipping-form-phone').fill('0896542124')
  });

  await test.step('กรอก Address', async () => {
    await page.getByTestId('shipping-form-address').fill('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
    await page.getByTestId('shipping-form-province-select').selectOption({label: 'กรุงเทพมหานคร (Bangkok)'})
    await page.getByTestId('shipping-form-district-select').selectOption({label: 'เขตวังทองหลาง (Khet Wang Thonglang)'})
    await page.getByTestId('shipping-form-subdistrict-select').selectOption({label: 'วังทองหลาง (Wang Thonglang)'})
  });

  await test.step('ตรวจสอบ Postal code', async () => {
    await expect(page.getByTestId('shipping-form-postal-code')).toHaveValue('10310')
  });

  await test.step('กด Confirm shipping', async () => {
    await page.getByTestId('shipping-submit').click()

    await expect(page.getByTestId('success-heading')).toHaveText('Shipping confirmed')
  });

  await test.step('ตรวจสอบ shipping details', async () => {
    await expect(page.getByTestId('success-recipient')).toHaveText('Somchai Jaidee')
    await expect(page.getByTestId('success-phone')).toHaveText('089-654-2124')
    await expect(page.getByTestId('success-address')).toHaveText('43/8 หมู่บ้านเปี่ยมสุข ถนนลาดพร้าว ซอย 63')
    await expect(page.getByTestId('success-subdistrict')).toHaveText('วังทองหลาง (Wang Thonglang)')
    await expect(page.getByTestId('success-district')).toHaveText('เขตวังทองหลาง (Khet Wang Thonglang)')
    await expect(page.getByTestId('success-province')).toHaveText('กรุงเทพมหานคร (Bangkok)')
    await expect(page.getByTestId('success-postal-code')).toHaveText('10310')
  });

})

//10 นาที
test('กรอกค่าว่าง Shipping Detail', async ({ page }) => {
    await test.step('navigate ไปหน้า login', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app');
        await page.getByRole('link', { name: 'Shipping Form' }).click()
    });
  
    await test.step('กด Confirm shipping', async () => {
      await page.getByTestId('shipping-submit').click()
    });
  
    await test.step('ตรวจการแจ้งเตือนการกรอกค่าว่าง', async () => {
      await expect(page.getByTestId('shipping-form-first-name-error')).toHaveText('First name is required.')
      await expect(page.getByTestId('shipping-form-last-name-error')).toHaveText('Last name is required.')
      await expect(page.getByTestId('shipping-form-phone-error')).toHaveText('Phone number is required.')
      await expect(page.getByTestId('shipping-form-address-error')).toHaveText('Address is required.')
      await expect(page.getByTestId('shipping-form-province-error')).toHaveText('Please select a province.')
      await expect(page.getByTestId('shipping-form-district-error')).toHaveText('Please select a district.')
      await expect(page.getByTestId('shipping-form-subdistrict-error')).toHaveText('Please select a subdistrict.')
    });
  
  })