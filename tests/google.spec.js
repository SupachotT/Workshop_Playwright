// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานค้นหาคำว่า "หวย" และผลที่ได้จะต้องตาม REQ', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // ใส่ข้อมูลคำว่า หวย และ enter
  const search = await page.locator('#APjFqb')
  await search.fill('หวย');
  await search.press('Enter');

  // ตรวจสอบผลลัพธ์
  await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ/)
});

