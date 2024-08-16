import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Text,
  VStack,
  Stack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MdOutlinePermDeviceInformation } from "react-icons/md";

interface Step {
  image: string;
  text: string;
  details: string;
  buttonText: string;
}

// Define the images used in the steps
const apeImages: string[] = [
  "./Mask_group.png",
  "./Mask_group(1).png",
  "./Mask_group(2).png",
];

const AppScreen: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Define steps with typing
  const steps: Step[] = [
    {
      image: apeImages[0],
      text: "Welcome to the Ape with Friends bot",
      details:
        "This bot is your gateway to the exciting world of Ape with Friends. You can use it to connect with friends, receive in-game updates, manage your inventory, and more.",
      buttonText: "GET STARTED",
    },
    {
      image: apeImages[1],
      text: "Connect the game to your telegram account",
      details:
        "To get the most out of the Ape with Friends bot, you need to link your game account. This will allow you to access your in-game data and receive personalized updates.",
      buttonText: "LINK ACCOUNT",
    },
    {
      image: apeImages[2],
      text: "Explore the bot's amazing features",
      details:
        "To get the most out of the Ape with Friends bot, you need to link your game account. This will allow you to access your in-game data and receive personalized updates.",
      buttonText: "LINK ACCOUNT",
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onOpen();
    }
  };

  return (
    <>
      <VStack
        align="center"
        justify="center"
        minH="100vh"
        p={4}
        bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
        color="white"
        spacing={6}
      >
        <Box w="100%" maxW="400px" p={4} bg="blue.800" borderRadius="lg">
          <Image
            src={steps[currentStep].image}
            borderRadius="lg"
            alt="Ape Image"
            mb={4}
          />
          <Text fontSize="lg" fontWeight="bold" mb={4} textAlign="center">
            {steps[currentStep].text}
          </Text>
          <Text fontSize="sm" fontWeight="normal" mb={4} textAlign="center">
            {steps[currentStep].details}
          </Text>
          <Button onClick={handleNextStep} colorScheme="yellow" w="full">
            {steps[currentStep].buttonText}
          </Button>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} size={"xs"}>
          <ModalOverlay />
          <ModalContent
            textAlign={"center"}
            alignSelf={"center"}
            justifySelf={"center"}
            bg={"#F2FDFF"}
          >
            <Stack align={"center"} mt={5}>
              {" "}
              <MdOutlinePermDeviceInformation size={"25px"} />
            </Stack>

            <ModalHeader>Grant Permission</ModalHeader>

            <ModalBody>
              <Text fontWeight={400} fontSize="10px">
                Give Ape with Friends permission to interact with your Telegram
                account to share your personal details and manage your
                inventory.
              </Text>
            </ModalBody>
            <ModalFooter mb={2}>
              <Button variant="ghost" rounded={"3xl"} onClick={onClose}>
                CANCEL
              </Button>{" "}
              <Button
                colorScheme="yellow"
                mr={3}
                as={RouterLink}
                to={"/login"}
                onClick={onClose}
                rounded={"3xl"}
              >
                GRANT PERMISSION
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </>
  );
};

export default AppScreen;
