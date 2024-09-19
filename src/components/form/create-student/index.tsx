// pages/create.tsx
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, useToast, VStack } from "@chakra-ui/react";
import { useCreateStudent } from "@/builder/students/mutations";
import { useErrorHandler } from "@/lib/error_handler";
import { useRouter } from "next/router";
import { CustomInput } from "..";
import { validators } from "@/lib/validators";

export const validationSchema = Yup.object({
  name: validators.required_text("Name"),
  dob: validators.date(),
  registrationNumber: validators.required_text("Registration Number"),
  major: validators.required_text("Major"),
  gpa: validators.required_number("GPA", { min: 0, max: 5 }),
});

const _initialValues = {
  name: "",
  dob: "",
  registrationNumber: "",
  major: "",
  gpa: 0,
};
export function CreateForm() {
  const toast = useToast();
  const { push } = useRouter();
  const errorHandler = useErrorHandler();
  const { mutate, isPending } = useCreateStudent();

  const handleSubmit = (values: typeof _initialValues) => {
    mutate(values, {
      onError: errorHandler,
      onSuccess: () => {
        toast({
          title: "Success",
          description: "Student created successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        push("/");
      },
    });
  };

  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Formik
        initialValues={_initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <VStack spacing={4} align="stretch">
              <CustomInput
                label="Name"
                name="name"
                placeholder="Enter your name"
              />
              <CustomInput label="Date of Birth" name="dob" type="date" />
              <CustomInput
                label="Registration Number"
                name="registrationNumber"
                placeholder="Enter your registration number"
              />
              <CustomInput
                label="Major"
                name="major"
                placeholder="Enter your major"
              />
              <CustomInput
                label="GPA"
                name="gpa"
                type="number"
                placeholder="Enter your GPA"
              />

              <Button colorScheme="teal" type="submit" isLoading={isPending}>
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
