import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, useToast, VStack } from "@chakra-ui/react";
import { useEditStudent } from "@/builder/students/mutations";
import { useErrorHandler } from "@/lib/error_handler";
import { useRouter } from "next/router";
import { CustomInput } from "..";
import { validators } from "@/lib/validators";

const validationSchema = Yup.object({
  name: validators.required_text("Name"),
  dob: validators.date(),
  registrationNumber: validators.required_text("Registration Number"),
  major: validators.required_text("Major"),
  gpa: validators.required_number("GPA", { min: 0, max: 5 }),
});

export function EditStudentForm({
  student,
  student_id,
}: {
  student: Student;
  student_id: string;
}) {
  const _initialValues = {
    ...student,
  };
  const toast = useToast();
  const { push } = useRouter();
  const errorHandler = useErrorHandler();
  const { mutate, isPending } = useEditStudent();

  const handleSubmit = (values: typeof _initialValues) => {
    mutate(
      { payload: values, student_id },
      {
        onError: errorHandler,
        onSuccess: () => {
          toast({
            title: "Success",
            description: "Student edited successfully",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
          push("/");
        },
      }
    );
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
