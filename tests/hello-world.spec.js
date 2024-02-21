// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานค้นหาคำว่า Call REST API', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');

    // ตรวจสอบผลลัพธ์
  const message = page.getByTestId('message_text');
  await expect(message).toHaveText('Call REST API');
});

test('ผู้ใช้งานค้นหาคำว่า hello World!', async ({ page }) => {
  await page.goto('https://demo-frontend-reactjs.vercel.app/');

    // ตรวจสอบผลลัพธ์
  const hello = page.getByTestId('hello_text');
  await expect(hello).toHaveText('Hello World!');
});