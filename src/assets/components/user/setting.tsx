import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Switch,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Settings: React.FC = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const sectionBg = useColorModeValue("white", "gray.700");

  return (
    <Box bg={bg} minHeight="100vh" p={4}>
      <VStack spacing={6} align="stretch" maxWidth="400px" margin="0 auto">
        <Heading size="lg" color="yellow.400" mb={4}>
          Settings
        </Heading>

        <Box bg={sectionBg} borderRadius="md" p={4}>
          <Text fontWeight="bold" mb={4}>
            App Preferences
          </Text>
          <VStack spacing={4} align="stretch">
            <Flex justify="space-between" align="center">
              <Text>Toggle Notifications</Text>
              <Switch colorScheme="green" />
            </Flex>
            <Flex justify="space-between" align="center">
              <Text>Dark Mode</Text>
              <Switch colorScheme="green" />
            </Flex>
          </VStack>
        </Box>

        <Box bg={sectionBg} borderRadius="md" p={4}>
          <Text fontWeight="bold" mb={4}>
            User Roles
          </Text>
          <Flex align="center" cursor="pointer">
            <Icon as={EditIcon} mr={2} />
            <Text>Manage Roles</Text>
          </Flex>
        </Box>
      </VStack>
    </Box>
  );
};

export default Settings;
