import React, { useState } from "react";
import {
  Box,
  VStack,
  Progress,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";

const ApeWithFriendsList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true); // Initial loading state
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
        <Text>Loading</Text>
        {isLoading && <Progress value={50} colorScheme="yellow" />}
      </Box>
    </VStack>
  );
};

export default ApeWithFriendsList;
