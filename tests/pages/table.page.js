import test, { expect } from "@playwright/test";

export class HpTablePage {
  constructor(page, hp) {
    this.page = page;
    this.hp = hp;

    this.imageByAlt = page.getByRole("img", { name: hp.name });
    this.nameWithoutSpace = hp.name.replace(" ", "");
    this.nameCell = page.locator("#tableCharacterName" + this.nameWithoutSpace);
    this.houseCell = page.locator("#tableCharacterHouse" + this.nameWithoutSpace);
    this.birth = hp.dateOfBirth ? hp.dateOfBirth : "Unknown";
    this.birthCell = page.getByRole("cell", { name: this.birth });
    this.actorCell = page.getByRole("cell", { name: hp.actor });
  }

  async goToTable() {
    await test.step("Navigate to Harry Potter Table page", async () => {
      await this.page.goto("/table");
    });
  }

  async characterImg() {
    await test.step("Character Image", async () => {
      await expect(this.imageByAlt).toBeVisible();
    });
  }

  async characterName() {
    await test.step("Character Name: " + this.hp.name, async () => {
      await expect(this.nameCell).toBeVisible();
    });
  }

  async characterHouse() {
    await test.step("Character House: " + this.hp.house, async () => {
      await expect(this.houseCell).toBeVisible();
    });
  }

  async characterDateOfBirth() {
    await test.step("Character Date of Birth: " + this.birth, async () => {
      await expect(this.birthCell).toBeVisible();
    });
  }

  async actorName() {
    await test.step("Actor Name: " + this.hp.actor, async () => {
      await expect(this.actorCell).toBeVisible();
    });
  }
}
