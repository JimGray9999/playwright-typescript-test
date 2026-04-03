import { chromium, type FullConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

async function globalSetup(config: FullConfig) {
  
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error('Username and password must be set');
  }

  const { baseURL } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL!);
  await page.getByRole('textbox', { name: 'Username' }).fill(username);
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', {name: 'Sign in' }).click();
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;