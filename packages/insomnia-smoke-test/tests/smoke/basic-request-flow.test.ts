import { expect } from '@playwright/test';

import { loadFixture } from '../../playwright/paths';
import { test } from '../../playwright/test';

test('can create, send and validate a basic request', async ({ page }) => {
  test.slow(process.platform === 'darwin' || process.platform === 'win32', 'Slow app start on these platforms');

  // Create request
  await page.getByLabel('Create request collection', { exact: true }).click();

  // Config and send request. 
  // The request editor is a CodeMirror
  const editor = page.locator('section.request-pane')
    .locator('.pane__header')
    .getByTestId('OneLineEditor');
  
  await editor.click();
  await page.keyboard.type('https://www.apple.com/robots.txt');
  //await page.keyboard.press('Enter');
  await page.getByRole('button', { name: 'Send' }).click();

  // Valid request
  const statusTag = page.getByTestId('response-status-tag');
  const responseBody = page.getByTestId("response-pane");

  await expect.soft(statusTag).toContainText('200 OK');
  await expect.soft(responseBody).toContainText('apple');
});
