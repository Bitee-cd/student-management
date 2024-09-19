import { date, number, string } from "yup";

export const validators = {
  text: (length = 50) =>
    string()
      .trim()
      .max(length, `Field cannot be more than ${length} characters`)
      .matches(/^[a-zA-Z0-9\s]+$/, "Please enter valid text"),
  number: () => number(),
  integer: () => string().matches(/^[0-9]{1,}$/, "Please enter a number"),
  required_text: (field_name: string, length = 50) =>
    string()
      .trim()
      .required(`${field_name} is required`)
      .max(length, `Field cannot be more than ${length} characters`)
      .matches(/^[a-zA-Z0-9\s]+$/, "Please enter valid text"),
  required_number: (
    field_name: string,
    payload: { min: number; max?: number } = {
      min: 0,
    }
  ) =>
    number()
      .required(`${field_name} is required`)
      .min(payload.min, `This field cannot be less than ${payload.min}`)
      .max(
        payload.max ?? Number.MAX_SAFE_INTEGER,
        `This field cannot be greater than ${payload.max}`
      ),
  required_integer: (field_name: string) =>
    string()
      .required(`${field_name} is required`)
      .matches(/^[0-9]{1,}$/, "Please enter a number"),

  date: () => date().required("Please enter a valid date"),
};
