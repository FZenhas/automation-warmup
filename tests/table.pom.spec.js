import { test, expect } from "@playwright/test";
import { HpTablePage } from "./pages/table.page";
import hpCharacters from "./data/json/hpCharacters.json";

for (const hp of hpCharacters) {
  test("HP Character: " + hp.name + " | " + hp.house, async ({ page }) => {
    const table = new HpTablePage(page, hp);
    await table.goToTable();
    await table.characterImg();
    await table.characterName();
    await table.characterHouse();
    await table.characterDateOfBirth();
    await table.actorName();
  });
}
