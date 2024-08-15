import React from "react";
import { Box, VStack, Text, Input, Button, Select } from "@chakra-ui/react";

const EditUserDetailsComponent: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
      minHeight="100vh"
      p={4}
    >
      <VStack spacing={6} align="stretch">
        <Text
          color="yellow.400"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
        >
          Edit User Details
        </Text>

        <VStack spacing={4} align="stretch">
          <Box>
            <Text color="gray.400" mb={2}>
              USERNAME OR EMAIL
            </Text>
            <Input
              placeholder="youremail@gmail.com"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Box>
            <Text color="gray.400" mb={2}>
              PASSWORD
            </Text>
            <Input
              type="password"
              placeholder="••••••••"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Box>
            <Text color="gray.400" mb={2}>
              Role
            </Text>
            <Select
              placeholder="Select role"
              rounded={"3xl"}
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="moderator">Moderator</option>
            </Select>
          </Box>
        </VStack>

        <VStack spacing={4} mt={8}>
          <Button colorScheme="yellow" width="100%" rounded={"3xl"}>
            SAVE CHANGES
          </Button>
          <Button
            variant="outline"
            colorScheme="yellow"
            width="100%"
            rounded={"3xl"}
          >
            CANCEL
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default EditUserDetailsComponent;
