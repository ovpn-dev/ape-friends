import React from "react";
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
  Checkbox,
  HStack,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Define functional component type
const AdminLoginComponent: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
      minHeight="100vh"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={6} width="100%" maxWidth="400px">
        <Text color="yellow.400" fontSize="3xl" fontWeight="bold">
          Admin Login
        </Text>

        <VStack spacing={4} width="100%" fontSize="10px" fontWeight={400}>
          <Box width="100%">
            <Text color="gray.300" mb={2}>
              USERNAME OR EMAIL
            </Text>
            <Input
              placeholder="youremail@gmail.com"
              bg="whiteAlpha.100"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Box width="100%">
            <Text color="gray.300" mb={2}>
              PASSWORD
            </Text>
            <Input
              type="password"
              placeholder="••••••••"
              bg="whiteAlpha.100"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Checkbox color="gray.300">Remember me</Checkbox>

          <Button
            colorScheme="yellow"
            width="100%"
            mt={4}
            as={RouterLink}
            to="/mainmenu"
          >
            LOGIN
          </Button>

          <HStack justifyContent="space-between" width="100%" pt={4}>
            <Link
              color="gray.300"
              fontSize="sm"
              as={RouterLink}
              to="/forgetpaswd"
            >
              Forgot Password
            </Link>
            <Link color="gray.300" fontSize="sm" as={RouterLink} to="/feedback">
              Contact Support
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AdminLoginComponent;
