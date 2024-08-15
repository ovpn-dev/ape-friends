import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Circle,
  Radio,
} from "@chakra-ui/react";

// Define the type for the timeLeft state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoonComponent: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 30,
    hours: 23,
    minutes: 57,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        } else {
          clearInterval(timer);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      bg="linear-gradient(to bottom, #001a33, #003366)"
      minH="100vh"
      p={4}
      color="white"
    >
      <VStack spacing={6} align="stretch">
        <Heading size="xl" fontWeight={400} textAlign="center">
          COMING SOON
        </Heading>

        <VStack align="start" spacing={3}>
          {[
            "Experienced blockchain pro team",
            "Experienced listing team",
            "Tier 3 exchanges listing guaranteed",
            "Tier 2 exchanges pre-approved",
            "Tier 1 exchanges negotiations",
            "Broad range of partners",
          ].map((item, index) => (
            <HStack key={index}>
              <Radio isChecked readOnly size="sm" colorScheme="yellow" />
              <Text fontSize="sm">{item}</Text>
            </HStack>
          ))}
        </VStack>

        <VStack align={"start"} spacing={2}>
          <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">
            <Text fontSize="xs">Air Drop - Dec 5, 2024</Text>
          </Box>
          <Box bg="yellow.400" color="black" px={2} py={1} borderRadius="full">
            <Text fontSize="xs">Listing on Exchanges - Jan 3, 2025</Text>
          </Box>
        </VStack>

        <HStack justify="space-around" mt={4}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <VStack key={unit} spacing={1}>
              <Circle size="50px" borderWidth={2} borderColor="yellow.400">
                <Text fontWeight="bold" fontSize="xl">
                  {value}
                </Text>
              </Circle>
              <Text fontSize="xs">
                {unit.charAt(0).toUpperCase() + unit.slice(1)}
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default ComingSoonComponent;
