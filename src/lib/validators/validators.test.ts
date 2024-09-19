import { validators } from ".";

describe("Validators", () => {
  it("should validate text with max length and pattern", async () => {
    // Test valid input
    const validText = await validators.text(30).validate("Valid text");
    expect(validText).toBe("Valid text");

    // Test text exceeding max length
    await expect(
      validators.text(10).validate("This text is too long")
    ).rejects.toThrow("Field cannot be more than 10 characters");

    // Test invalid text pattern
    await expect(validators.text().validate("Invalid!")).rejects.toThrow(
      "Please enter valid text"
    );
  });

  it("should validate number", async () => {
    const validNumber = await validators.number().validate(123);
    expect(validNumber).toBe(123);

    await expect(validators.number().validate("not-a-number")).rejects.toThrow(
      "this must be a `number` type"
    );
  });

  it("should validate integer", async () => {
    const validInteger = await validators.integer().validate("123");
    expect(validInteger).toBe("123");

    await expect(validators.integer().validate("123abc")).rejects.toThrow(
      "Please enter a number"
    );
  });

  it("should validate required text with field name and max length", async () => {
    const validText = await validators
      .required_text("Username", 20)
      .validate("ValidUsername");
    expect(validText).toBe("ValidUsername");

    await expect(
      validators.required_text("Username").validate("")
    ).rejects.toThrow("Username is required");

    await expect(
      validators.required_text("Username", 10).validate("ThisUsernameIsTooLong")
    ).rejects.toThrow("Field cannot be more than 10 characters");

    await expect(
      validators.required_text("Username").validate("Invalid!")
    ).rejects.toThrow("Please enter valid text");
  });

  it("should validate required number with min and max constraints", async () => {
    const validNumber = await validators
      .required_number("Age", { min: 18, max: 60 })
      .validate(30);
    expect(validNumber).toBe(30);

    await expect(
      validators.required_number("Age", { min: 18 }).validate(17)
    ).rejects.toThrow("This field cannot be less than 18");

    await expect(
      validators.required_number("Age", { min: 18, max: 60 }).validate(61)
    ).rejects.toThrow("This field cannot be greater than 60");
  });

  it("should validate required integer with field name", async () => {
    const validInteger = await validators
      .required_integer("Quantity")
      .validate("10");
    expect(validInteger).toBe("10");

    await expect(
      validators.required_integer("Quantity").validate("")
    ).rejects.toThrow("Quantity is required");

    await expect(
      validators.required_integer("Quantity").validate("10abc")
    ).rejects.toThrow("Please enter a number");
  });

  it("should validate date", async () => {
    const validDate = await validators.date().validate(new Date("2023-01-01"));
    expect(validDate).toEqual(new Date("2023-01-01"));

    await expect(validators.date().validate(undefined)).rejects.toThrow(
      "Please enter a valid date"
    );
  });
});
