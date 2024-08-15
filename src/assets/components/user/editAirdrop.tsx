import React from "react";
import { Box, VStack, Text, Input, Button } from "@chakra-ui/react";

const EditAidropComponent: React.FC = () => {
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
          Edit Airdrop Card
        </Text>

        <VStack spacing={4} align="stretch">
          <Box>
            <Text color="gray.400" mb={2}>
              AIRDROP TITLE
            </Text>
            <Input
              placeholder="airdrop title"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Box>
            <Text color="gray.400" mb={2}>
              AIRDROP DESCRIPTION
            </Text>
            <Input
              placeholder="description"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>

          <Box>
            <Text color="gray.400" mb={2}>
              REWARDS
            </Text>
            <Input
              placeholder="input the rewards"
              bg="whiteAlpha.200"
              border="none"
              color="white"
              _placeholder={{ color: "gray.500" }}
            />
          </Box>
        </VStack>

        <VStack spacing={4} mt={20}>
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

export default EditAidropComponent;
