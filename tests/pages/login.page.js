import test, { expect } from "@playwright/test";

export class LoginPage {
  constructor(page, expectedMessage) {
    this.page = page;
    this.expectedMessage = expectedMessage;
    this.header = page.getByRole("heading", { name: "Login" });
    this.nameInput = page.getByRole("textbox", { name: "Type your username" });
    this.passwordInput = page.getByRole("textbox", {
      name: "Type your password",
    });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.expectedResultLocator = page.getByText(expectedMessage);
  }

  async goToLogin() {
    await test.step("Navigate to login page", async () => {
      await this.page.goto("/login");
    });
  }

  async fillName(userName) {
    await test.step("Input name", async () => {
      await this.nameInput.fill(userName);
    });
  }

  async fillPassword(userPassword) {
    await test.step("Input password", async () => {
      await this.passwordInput.fill(userPassword);
    });
  }

  async clickLogin() {
    await test.step("Clicking Login", async () => {
      await this.loginButton.click();
    });
  }

  async expectedResult() {
    await test.step("Login Result", async () => {
      await expect(this.expectedResultLocator).toBeVisible();
    });
  }
}
