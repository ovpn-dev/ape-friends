import React from "react";
import { Box, VStack, Text, Input, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const PasswordRecovery: React.FC = () => {
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
          Password Recovery
        </Text>

        <VStack spacing={4} width="100%">
          <Box width="100%">
            <Text color="gray.300" fontSize="10px" mb={2}>
              EMAIL ADDRESS
            </Text>
            <Input
              placeholder="youremail@gmail.com"
              bg="whiteAlpha.100"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Button
            colorScheme="yellow"
            width="100%"
            as={RouterLink}
            to={"/twofa"}
            mt={4}
          >
            SEND RECOVERY LINK
          </Button>
          <Button
            variant="outline"
            colorScheme="yellow"
            width="100%"
            as={RouterLink}
            to={"/login"}
            mt={4}
          >
            BACK TO LOGIN
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default PasswordRecovery;
