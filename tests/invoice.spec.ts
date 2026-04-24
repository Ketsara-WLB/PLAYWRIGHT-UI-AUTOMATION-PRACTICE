import { test, expect } from '@playwright/test';

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
        await page.getByTestId('row-1-category').fill('C')
    });

    
    await test.step('Select Consulting in category field', async () => {
        await page.getByTestId('row-1-category-option-0').click()
        await expect(page.getByTestId('row-1-category')).toHaveValue('Consulting')
    });

    await test.step('Fill First Item Unit Price', async () => {
        await page.getByTestId('row-1-unit-price').fill('2,000')
    });

    await test.step('Fill First Item Qty', async () => {
        await page.getByTestId('row-1-qty').clear()
        await page.getByTestId('row-1-qty').fill('4')
        await page.getByTestId('summary-subtotal').click()

        await expect(page.getByTestId('row-1-qty')).toHaveValue('4.00')
    });

    await test.step('Verify First Item Total price to be 8,000.00', async () => {
        await expect(page.getByTestId('row-1-total')).toHaveValue('8,000.00')
    });
    
    await test.step('Change First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('row-1-total').clear()
        await page.getByTestId('row-1-total').fill('6,500')
    });

    await test.step('Verify First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('summary-subtotal').click()
        await expect(page.getByTestId('row-1-total')).toHaveValue('6,500.00')
    });
    
    await test.step('Verify Subtotal to be 6,500.00', async () => {
        await expect(page.getByTestId('summary-subtotal')).toHaveText('6,500.00')
    });

    await test.step('Vat to be 455.00', async () => {
        await expect(page.getByTestId('summary-vat')).toHaveText('455.00')
    });


    await test.step('Grand Total to be 6,955.00', async () => {
        await expect(page.getByTestId('summary-grand-total')).toHaveText('6,955.00')
    });

    await test.step('กด Submit และตรวจสอบหน้า Submit Invoice Successful ', async () => {
        await page.getByTestId('submit-button').click()

        await expect(page.getByTestId('success-heading')).toHaveText('Submit Invoice Successful')
    });

});

