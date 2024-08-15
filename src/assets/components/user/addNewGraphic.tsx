import React from "react";
import { Box, VStack, Text, Button, Icon, Input } from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi"; // Using an alternative icon for Upload

const AddNewGraphicComponent: React.FC = () => {
  const handleUploadClick = () => {
    // Implement the logic for uploading a graphic
    console.log("Upload button clicked");
  };

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
          Add New Graphic
        </Text>
        <Box>
          <Text color="gray.400" mb={2}>
            GRAPHIC NAME
          </Text>
          <Input
            placeholder="Graphic Name"
            bg="whiteAlpha.200"
            border="none"
            color="white"
            _placeholder={{ color: "gray.500" }}
          />
        </Box>
        <Button
          onClick={handleUploadClick}
          border="1px dashed"
          borderColor="gray.600"
          borderRadius="md"
          p={8}
          bg="gray.800"
          textAlign="center"
          _hover={{ bg: "gray.700" }}
          _active={{ bg: "gray.600" }}
          _focus={{ boxShadow: "none" }}
          width="100%"
        >
          <VStack spacing={2}>
            <Icon as={HiUpload} w={10} h={10} color="gray.400" />
            <Text color="gray.400">Upload New Graphic</Text>
          </VStack>
        </Button>

        <VStack spacing={4} mt={20}>
          <Button colorScheme="yellow" width="100%">
            UPLOAD GRAPHIC
          </Button>
          <Button variant="outline" colorScheme="whiteAlpha" width="100%">
            CANCEL
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AddNewGraphicComponent;
