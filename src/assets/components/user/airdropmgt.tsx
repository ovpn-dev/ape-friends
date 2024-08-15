import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { HiUpload } from "react-icons/hi"; // Using an alternative icon for Upload

// Define the type for graphics
interface Graphic {
  name: string;
  status: string;
}

const AirdropManagementComponent: React.FC = () => {
  const graphics: Graphic[] = [
    { name: "Airdrop - 1", status: "Active" },
    { name: "Airdrop - 2", status: "Inactive" },
    { name: "Airdrop - 1", status: "Active" }, // Fixed duplicate name
    { name: "Airdrop - 2", status: "Inactive" }, // Fixed duplicate name
  ];

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
          Airdrop Management
        </Text>

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
            <Text color="gray.400">Create New Airdrop</Text>
          </VStack>
        </Button>

        <Table variant="simple" colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th color="gray.400">Graphic Name</Th>
              <Th color="gray.400">Status</Th>
              <Th color="gray.400">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {graphics.map((graphic, index) => (
              <Tr key={index}>
                <Td color="white">{graphic.name}</Td>
                <Td color="white">{graphic.status}</Td>
                <Td>
                  <HStack spacing={2}>
                    <Button size="sm" colorScheme="black">
                      Edit
                    </Button>
                    <Button size="sm" colorScheme="red">
                      Delete
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </VStack>
    </Box>
  );
};

export default AirdropManagementComponent;
