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
import {
  FaGift,
  FaTelegram,
  FaLink,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaDiscord,
} from "react-icons/fa";
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
    icon: "/src/assets/icons8-friends-96.png",
    text: "Add 10 new friends (0/10)",
    reward: 100000,
    color: "teal.500",
  },
  {
    icon: FaGift,
    text: "Add 10 new friends (0/10)",
    reward: 100000,
    color: "blue.500",
  },
  {
    icon: FaTelegram,
    text: "Join us on Telegram",
    reward: 150000,
    color: "blue.600",
  },
  {
    icon: FaLink,
    text: "Choose Blockchain",
    reward: 100000,
    color: "orange.500",
  },
  {
    icon: FaTwitter,
    text: "Subscribe to X",
    reward: 100000,
    color: "gray.700",
  },
  {
    icon: FaYoutube,
    text: "Subscribe to YouTube",
    reward: 100000,
    color: "red.500",
  },
  {
    icon: FaInstagram,
    text: "Subscribe to Instagram",
    reward: 100000,
    color: "purple.500",
  },
  {
    icon: FaTiktok,
    text: "Subscribe to TikTok",
    reward: 100000,
    color: "black",
  },
  {
    icon: FaDiscord,
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
      bg="whiteAlpha.200"
      _hover={{ bg: "whiteAlpha.300" }}
      onClick={onOpen}
      color={"white"}
    >
      <VStack align="start">
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
      <ModalOverlay />
      <ModalContent bg="gray.800" color="white" textAlign="center">
        <ModalHeader alignSelf={"center"} justifySelf={"center"}>
          <HStack spacing={3}>
            {renderIcon()}
            <Text>{option.text}</Text>
          </HStack>
        </ModalHeader>
        <ModalBody>
          <VStack spacing={4} align="stretch" py={4}>
            <Text>Earn {option.reward.toLocaleString()} coins</Text>
            <Button colorScheme="yellow">CLAIM</Button>
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
      bg="linear-gradient(to bottom, #001a33, #003366)"
      minH="100vh"
      p={4}
      color="white"
    >
      <VStack spacing={6} align="stretch">
        <Image
          src="/src/assets/Bitcoin_3D.png" // Ensure this path is correct
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
