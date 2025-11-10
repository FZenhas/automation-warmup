import test, { expect } from "@playwright/test";

export class MenuPage {
  constructor(page) {
    this.page = page;
    this.loginTab = page.getByRole("link", { name: "LOGIN" });
    this.formTab = page.getByRole("link", { name: "FORM" });
  }

  async navigateToMenu() {
    await test.step("Menu", async () => {
      await this.page.goto("https://playground-drab-six.vercel.app/");
    });
  }

  async pageTitle() {
    await test.step("Page title", async () => {
      await expect(this.page).toHaveTitle(/Playground page/);
    });
  }

  async clickLogin() {
    await test.step("Go to login page", async () => {
      await this.loginTab.click();
    });
  }

  async clickForm() {
    await test.step("Go to form page", async () => {
      await this.formTab.click();
    });
  }

   async containerHeader(title) {
    await test.step("Container title", async () => {
      await expect(
        this.page.getByRole("heading", { name: title })
      ).toBeVisible();
    });
  }
}
