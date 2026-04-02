import { test, expect } from '@playwright/test';
import test_data from '../test-data/test_data.json';
import dotenv from 'dotenv';
dotenv.config();

// test login setup
const username = process.env.USERNAME;
const password = process.env.PASSWORD;


for (const ticket of test_data.ticket_verification_test_data) {
  test(`${ticket.id}`, async ({ page }) => {
      // Login app
    await page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    await page.getByRole('textbox', { name: 'Username' }).fill(username!);
    await page.getByRole('textbox', { name: 'Password' }).fill(password!);
    await page.getByRole('button', {name: 'Sign in' }).click();

    // Expect the page title to match
    await expect(page).toHaveTitle("Vite + React + TS");

    // Expect the tags, ticket name, column name to match for each value in the test data
    // test data setup
    const ticketTitle = page.getByRole('heading', { name: ticket.title });
    const ticketCard = ticketTitle.locator('xpath=..');
    const ticketsColumn = ticketCard.locator('xpath=..');
    const columnContainer = ticketsColumn.locator('xpath=..');
    const projectName = page.getByRole('button', { name: ticket.project });

    // test verifications
    await projectName.click();
    await expect(ticketTitle).toBeVisible();
    await expect(columnContainer.getByRole('heading', { name: ticket.column })).toBeVisible();
    for (const tag of ticket.tags) {
      await expect(ticketCard.getByText(tag, { exact: true })).toBeVisible();
    }
  });
}
