import React from "react";
import {
  Box,
  VStack,
  Heading,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";

// Define a type for the props of FeatureSection
interface FeatureSectionProps {
  title: string;
  features: string[];
}

// FeatureSection component with typed props
const FeatureSection: React.FC<FeatureSectionProps> = ({ title, features }) => (
  <Box mb={6}>
    <Heading size="md" mb={2}>
      {title}
    </Heading>
    <UnorderedList spacing={2}>
      {features.map((feature, index) => (
        <ListItem key={index}>{feature}</ListItem>
      ))}
    </UnorderedList>
  </Box>
);

const ApeWithFriendsFeatures: React.FC = () => {
  // Define arrays with explicit types
  const coreFeatures: string[] = [
    "Gameplay: The bot will allow users to play the Ape with Friends game, which involves training apes to earn points and rewards.",
    "Game Modes: The bot will offer different game modes, such as King Kong Mode, Full Ape Mode, Smart Ape Mode, and Chimp Mode, each with its own unique challenges and rewards.",
    "Leaderboards: The bot will display leaderboards that rank users based on their scores and progress.",
    "Rewards and Bonuses: The bot will offer rewards and bonuses for achieving certain milestones or completing specific tasks.",
    "Settings: The bot will allow users to customize their gameplay experience, such as setting notifications or adjusting game difficulty.",
  ];

  const additionalFeatures: string[] = [
    "Tutorials and Guides: The bot will provide interactive tutorials and guides to help users learn how to play the game and improve their skills.",
    "Social Sharing: The bot will allow users to share their progress and achievements on social media platforms.",
    "Daily Challenges: The bot will offer daily challenges and quests that provide additional rewards and incentives.",
  ];

  return (
    <Box maxWidth="800px" margin="0 auto" p={6}>
      <VStack spacing={6} align="stretch">
        <Heading size="xl" textAlign="center" mb={4}>
          Ape with Friends Game Bot Features
        </Heading>

        <FeatureSection title="Core Features" features={coreFeatures} />

        <Divider />

        <FeatureSection
          title="Additional Features"
          features={additionalFeatures}
        />
      </VStack>
    </Box>
  );
};

export default ApeWithFriendsFeatures;
