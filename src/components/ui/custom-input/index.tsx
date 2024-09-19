import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, FieldProps } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
}) => (
  <Field name={name}>
    {({ field, form }: FieldProps) => {
      return (
        <FormControl
          isInvalid={Boolean(form.errors[name] && form.touched[name])}
        >
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...field} type={type} placeholder={placeholder} />

          {form.errors[name] && form.touched[name] ? (
            <FormErrorMessage>{form.errors[name] as string}</FormErrorMessage>
          ) : null}
        </FormControl>
      );
    }}
  </Field>
);