//5 นาที
test('Reciept for one item', async ({ page }) => {

    await test.step('Go to Invoice Page', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app/invoice');
    });
        
    await test.step('Select Document type', async () => {
        const documentTypeDropdown = page.getByTestId('invoice-type-select');
        await documentTypeDropdown.selectOption({label: 'Receipt'});
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
    
    await test.step('Verify Subtotal to be 6,045.00', async () => {
        await expect(page.getByTestId('summary-subtotal')).toHaveText('6,045.00');
    });

    await test.step('Vat to be 455.00', async () => {
        await expect(page.getByTestId('summary-vat')).toHaveText('455.00');
    });


    await test.step('Grand Total to be 6,500.00', async () => {
        await expect(page.getByTestId('summary-grand-total')).toHaveText('6,500.00');
    });

    await test.step('กด Submit และตรวจสอบหน้า Submit Invoice Successful ', async () => {
        await page.getByTestId('submit-button').click()

        await expect(page.getByTestId('success-heading')).toHaveText('Submit Invoice Successful')
    });

});

//46 นาที
test('Tax Invoice for two item', async ({ page }) => {

    await test.step('Go to Invoice Page', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app/invoice')
    });
        
    await test.step('Select Document type', async () => {
        const documentTypeDropdown = page.getByTestId('invoice-type-select')
        await documentTypeDropdown.selectOption({label: 'Tax Invoice'})
    });

    await test.step('Fill First item name', async () => {
        await page.getByTestId('row-1-name').fill('C-Level Consulting')
    });

    await test.step('Click Category feild', async () => {
        await page.getByTestId('row-1-category').click();
        await page.getByTestId('row-1-category').fill('C')
    });

    
    await test.step('Select Consulting in category field', async () => {
        await page.getByTestId('row-1-category-option-0').click()
        await expect(page.getByTestId('row-1-category')).toHaveValue('Consulting')
    });

    await test.step('Fill First Item Unit Price', async () => {
        await page.getByTestId('row-1-unit-price').fill('2,000')
    });

    await test.step('Fill First Item Qty', async () => {
        await page.getByTestId('row-1-qty').clear()
        await page.getByTestId('row-1-qty').fill('4')
        await page.getByTestId('summary-subtotal').click()

        await expect(page.getByTestId('row-1-qty')).toHaveValue('4.00')
    });

    await test.step('Verify First Item Total price to be 8,000.00', async () => {
        await expect(page.getByTestId('row-1-total')).toHaveValue('8,000.00')
    });
    
    await test.step('Change First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('row-1-total').clear()
        await page.getByTestId('row-1-total').fill('6,500')
    });

    await test.step('Verify First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('summary-subtotal').click()
        await expect(page.getByTestId('row-1-total')).toHaveValue('6,500.00')
    });
    
    await test.step('Verify Subtotal to be 6,500.00', async () => {
        await expect(page.getByTestId('summary-subtotal')).toHaveText('6,500.00')
    });

    await test.step('Vat to be 455.00', async () => {
        await expect(page.getByTestId('summary-vat')).toHaveText('455.00')
    });


    await test.step('Grand Total to be 6,955.00', async () => {
        await expect(page.getByTestId('summary-grand-total')).toHaveText('6,955.00')
    });

    await test.step('Click Add Item And Deleted Item', async () => {
        await page.getByTestId('add-row-button').click()
        await page.getByTestId('row-2-delete-checkbox').click()
        await page.getByTestId('delete-selected-button').click()
    });

    //เพิ่ม Item ที่ 2
    await test.step('Fill Second item name', async () => {
        await page.getByTestId('add-row-button').click()
        await page.getByTestId('row-2-name').fill('E2E Automation Test via APIs')
    });

    await test.step('Click Category feild', async () => {
        await page.getByTestId('row-2-category').click()
        await page.getByTestId('row-2-category').fill('Main')
    });

    
    await test.step('Select Maintenance in category field', async () => {
        await page.getByTestId('row-2-category-option-0').click()
        await expect(page.getByTestId('row-2-category')).toHaveValue('Maintenance')
    });

    await test.step('Fill Second Item Unit Price', async () => {
        await page.getByTestId('row-2-unit-price').fill('10,000')
    });

    await test.step('Fill Second Item Qty', async () => {
        await page.getByTestId('row-2-qty').clear()
        await page.getByTestId('row-2-qty').fill('1')
        await page.getByTestId('summary-subtotal').click()

        await expect(page.getByTestId('row-2-qty')).toHaveValue('1.00')
    });

    await test.step('Verify First Item Total price to be 10,000.00', async () => {
        await expect(page.getByTestId('row-2-total')).toHaveValue('10,000.00')
    });
    
    await test.step('Change First Item Total price to be 8,000.00', async () => {
        await page.getByTestId('row-2-total').clear()
        await page.getByTestId('row-2-total').fill('8,000')
    });

    await test.step('Verify Second Item Total price to be 8,000.00', async () => {
        await page.getByTestId('summary-subtotal').click()
        await expect(page.getByTestId('row-2-total')).toHaveValue('8,000.00')
    });
    
    await test.step('Verify Subtotal to be 14,500.00', async () => {
        await expect(page.getByTestId('summary-subtotal')).toHaveText('14,500.00')
    });

    await test.step('Vat to be 1,015.00', async () => {
        await expect(page.getByTestId('summary-vat')).toHaveText('1,015.00')
    });


    await test.step('Grand Total to be 15,515.00', async () => {
        await expect(page.getByTestId('summary-grand-total')).toHaveText('15,515.00')
    });

    await test.step('กด Submit และตรวจสอบหน้า Submit Invoice Successful ', async () => {
        await page.getByTestId('submit-button').click()

        await expect(page.getByTestId('success-heading')).toHaveText('Submit Invoice Successful')
    });

});

