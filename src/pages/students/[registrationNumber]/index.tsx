import { GetServerSideProps } from "next";
import {
  Box,
  Flex,
  Spinner,
  Alert,
  AlertIcon,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { API_URL } from "@/builder/endpoints";
import Link from "next/link";
import { useDeleteStudent } from "@/builder/students/mutations";
import { useErrorHandler } from "@/lib/error_handler";
import { useRouter } from "next/router";
import { StudentCard } from "@/components";

interface StudentPageProps {
  student: Student | null;
  error: string | null;
}

const StudentPage = ({ student, error }: StudentPageProps) => {
  const { mutate, isPending } = useDeleteStudent();
  const errorHandler = useErrorHandler();
  const { push } = useRouter();
  const toast = useToast();
  if (error) {
    return (
      <Box p={4}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  if (!student) {
    return (
      <Box p={4}>
        <Spinner size="xl" />
      </Box>
    );
  }
  function handleDelete() {
    mutate(
      { student_id: student?.registrationNumber as string },
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
  }
  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Student Data
      </Text>
      <StudentCard student={student} />

      <Flex direction="row" mb={4} justify="flex-end">
        <Link href={`/students/${student.registrationNumber}/edit`}>
          <Button colorScheme="blue" mr={4}>
            Edit
          </Button>
        </Link>
        <Button colorScheme="red" onClick={handleDelete} isLoading={isPending}>
          Delete
        </Button>
      </Flex>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { registrationNumber } = context.query;

  try {
    const response = await axios.get(
      `${API_URL}/students/${registrationNumber}`
    );
    return {
      props: {
        student: response.data,
        error: null,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      props: {
        student: null,
        error: "Student not found.",
      },
    };
  }
};

export default StudentPage;
