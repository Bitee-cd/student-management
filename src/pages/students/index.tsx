import { useGetAllStudents } from "@/builder/students/queries";
import { StudentCard } from "@/components";
import { StudentCardSkeleton } from "@/components/skeleton";
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  StackDivider,
  Alert,
  AlertIcon,
  Stack,
  Input,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { Next, Previous } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const { status, data } = useGetAllStudents({
    search: searchQuery,
    page,
    pageSize,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };
  const StudentsView = {
    success: (
      <>
        {data?.data?.data?.length === 0 ? (
          <Text>No students found.</Text>
        ) : (
          <>
            {data?.data?.data?.map((student: Student) => (
              <Link
                key={student.registrationNumber}
                href={`/students/${student.registrationNumber}`}
              >
                <StudentCard student={student} />
              </Link>
            ))}
            <HStack mt={6} justify="space-between">
              <IconButton
                icon={<Previous />}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                isDisabled={page === 1}
                aria-label="Previous Page"
                ml="auto"
              />
              <Text>
                Page {page} of{" "}
                {Math.ceil(data?.data?.totalCount / pageSize) || 1}
              </Text>
              <IconButton
                icon={<Next />}
                onClick={() =>
                  setPage((prev) =>
                    data?.data?.totalCount &&
                    page * pageSize < data?.data?.totalCount
                      ? prev + 1
                      : prev
                  )
                }
                isDisabled={page * pageSize >= data?.data?.totalCount}
                aria-label="Next Page"
              />
            </HStack>
          </>
        )}
      </>
    ),
    pending: (
      <Stack>
        {[...Array(5)].map((_, index) => (
          <StudentCardSkeleton key={index} />
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

  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={6}
        gap={6}
        direction={{ base: "column", md: "row" }}
      >
        <Text fontSize="2xl" fontWeight="bold">
          Student List
        </Text>
        <Link href="/students/new">
          <Button colorScheme="teal" size="md">
            Create New Student
          </Button>
        </Link>
      </Flex>

      <Input
        placeholder="Search by name or registration number or Gpa"
        value={searchQuery}
        onChange={handleSearchChange}
        mb={4}
      />

      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {StudentsView[status]}
      </VStack>
    </Box>
  );
}
