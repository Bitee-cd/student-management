import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";

export const StudentCardSkeleton = () => (
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
        align={{ base: "center", md: "start" }}
        mb={{ base: 4, md: 0 }}
      >
        <SkeletonCircle size={{ base: "40px", md: "50px" }} mb={2} />
        <Skeleton height="15px" width={{ base: "120px", md: "150px" }} />
      </Flex>
      <Flex
        direction="column"
        align={{ base: "center", md: "end" }}
        textAlign={{ base: "center", md: "right" }}
      >
        <Skeleton height="15px" width={{ base: "120px", md: "150px" }} mb={2} />
        <Skeleton height="15px" width={{ base: "80px", md: "100px" }} mb={2} />
        <Skeleton height="15px" width={{ base: "80px", md: "100px" }} mb={2} />
      </Flex>
    </Flex>
  </Box>
);
