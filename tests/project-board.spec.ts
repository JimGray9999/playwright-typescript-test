import { test, expect } from '@playwright/test';
import test_data from '../test-data/test_data.json';
import { ProjectBoardPage } from '../pages/project-board';

test.describe('Ticket Verification', () => {
  for (const ticket of test_data.ticket_verification_test_data) {
    test(`${ticket.id}`, async ({ page }) => {
      const projectBoard = new ProjectBoardPage(page);

      await page.goto('/');
      await expect(page).toHaveURL('/');

      // test data setup
      await projectBoard.projectButton(ticket.project).click();
      const ticketTitle = projectBoard.ticketTitle(ticket.title);
      const columnContainer = projectBoard.ticketColumnContainer(ticket.title);

      // test verifications
      await expect(ticketTitle).toBeVisible();
      await expect(projectBoard.columnHeading(columnContainer, ticket.column)).toBeVisible();
      for (const tag of ticket.tags) {
        await expect(projectBoard.ticketTag(ticket.title, tag)).toBeVisible();
      }
    });
  }
});
