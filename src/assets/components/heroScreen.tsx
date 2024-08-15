import React from "react";
import { Box, VStack, Heading, Text, Divider, HStack } from "@chakra-ui/react";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoLight } from "react-icons/pi";

// Define the HeroScreen component as a functional component with no props
const HeroScreen: React.FC = () => {
  return (
    <Box
      bgImage="url('./monkeyHeromid.png')" // Ensure this path is correct
      bgPosition="center"
      bgSize="cover"
      minH="100vh"
      w="auto"
      position="relative"
    >
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        bg="rgba(0,0,0,0.9)"
        p={4}
      >
        <VStack align="center" spacing={2}>
          <Heading size="md" color="white">
            Ape with Friends
          </Heading>
          <Text fontSize="sm" color="gray.400">
            launching very soon on
          </Text>

          <Heading color="yellow.400" size="lg" py={1} px={2}>
            ETHEREUM
          </Heading>
          <Text fontSize="xs" color="gray.500">
            BLOCKCHAIN
          </Text>
          <Divider />
          <Text fontSize="sm" color="gray.400" mt={2}>
            be on the lookout for updates
          </Text>
          <HStack gap={5}>
            <FaTelegram color="white" size="20px" />
            <PiYoutubeLogoLight color="white" size="20px" />
            <FaXTwitter color="white" size="20px" />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroScreen;
