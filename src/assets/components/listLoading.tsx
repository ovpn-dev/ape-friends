import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Progress,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";

// Define the props interface
interface ApeWithFriendsListProps {
  onLoadingComplete: () => void;
}

const ApeWithFriendsLoading: React.FC<ApeWithFriendsListProps> = ({
  onLoadingComplete,
}) => {
  const [listData] = useState<string[]>([
    "Pre-launch",
    "Referrals",
    "Gift codes",
    "Earn tasks",
    "Daily Rewards",
    "Basic Game",
    "Splitting & pool technology",
    "Rank ratings",
    "PvP Battles",
    "Air Drop - Dec 5, 2024",
    "Web Game",
    "Listing on Exchanges - Jan 3, 2025",
  ]);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        const newProgress = oldProgress + 10;
        return Math.min(newProgress, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [onLoadingComplete]);

  return (
    <VStack
      minH="100vh"
      p={4}
      bg="linear-gradient(to bottom, #001a33, #0D1B2A)"
      color="white"
    >
      {" "}
      <VStack align="start" justify="space-around" spacing={6}>
        <Box mt={10}>
          <RadioGroup>
            <VStack align="start" spacing={4}>
              {listData.map((item, index) => (
                <Radio
                  key={index}
                  value={item}
                  fontWeight={500}
                  colorScheme="yellow"
                >
                  {item}
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        </Box>
      </VStack>{" "}
      <Box width="80%" maxWidth="300px" p={5}>
        <Text color="white">Loading... {progress}%</Text>
        <Progress
          size="sm"
          colorScheme="cyan"
          isIndeterminate
          bg="red.500"
          value={progress}
        />
      </Box>
    </VStack>
  );
};

export default ApeWithFriendsLoading;
