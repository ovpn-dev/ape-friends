import React from "react";
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const UserManagementComponent: React.FC = () => {
  const users = [
    { username: "User 1", email: "user1@example.com", role: "Admin" },
    { username: "User 1", email: "user1@example.com", role: "Admin" },
    { username: "User 2", email: "user2@example.com", role: "User" },
    { username: "User 2", email: "user2@example.com", role: "User" },
  ];

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
          User Management
        </Text>

        <HStack fontSize="10px" fontWeight={400}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              bg="gray.600"
              border="none"
              rounded={"3xl"}
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </InputGroup>
          <Button colorScheme="yellow" size="md">
            SEARCH
          </Button>
        </HStack>

        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th color="yellow">Username</Th>
              <Th color="yellow">Email</Th>
              <Th color="yellow">Role</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={index}>
                <Td color="white">{user.username}</Td>
                <Td color="white">{user.email}</Td>
                <Td color="white">{user.role}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <HStack spacing={4} justify="center" mt={20}>
          <Button
            colorScheme="yellow"
            size="md"
            as={RouterLink}
            to={"/adduser"}
            rounded={"3xl"}
          >
            ADD NEW USER +
          </Button>
          <Button
            colorScheme="yellow"
            size="md"
            as={RouterLink}
            to={"/edituser"}
            rounded={"3xl"}
          >
            EDIT USER
          </Button>
          <Button
            colorScheme="red"
            size="md"
            as={RouterLink}
            to={"/"}
            rounded={"3xl"}
          >
            DELETE USER
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default UserManagementComponent;
