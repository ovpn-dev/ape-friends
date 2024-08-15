import React, { useState, ChangeEvent } from "react";
import { Box, VStack, Text, Input, Button, Flex } from "@chakra-ui/react";

// Define props types for TimeInput and MinTimeInput
interface TimeInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const TimeInput: React.FC<TimeInputProps> = ({ value, onChange, label }) => (
  <Box>
    <Text color="gray.400" fontSize="xs" mb={1}>
      {label}
    </Text>
    <Input
      value={value}
      onChange={onChange}
      bg="green.200"
      border="1px solid yellow"
      color="white"
      textAlign="center"
      fontSize="3xl"
      fontWeight={400}
      h="60px"
      variant="outline"
    />
  </Box>
);

const MinTimeInput: React.FC<TimeInputProps> = ({ value, onChange, label }) => (
  <Box>
    <Text color="gray.400" fontSize="xs" mb={1}>
      {label}
    </Text>
    <Input
      value={value}
      onChange={onChange}
      bg="white"
      border="1px solid yellow"
      color="black"
      textAlign="center"
      fontSize="3xl"
      fontWeight={400}
      h="60px"
    />
  </Box>
);

const AddNewGraphicTimerComponent: React.FC = () => {
  const [hour, setHour] = useState<string>("20");
  const [minute, setMinute] = useState<string>("00");
  const [amPm, setAmPm] = useState<"AM" | "PM">("AM");

  return (
    <Box
      bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
      minHeight="100vh"
      p={4}
    >
      <VStack spacing={6} align="stretch">
        <Text
          color="yellow.400"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
        >
          Add New Graphic
        </Text>

        <VStack spacing={4} align="stretch" fontSize="10px" fontWeight={400}>
          <Box>
            <Text color="gray.400" mb={2}>
              NOTIFICATION HEADING
            </Text>
            <Input
              placeholder="heading"
              bg="whiteAlpha.200"
              border="none"
              color="white"
            />
          </Box>

          <Box>
            <Text color="gray.400" mb={2}>
              NOTIFICATION DESCRIPTION
            </Text>
            <Input
              placeholder="description"
              bg="whiteAlpha.200"
              border="none"
              color="white"
            />
          </Box>

          <Text color="gray.400" mb={2}>
            ENTER TIME
          </Text>
          <Flex justify="space-between" align="flex-end">
            <TimeInput
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              label="Hour"
            />
            <Text color="white" fontSize="3xl" fontWeight="bold" mb={2}>
              :
            </Text>
            <MinTimeInput
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              label="Minute"
            />
            <VStack spacing={0} align="stretch" ml={4}>
              <Button
                size="sm"
                colorScheme={amPm === "AM" ? "whiteAlpha" : "yellow"}
                onClick={() => setAmPm("AM")}
              >
                AM
              </Button>
              <Button
                size="sm"
                colorScheme={amPm === "PM" ? "whiteAlpha" : "#fff"}
                onClick={() => setAmPm("PM")}
              >
                PM
              </Button>
            </VStack>
          </Flex>
        </VStack>

        <VStack spacing={4} mt={"10rem"}>
          <Button colorScheme="yellow" width="100%" rounded={"3xl"}>
            ADD NEW GRAPHIC
          </Button>
          <Button
            variant="outline"
            colorScheme="yellow"
            width="100%"
            rounded={"3xl"}
          >
            CANCEL
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default AddNewGraphicTimerComponent;
