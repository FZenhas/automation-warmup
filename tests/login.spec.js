import test, { expect } from "@playwright/test";
import { USERS } from "./data/login";
import { beforeEach } from "node:test";

test.beforeEach("Go to login", async ({ page }) => {
  await page.goto("/login");
});

test("Login sucessful", async ({ page }) => {
  await test.step("Successful login", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.validUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.validUser.password);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText(USERS.validUser.expectedMessage)).toBeVisible();
  });
});

test("Blocked Account", async ({ page }) => {
  await test.step("Blocked Account", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.blockedUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.blockedUser.password);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(
      page.getByText(USERS.blockedUser.expectedMessage)
    ).toBeVisible();
  });
});

test("Invalid user", async ({ page }) => {
  await test.step("Invalid user", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.invalidUser.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.invalidUser.password);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(
      page.getByText(USERS.invalidUser.expectedMessage)
    ).toBeVisible();
  });
});

test("Wrong password", async ({ page }) => {
  await test.step("Wrong password", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.wrongPassword.username);
    await page
      .getByRole("textbox", { name: "Type your password" })
      .fill(USERS.wrongPassword.password);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(
      page.getByText(USERS.wrongPassword.expectedMessage)
    ).toBeVisible();
  });
});

test("Wrong password 3 times", async ({ page }) => {
  await test.step("Wrong password 3 times", async () => {
    await page
      .getByRole("textbox", { name: "Type your username" })
      .fill(USERS.wrong3Times.username);

    for (let i = 0; i < 3; i++) {
      await page
        .getByRole("textbox", { name: "Type your password" })
        .fill(USERS.wrong3Times.password);
      await page.getByRole("button", { name: "Login" }).click();
    }

    await expect(
      page.getByText(USERS.wrong3Times.expectedMessage)
    ).toBeVisible();
  });
});
