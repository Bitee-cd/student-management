import { CreateForm } from "@/components";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function CreateStudent() {
  return (
    <Box maxW="container.md" mx="auto" p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Create Student
      </Text>
      <CreateForm />
    </Box>
  );
}
