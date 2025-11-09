import test from "@playwright/test";
import { LoginPage } from "./pages/login.page";
import { USERS } from "./data/login.data";


for (let i = 0; i < USERS.length; i++) {
  const user = USERS[i];
  test("Login scenario: " + user.scenario, async ({ page }) => {
    const login = new LoginPage(page, user.expectedMessage);
    await login.goToLogin();


    for (let attempt = 1; attempt <= (user.clickCount || 1); attempt++) {
        await login.fillName(user.username);
        await login.fillPassword(user.password);
        await login.clickLogin();
    }

    await login.expectedResult(user.expectedMessage);
  });
}
