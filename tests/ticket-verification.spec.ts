import { test, expect } from '@playwright/test';
import test_data from '../test-data/test_data.json';

test.describe('Ticket Verification', () => {
  for (const ticket of test_data.ticket_verification_test_data) {
    test(`${ticket.id}`, async ({ page }) => {
      await page.goto('/');
      await expect(page).toHaveURL('/');

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
});
