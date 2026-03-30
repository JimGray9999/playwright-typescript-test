import { test, expect } from '@playwright/test';
import { env } from 'process';
import test_data from '../test-data/test_data.json';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;


test('login', async ({ page }) => {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
  await page.getByRole('textbox', { name: 'Username' }).fill(username!);
  await page.getByRole('textbox', { name: 'Password' }).fill(password!);
  await page.getByRole('button', { name: 'Sign in' }).click();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React + TS");

});
