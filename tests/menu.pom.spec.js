import test from "@playwright/test";
import { MenuPage } from "./pages/menu.page";

test.describe("Menu", () => {
  test("Menu LOGIN validation", async ({ page }) => {
    const menu = new MenuPage(page);

    await menu.navigateToMenu();
    await menu.pageTitle();
    await menu.clickLogin();
    await menu.containerHeader("LOGIN");
  });
});


test.describe("Menu", () => {
  test("Menu FORM validation", async ({ page }) => {
    const menu = new MenuPage(page);

    await menu.navigateToMenu();
    await menu.pageTitle();
    await menu.clickForm();
    await menu.containerHeader("FORM");
  });
});