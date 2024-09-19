import React from "react";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const StudentCard = ({ student }: { student: Student }) => {
  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      mb={4}
      bg="gray.50"
      boxShadow="sm"
      w={{ base: "full", sm: "auto" }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Flex
          direction="column"
          mb={{ base: 4, md: 0 }}
          align={{ base: "center", md: "start" }}
        >
          <Avatar name={student.name} size={{ base: "md", md: "lg" }} />
          <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }}>
            {student.name}
          </Text>
        </Flex>
        <Flex direction="column" textAlign={{ base: "center", md: "right" }}>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Reg. Number: {student.registrationNumber}
          </Text>
          <Text fontSize={{ base: "sm", md: "md" }}>
            Major: {student.major}
          </Text>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            textAlign={{ base: "center", md: "end" }}
          >
            GPA: {student.gpa}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
