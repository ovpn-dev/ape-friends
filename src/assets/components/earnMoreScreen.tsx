import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
// import {
//   FaGift,
//   FaTelegram,
//   FaLink,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaTiktok,
//   FaDiscord,
// } from "react-icons/fa";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Define TypeScript interfaces for earn options
interface EarnOption {
  icon: React.ComponentType<{ size?: number; color?: string }> | string;
  text: string;
  reward: number;
  color: string;
}

// Define the earn options data
const earnOptions: EarnOption[] = [
  // Example of an image icon
  {
    icon: "./icons8-friends-96.png",
    text: "Add 10 new friends (0/10)",
    reward: 100000,
    color: "teal.500",
  },
  {
    icon: "./icons8-telegram.png",
    text: "Join us on Telegram",
    reward: 150000,
    color: "blue.600",
  },
  {
    icon: "./Bitcoin_3D.png",
    text: "Choose Blockchain",
    reward: 100000,
    color: "orange.500",
  },
  {
    icon: "./icons8-x.png",
    text: "Subscribe to X",
    reward: 100000,
    color: "gray.700",
  },
  {
    icon: "./icons8-youtube.png",
    text: "Subscribe to YouTube",
    reward: 100000,
    color: "red.500",
  },
  {
    icon: "./icons8-instagram.png",
    text: "Subscribe to Instagram",
    reward: 100000,
    color: "purple.500",
  },
  {
    icon: "./icons8-tiktok.png",
    text: "Subscribe to TikTok",
    reward: 100000,
    color: "black",
  },
  {
    icon: "./icons8-discord.png",
    text: "Subscribe to Discord",
    reward: 100000,
    color: "indigo.500",
  },
];

interface EarnButtonProps {
  option: EarnOption;
  onOpen: () => void;
}

const EarnButton: React.FC<EarnButtonProps> = ({ option, onOpen }) => {
  const renderIcon = () => {
    if (typeof option.icon === "string") {
      return <Image src={option.icon} boxSize="24px" />;
    } else {
      return <option.icon size={24} />;
    }
  };

  return (
    <Button
      leftIcon={renderIcon()}
      // rightIcon={<Text>›</Text>}
      width="full"
      h="auto"
      p={1}
      bg="whiteAlpha.200"
      _hover={{ bg: "whiteAlpha.300" }}
      onClick={onOpen}
      color={"white"}
      justifyContent={"space-between"}
    >
      <VStack align="center">
        <Text>{option.text}</Text>
        <Text color="yellow.400">+{option.reward.toLocaleString()}</Text>
      </VStack>
      <ChevronRightIcon />
    </Button>
  );
};

interface EarnModalProps {
  isOpen: boolean;
  onClose: () => void;
  option: EarnOption;
}

const EarnModal: React.FC<EarnModalProps> = ({ isOpen, onClose, option }) => {
  const renderIcon = () => {
    if (typeof option.icon === "string") {
      return <Image src={option.icon} boxSize="24px" />;
    } else {
      return <option.icon size={24} color={option.color} />;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent bg="#0D2844" color="white" textAlign="center">
        <ModalHeader alignSelf={"center"} justifySelf={"center"}></ModalHeader>
        <ModalBody>
          {" "}
          <VStack spacing={3}>
            {renderIcon()}
            <Text>{option.text}</Text>
            <Button
              colorScheme="yellow"
              boxSize={5}
              fontSize="8px"
              rounded={"2xl"}
            >
              Subscribe
            </Button>
          </VStack>
          <VStack spacing={4} py={4}>
            <Text fontSize={"8px"}>YOUR REWARD</Text>
            <HStack color={"yellow"}>
              <Image src="./Bitcoin_3D.png" alt="Bitcoin" h={6} />
              <Text>+ {option.reward.toLocaleString()}</Text>
            </HStack>
            <Button colorScheme="yellow" w={"200px"} rounded={"2xl"}>
              CLAIM
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const EarnMoreCoinsScreen: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<EarnOption | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (option: EarnOption) => {
    setSelectedOption(option);
    onOpen();
  };

  return (
    <Box
      bgImage="url('./pexels-cottonbro.png')"
      bg="linear-gradient(to bottom, #001a33, #003366)"
      bgBlendMode={"overlay"}
      minH="auto"
      p={4}
      color="white"
    >
      <VStack spacing={6} align="stretch">
        <Image
          src="./Bitcoin_3D.png" // Ensure this path is correct
          alt="Bitcoin"
          boxSize="100px"
          alignSelf="center"
        />
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Earn more coins
        </Text>
        <VStack spacing={3}>
          {earnOptions.map((option, index) => (
            <EarnButton
              key={index}
              option={option}
              onOpen={() => handleOpenModal(option)}
            />
          ))}
        </VStack>
      </VStack>
      {selectedOption && (
        <EarnModal isOpen={isOpen} onClose={onClose} option={selectedOption} />
      )}
    </Box>
  );
};

export default EarnMoreCoinsScreen;
