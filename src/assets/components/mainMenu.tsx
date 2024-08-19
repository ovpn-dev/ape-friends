import React from "react";
import { Box, VStack, Text, Image, Button, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
      minHeight="100vh"
      p={4}
    >
      <VStack spacing={6} align="stretch">
        <VStack spacing={4} align="center">
          <HStack gap={2}>
            <Image
              src="./Bitcoin_3D.png" // Ensure this path is correct
              alt="Bitcoin"
              boxSize="55px"
            />
            <Text color={"white"} fontSize={"3xl"}>
              350,590
            </Text>
          </HStack>
          <Button
            variant="link"
            colorScheme="yellow"
            width="100%"
            rounded={"3xl"}
            rightIcon={<Text>›</Text>}
          >
            Basic Blinker
          </Button>
        </VStack>

        <VStack spacing={4} mt={8}>
          <Button
            colorScheme="yellow"
            width="80%"
            rounded={"3xl"}
            as={RouterLink}
            to={"/play"}
          >
            PLAY
          </Button>
          <Button
            colorScheme="yellow"
            width="80%"
            rounded={"3xl"}
            as={RouterLink}
            to={"/afl"}
          >
            ACHIEVEMENTS
          </Button>
          <Button
            colorScheme="yellow"
            width="80%"
            rounded={"3xl"}
            as={RouterLink}
            to={"/drc"}
          >
            DAILY REWARDS
          </Button>
          <Button
            colorScheme="yellow"
            width="80%"
            rounded={"3xl"}
            as={RouterLink}
            to={"/emcs"}
          >
            EARN MORE
          </Button>
          <Button
            colorScheme="yellow"
            width="80%"
            rounded={"3xl"}
            as={RouterLink}
            to={"/ifc"}
          >
            FRIENDS
          </Button>
          <Button
            colorScheme="yellow"
            width="80%"
            rounded={"3xl"}
            as={RouterLink}
            to={"/setting"}
          >
            SETTINGS
          </Button>
          <Button colorScheme="purple" width="30%" rounded={"3xl"}>
            Basic Blinker\
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default MainMenu;
