import { useGetSingleStudent } from "@/builder/students/queries";
import { EditStudentForm } from "@/components";
import { Alert, AlertIcon, Skeleton, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function EditStudent() {
  const router = useRouter();
  const { registrationNumber } = router.query;

  const { data, status } = useGetSingleStudent(registrationNumber as string);
  const EditStudentView = {
    success: (
      <div>
        <Text fontSize="2xl" fontWeight="bold">
          Edit Student
        </Text>
        <EditStudentForm
          student={data?.data}
          student_id={registrationNumber as string}
        />
      </div>
    ),
    pending: (
      <Stack>
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} height="40px" />
        ))}
      </Stack>
    ),
    error: (
      <Alert status="error">
        <AlertIcon />
        Something went wrong while fetching student data.
      </Alert>
    ),
  };

  return EditStudentView[status];
}
