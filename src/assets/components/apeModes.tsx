import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  Heading,
  HStack,
  Button,
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
  image: string; // Add the image property here
}

// Mode data
const modeData: Mode[] = [
  {
    title: "Spider Monkey",
    version: "Level 1",
    overview:
      "Fast and clever, Spider Monkey is the go-to expert for fixing problems quickly.",
    process: [
      "He swings from company to company, helping businesses get back on track with his sharp thinking and quick solutions. ",
      "Always on the move, he's the guy you call when things get tricky.",
    ],
    pros: [
      "Fast decision-making and execution.",
      "Encourages active participation from all members.",
    ],
    cons: [
      "Potential for impulsive decisions without thorough consultation.",
      "Risk of misalignment with the group's overall investment strategy.",
    ],
    image: "./1SpiderMonkeyAvatar.png",
  },
  {
    title: "Chimpanzee",
    version: "Level 2",
    overview:
      "Known for his brainpower, Chimpanzee is the master of making deals. ",
    process: [
      "He's the one who smooth-talks his way through meetings, ",
      "getting the best deals for his company while keeping everyone calm and happy.",
      "His smart strategies make him a valuable asset in any negotiation.",
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
    image: "./2ChimpAvatar.png",
  },
  {
    title: "Baboon",
    version: "Level 3",
    overview:
      "Baboon charges into businesses, taking over and cutting out what doesn't work.",
    process: [
      "He's tough and doesn't hold back when it comes to making changes.",
      "In the corporate world,",
    ],
    pros: [
      "Baboon is the guy who gets things done,",
      "even if it means breaking a few rules.",
    ],
    cons: [
      "May slow down the decision-making process due to the need for agreement.",
      "Risk of deadlock if contributors have differing opinions.",
    ],
    image: "./3BaboonAvatar.png",
  },
  {
    title: "Gorilla",
    version: "Level 4",
    overview: "Strong and steady, Gorilla keeps everyone in line.",
    process: [
      "He makes sure things run smoothly and that people follow the rules.",
    ],
    pros: [
      "When things get out of control,",
      "Gorilla steps in to bring order and make sure the company stays on course.",
    ],
    cons: [
      "Can lead to significant delays in decision-making, especially in larger groups.",
      "Risk of inaction if there are disagreements, potentially missing out on market opportunities.",
    ],
    image: "./4GorillaAvatar.png",
  },
  {
    title: "King Kong",
    version: "Level 5",
    overview: "The biggest and strongest of them all,",
    process: ["King Kong is the ultimate CEO."],
    pros: [
      "He built his company from nothing and now rules over an empire.",
      "When King Kong makes a decision, everyone listens.",
    ],
    cons: [
      "His power is unmatched",
      ", and he's the king of the corporate world.",
    ],
    image: "./5KingKongA.png",
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

  const currentMode = modeData[currentModeIndex];
  return (
    <Box
      bg="linear-gradient(to bottom, #001a33, #003366)"
      p={4}
      color="white"
      overflow={"scroll"}
    >
      <VStack spacing={6} align="stretch">
        <HStack justify="center" position="relative">
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={handlePrevious}
            position="absolute"
            left={0}
            aria-label="Previous mode"
            variant={"simple"}
          />
          <Image
            src={currentMode.image} // Use the image from the current mode
            alt={currentMode.title}
            boxSize={"150px"}
          />
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={handleNext}
            position="absolute"
            right={0}
            aria-label="Next mode"
            variant={"simple"}
          />
        </HStack>

        <ModeContent mode={modeData[currentModeIndex]} />
        <Button colorScheme="yellow" rounded={"3xl"}>
          PURCHASE
        </Button>
      </VStack>
    </Box>
  );
};

export default ApeModeScreen;
