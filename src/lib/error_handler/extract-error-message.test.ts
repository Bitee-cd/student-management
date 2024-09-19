import { describe, it, expect } from "vitest";
import { AxiosError } from "axios";
import { extractErrorMessage } from ".";

describe("extractErrorMessage", () => {
  it("should extract the error message from AxiosError", () => {
    const axiosError = {
      response: { data: { error: "Axios error message" } },
      message: "Generic axios error",
    } as AxiosError;

    expect(extractErrorMessage(axiosError)).toBe("Axios error message");
  });

  it("should extract the error message from a general Error object", () => {
    const generalError = new Error("General error message");

    expect(extractErrorMessage(generalError)).toBe("General error message");
  });
});
