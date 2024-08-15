import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Progress,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";

const ApeWithFriendsList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <VStack
      align="start"
      justify="space-between"
      minH="100vh"
      p={4}
      bg="linear-gradient(to bottom, #001a33, #0D1B2A)"
      color="white"
      spacing={6}
    >
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
      {isLoading ? (
        <Box w="100%">
          <Text mb={2}>Loading...</Text>
          <Progress isIndeterminate colorScheme="yellow" />
        </Box>
      ) : (
        <Text>Loaded successfully!</Text>
      )}
    </VStack>
  );
};

export default ApeWithFriendsList;
