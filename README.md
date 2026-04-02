# Playwright Test Project

Test project demonstrating the use of Playwright automation on a sample site. Written in Typescript with NodeJS.

**Requirements:** Node.js 18+

Test site - [https://animated-gingersnap-8cf7f2.netlify.app/](https://animated-gingersnap-8cf7f2.netlify.app/)

```text
.
├── .github/workflows
│   └── playwright.yml - handles test runs in Github Actions
├── node_modules
├── playwright-report
│   └── index.html - report generator
├── test-data
│   └── test_data.json - test data to update when need to add new cases
├── test-results
└── tests
│   └── ticket-verification.spec.ts - spec file of tests to run
├── .env.example - environment variable template, rename to .env and fill in credentials
├── .gitignore 
├── LICENSE
├── package-lock.json
├── package.json - list of NPM packages required to install
├── playwright.config.ts - configuration for browsers in test runs
├── README.md
```

## AI Assistance (Claude Code and Cursor)

Claude Code:

- reviewed specific errors found when running tests
  - Claude Code would update the code and provide explanations in responses
- updated code blocks with prompt requests

Cursor:

- used as the primary IDE for code development
- updated code blocks with prompt requests, the Cursor agent would make changes based on the prompt

## Resources:

[Playwright](https://playwright.dev/docs/intro) - Framework used for automation  
[Cursor](https://cursor.com/get-started) - AI-powered IDE
[Claude Code](https://claude.com/product/claude-code) - AI used for code writing and debugging assistance

## How to run:

1. Clone the repo locally
2. Run `npm install` to install required node modules
3. Run `npx playwright install` to install browser binaries
4. rename `.env.example` to `.env`
    add your username and password where the placeholder text is
5. To run (headless with all three browsers: Chromium, Firefox, Webkit (Safari))
  `npx playwright test`  
    This is the default state  
    Headless - Browsers run without a visible GUI, with quicker performance  
    Headed - Browsers run visible to the user, good for visual demonstration and debugging  
        `npx playwright test --headed`
    Run on a specific browser only:
    `npx playwright test --project=chromium` (replace chromium with firefox or webkit for alternatives)
6. To view the HTML report after a test run:
  `npx playwright show-report`

