// @ts-check
const { test, expect} = require("@playwright/test");
import { login } from "../helpers/playwrightUtils";


test('Login Test', async ({ page }) => { // 'page' is provided by Playwright
  const username = 'leecatcole-admin@layer5.io';
  const password = 'meshery23';
  await login(page, username, password); // Use 'page' directly
});