//6 นาที
test('Reciept for two item', async ({ page }) => {

    await test.step('Go to Invoice Page', async () => {
        await page.goto('https://ui-sandbox-omega.vercel.app/invoice')
    });
        
    await test.step('Select Document type', async () => {
        const documentTypeDropdown = page.getByTestId('invoice-type-select')
        await documentTypeDropdown.selectOption({label: 'Receipt'})
    });

    await test.step('Fill First item name', async () => {
        await page.getByTestId('row-1-name').fill('C-Level Consulting')
    });

    await test.step('Click Category feild', async () => {
        await page.getByTestId('row-1-category').click();
        await page.getByTestId('row-1-category').fill('C')
    });

    
    await test.step('Select Consulting in category field', async () => {
        await page.getByTestId('row-1-category-option-0').click()
        await expect(page.getByTestId('row-1-category')).toHaveValue('Consulting')
    });

    await test.step('Fill First Item Unit Price', async () => {
        await page.getByTestId('row-1-unit-price').fill('2,000')
    });

    await test.step('Fill First Item Qty', async () => {
        await page.getByTestId('row-1-qty').clear()
        await page.getByTestId('row-1-qty').fill('4')
        await page.getByTestId('summary-subtotal').click()

        await expect(page.getByTestId('row-1-qty')).toHaveValue('4.00')
    });

    await test.step('Verify First Item Total price to be 8,000.00', async () => {
        await expect(page.getByTestId('row-1-total')).toHaveValue('8,000.00')
    });
    
    await test.step('Change First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('row-1-total').clear()
        await page.getByTestId('row-1-total').fill('6,500')
    });

    await test.step('Verify First Item Total price to be 6,500.00', async () => {
        await page.getByTestId('summary-subtotal').click()
        await expect(page.getByTestId('row-1-total')).toHaveValue('6,500.00')
    });

    await test.step('Click Add Item And Deleted Item', async () => {
        await page.getByTestId('add-row-button').click()
        await page.getByTestId('row-2-delete-checkbox').click()
        await page.getByTestId('delete-selected-button').click()
    });

    //เพิ่ม Item ที่ 2
    await test.step('Fill Second item name', async () => {
        await page.getByTestId('add-row-button').click()
        await page.getByTestId('row-2-name').fill('E2E Automation Test via APIs')
    });

    await test.step('Click Category feild', async () => {
        await page.getByTestId('row-2-category').click()
        await page.getByTestId('row-2-category').fill('Main')
    });

    
    await test.step('Select Maintenance in category field', async () => {
        await page.getByTestId('row-2-category-option-0').click()
        await expect(page.getByTestId('row-2-category')).toHaveValue('Maintenance')
    });

    await test.step('Fill Second Item Unit Price', async () => {
        await page.getByTestId('row-2-unit-price').fill('10,000')
    });

    await test.step('Fill Second Item Qty', async () => {
        await page.getByTestId('row-2-qty').clear()
        await page.getByTestId('row-2-qty').fill('1')
        await page.getByTestId('summary-subtotal').click()

        await expect(page.getByTestId('row-2-qty')).toHaveValue('1.00')
    });

    await test.step('Verify First Item Total price to be 10,000.00', async () => {
        await expect(page.getByTestId('row-2-total')).toHaveValue('10,000.00')
    });
    
    await test.step('Change First Item Total price to be 8,000.00', async () => {
        await page.getByTestId('row-2-total').clear()
        await page.getByTestId('row-2-total').fill('8,000')
    });

    await test.step('Verify Second Item Total price to be 8,000.00', async () => {
        await page.getByTestId('summary-subtotal').click()
        await expect(page.getByTestId('row-2-total')).toHaveValue('8,000.00')
    });
    
    await test.step('Verify Subtotal to be 13,485.00', async () => {
        await expect(page.getByTestId('summary-subtotal')).toHaveText('13,485.00')
    });

    await test.step('Vat to be 1,015.00', async () => {
        await expect(page.getByTestId('summary-vat')).toHaveText('1,015.00')
    });


    await test.step('Grand Total to be 14,500.00', async () => {
        await expect(page.getByTestId('summary-grand-total')).toHaveText('14,500.00')
    });

    await test.step('กด Submit และตรวจสอบหน้า Submit Invoice Successful ', async () => {
        await page.getByTestId('submit-button').click()

        await expect(page.getByTestId('success-heading')).toHaveText('Submit Invoice Successful')
    });

});
