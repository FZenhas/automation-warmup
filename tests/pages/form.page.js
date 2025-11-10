import test, { expect } from "@playwright/test";

export class FormPage {
  constructor(page) {
    this.page = page;
    this.header = page.getByRole("heading", { name: "Form" });
    this.nameInput = page.getByRole("textbox", { name: "Name *" });
    this.emailInput = page.getByRole("textbox", { name: "Email *" });
    this.passwordInput = page.getByRole("textbox", { name: "Password *" });
    this.countrySelect = page.getByLabel("Country *");
    this.genderRadio = (value) =>
      //page.locator(`input[name="gender"][value="${value}"]`);
      page.getByRole("radio", { name: value, exact: true });
    this.genderGroup = page.locator("#genderGroup");
    this.sendButton = page.getByRole("button", { name: "Send" });
    this.successTitle = page.getByText("Success!");
    this.successBody = page.getByText("The form has been submitted");
  }

  async navigateToForm() {
    await test.step("Go to form", async () => {
    await this.page.goto("/form");
    });
  }

  async fillName(userName) {
    await test.step("Name field", async () => {
      await this.nameInput.fill(userName);
    });
  }

  async fillEmail(userEmail) {
    await test.step("Email field", async () => {
      await this.emailInput.fill(userEmail);
    });
  }

  async fillPassword(userPassword) {
    await test.step("Password field", async () => {
      await this.passwordInput.fill(userPassword);
    });
  }

  async selectCountry(userCountry) {
    await test.step("Country field", async () => {
      await this.countrySelect.selectOption(userCountry);
    });
  }

  async selectGender(userGender) {
    await test.step("Gender field", async () => {
      await this.genderRadio(userGender).check();
    });
  }

  async selectHobbies(userHobbies) {
    await test.step("Hobbies field", async () => {
      for (const hobby of userHobbies) {
        await this.page.getByRole("checkbox", { name: hobby }).check();
      }
    });
  }

  async submitForm() {
    await test.step("Submit form", async () => {
      await this.sendButton.click();
    });
  }

  async validateSuccess() {
    await test.step("Form submitted message", async () => {
      await expect(this.successTitle).toBeVisible();
      await expect(this.successBody).toBeVisible();
    });
  }

  async validateRequiredFields(fields) {
     await test.step("Validate form required fields", async () => {
      await expect(this.page.getByText(fields.name)).toBeVisible();
      await expect(this.page.getByText(fields.email)).toBeVisible();
      await expect(this.page.getByText(fields.password)).toBeVisible();
      await expect(this.page.getByText(fields.country)).toBeVisible();
      await expect(this.page.getByText(fields.gender)).toBeVisible();
    });
  }
}

