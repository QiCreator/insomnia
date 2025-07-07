# Homework Basic Flow Test
Added a test to verify insomnia's basic wrokflow of creating, sending and validating a request.

## Test Setup
- Clone the repo
- Cd into the repo's root dir
- Switch to the **homework** branch
- Run commands in the repo's root dir:
  - npm ci
  - NODE_OPTIONS='--max_old_space_size=6144' npm run app-build

## Running the Test
Run the test by command: 
npm run test:build -w packages/insomnia-smoke-test -- --project=Smoke tests/smoke/basic-request-flow.test.ts

## Check test report
If the test fails, the html report will be opened automatically, or you can check the report by running command: 
npx playwright show-report packages/insomnia-smoke-test/playwright-report
