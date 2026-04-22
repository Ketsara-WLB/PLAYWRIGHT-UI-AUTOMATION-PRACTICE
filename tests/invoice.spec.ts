import { test, expect } from '@playwright/test';
//Invoice — row operations: add 3 items, ลบ row ที่ 2, ตรวจว่า index เลื่อนถูกต้อง
//Invoice — calculation suite: ทดสอบ 2 invoice types คนละ 3 rows ตรวจ summary ทุก field

test('Tax Invoice for one item', async ({ page }) => {

    await test.step('Go to Invoice Page', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app/invoice');
    });
        
    await test.step('Select Document type', async () => {
        const documentTypeDropdown = page.getByTestId('invoice-type-select');
        await documentTypeDropdown.selectOption({label: 'Tax Invoice'});
    });

    await test.step('Fill First item name', async () => {
        await page.getByTestId('row-1-name').fill('C-Level Consulting');
    });

    //Search for Consulting in category
    await test.step('Click Category feild', async () => {
        await page.getByTestId('row-1-category').click();
        await page.getByTestId('row-1-category').fill('C');
    });

    
    await test.step('Select Consulting in category field', async () => {
        await page.getByTestId('row-1-category-option-0').click();
        await expect(page.getByTestId('row-1-category')).toHaveValue('Consulting');
    });

    await test.step('Fill First Item Unit Price', async () => {
        await page.getByTestId('row-1-unit-price').fill('2,000');
    });

    await test.step('Fill First Item Qty', async () => {
        await page.getByTestId('row-1-qty').clear();
        await page.getByTestId('row-1-qty').fill('4');
        await page.getByTestId('summary-subtotal').click();

        await expect(page.getByTestId('row-1-qty')).toHaveValue('4.00');
    });

    
    await test.step('Verify First Item Total price to be 8,000.00', async () => {
        await expect(page.getByTestId('row-1-total')).toHaveValue('8,000.00');
    });
    

    await test.step('Change First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('row-1-total').clear();
        await page.getByTestId('row-1-total').fill('6,500');
    });


    await test.step('Verify First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('summary-subtotal').click();
        await expect(page.getByTestId('row-1-total')).toHaveValue('6,500.00');
    });
    


    await test.step('Verify Subtotal to be 6,500.00', async () => {
        await expect(page.getByTestId('summary-subtotal')).toHaveText('6,500.00');
    });

    await test.step('Vat to be 455.00', async () => {
        await expect(page.getByTestId('summary-vat')).toHaveText('455.00');
    });


    await test.step('Grand Total to be 6,955.00', async () => {
        await expect(page.getByTestId('summary-grand-total')).toHaveText('6,955.00');
    });
});

