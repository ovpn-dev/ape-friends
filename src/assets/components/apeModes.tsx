import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Heading,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Define TypeScript interfaces for mode data
interface Mode {
  title: string;
  version: string;
  overview: string;
  process: string[];
  pros: string[];
  cons: string[];
}

// Mode data
const modeData: Mode[] = [
  {
    title: "King Kong Mode",
    version: "Version 1",
    overview:
      "This mode allows any member of the chat to propose a capital allocation (CA) for investment or trading.",
    process: [
      "A member initiates a proposal without needing prior consent from other members.",
      "The group aims to collectively match the standard buy amount agreed upon previously.",
    ],
    pros: [
      "Fast decision-making and execution.",
      "Encourages active participation from all members.",
    ],
    cons: [
      "Potential for impulsive decisions without thorough consultation.",
      "Risk of misalignment with the group's overall investment strategy.",
    ],
  },
  {
    title: "Full Ape Mode",
    version: "SECOND MODE",
    overview:
      "This mode builds on King Kong Mode, adding a layer of consent based on contributor status and reactions.",
    process: [
      "Any member can propose a trade, similar to King Kong Mode.",
      "The trade will only be executed if:",
      "The proposer is a contributor to the pool, or",
      "At least one contributor reacts positively with designated emojis (🍌, 🦍, 🚀).",
    ],
    pros: [
      "Maintains a level of oversight by ensuring that at least some contributors are engaged.",
      "Allows for quick reactions to market opportunities.",
    ],
    cons: [
      "Still susceptible to hasty decisions, especially if the proposer is not well-informed.",
      "Reliance on emoji reactions may lead to unclear or superficial agreements.",
    ],
  },
  {
    title: "Smart Ape",
    version: "THIRD MODE",
    overview:
      "This mode introduces a requirement for consensus based on the financial stake of contributors.",
    process: [
      "Proposals can be made as in the previous modes.",
      "A trade will only proceed if at least half of the contributors (by dollar amount) agree to it.",
    ],
    pros: [
      "Encourages more thoughtful discussion and consideration of the proposal.",
      "Ensures that those with a larger financial stake have a significant say in decision-making.",
    ],
    cons: [
      "May slow down the decision-making process due to the need for agreement.",
      "Risk of deadlock if contributors have differing opinions.",
    ],
  },
  {
    title: "Chimp",
    version: "FOURTH MODE",
    overview:
      "This mode requires unanimous consent from all contributors before executing a trade.",
    process: [
      "Any member can propose a trade, but it will only go forward if every contributor agrees.",
    ],
    pros: [
      "Ensures that all voices are heard and that everyone is on board with the decision.",
      "Reduces the risk of conflicts and dissatisfaction among contributors.",
    ],
    cons: [
      "Can lead to significant delays in decision-making, especially in larger groups.",
      "Risk of inaction if there are disagreements, potentially missing out on market opportunities.",
    ],
  },
  // Add more modes here as needed
];

interface ModeContentProps {
  mode: Mode;
}

const ModeContent: React.FC<ModeContentProps> = ({ mode }) => (
  <VStack spacing={4} align="stretch" width="100%">
    <Text color="cyan.400" fontSize="sm">
      {mode.version}
    </Text>
    <Heading color="yellow.400" size="lg">
      {mode.title}
    </Heading>

    <Box bg="whiteAlpha.200" p={4} borderRadius="md">
      <Text fontWeight="bold" mb={2}>
        OVERVIEW
      </Text>
      <Text fontSize="sm">{mode.overview}</Text>
    </Box>

    <Box bg="whiteAlpha.200" p={4} borderRadius="md">
      <Text fontWeight="bold" mb={2}>
        PROCESS
      </Text>
      {mode.process.map((item, index) => (
        <Text key={index} fontSize="sm">
          • {item}
        </Text>
      ))}
    </Box>

    <Box bg="whiteAlpha.200" p={4} borderRadius="md">
      <Text fontWeight="bold" mb={2}>
        PROS
      </Text>
      {mode.pros.map((item, index) => (
        <Text key={index} fontSize="sm">
          • {item}
        </Text>
      ))}
    </Box>

    <Box bg="whiteAlpha.200" p={4} borderRadius="md">
      <Text fontWeight="bold" mb={2}>
        CONS
      </Text>
      {mode.cons.map((item, index) => (
        <Text key={index} fontSize="sm">
          • {item}
        </Text>
      ))}
    </Box>
  </VStack>
);

const ApeModeScreen: React.FC = () => {
  const [currentModeIndex, setCurrentModeIndex] = useState<number>(0);

  const handlePrevious = () => {
    setCurrentModeIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : modeData.length - 1
    );
  };

  const handleNext = () => {
    setCurrentModeIndex((prevIndex) =>
      prevIndex < modeData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <Box
      bg="linear-gradient(to bottom, #001a33, #003366)"
      minH="100vh"
      p={4}
      color="white"
    >
      <VStack spacing={6} align="stretch">
        <HStack justify="center" position="relative">
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={handlePrevious}
            position="absolute"
            left={0}
            aria-label="Previous mode"
          />
          <Image
            src="/src/assets/Bitcoin_3D.png" // Ensure this path is correct
            alt="Bitcoin"
            boxSize="100px"
          />
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={handleNext}
            position="absolute"
            right={0}
            aria-label="Next mode"
          />
        </HStack>

        <ModeContent mode={modeData[currentModeIndex]} />
      </VStack>
    </Box>
  );
};

export default ApeModeScreen;
