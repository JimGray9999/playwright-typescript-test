import { Locator, Page } from '@playwright/test';

export class ProjectBoardPage {
  constructor(private readonly page: Page) {}

  projectButton(projectName: string): Locator {
    return this.page.getByRole('button', { name: projectName });
  }

  ticketTitle(ticketTitle: string): Locator {
    return this.page.getByRole('heading', { name: ticketTitle });
  }

  ticketCard(ticketTitle: string): Locator {
    return this.ticketTitle(ticketTitle).locator('xpath=..');
  }

  ticketColumn(ticketTitle: string): Locator {
    return this.ticketCard(ticketTitle).locator('xpath=..');
  }

  ticketColumnContainer(ticketTitle: string): Locator {
    return this.ticketColumn(ticketTitle).locator('xpath=..');
  }

  columnHeading(columnContainer: Locator, columnName: string): Locator {
    return columnContainer.getByRole('heading', { name: columnName });
  }

  ticketTag(ticketTitle: string, tagName: string): Locator {
    return this.ticketCard(ticketTitle).getByText(tagName, { exact: true });
  }
}
