import React, { useState } from "react";
import { Box, Button, Text, VStack, Center, Flex } from "@chakra-ui/react";

const SpinnerWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinsLeft, setSpinsLeft] = useState(3);

  const segments = [
    { color: "red.500", number: 1 },
    { color: "green.500", number: 2 },
    { color: "yellow.500", number: 3 },
    { color: "blue.500", number: 4 },
    { color: "orange.500", number: 5 },
    { color: "purple.500", number: 6 },
    { color: "pink.500", number: 7 },
    { color: "cyan.500", number: 8 },
    { color: "teal.500", number: 9 },
    { color: "gray.500", number: 10 },
    { color: "yellow.300", number: 11 },
    { color: "red.300", number: 12 },
  ];

  const spinWheel = () => {
    if (spinsLeft > 0) {
      setIsSpinning(true);
      const newRotation = rotation + Math.floor(Math.random() * 360) + 720;
      setRotation(newRotation);
      setSpinsLeft(spinsLeft - 1);

      setTimeout(() => {
        setIsSpinning(false);
        // Here you would determine the winning segment based on the final rotation
      }, 3000);
    }
  };

  return (
    <VStack spacing={8} align="center">
      <Text color="white" fontSize="xl">
        1 spin left
      </Text>
      <Box position="relative" w="300px" h="300px">
        <Box
          as="svg"
          viewBox="0 0 100 100"
          w="100%"
          h="100%"
          transform={`rotate(${rotation}deg)`}
          transition="transform 3s cubic-bezier(0.25, 0.1, 0.25, 1)"
        >
          {segments.map((segment, index) => (
            <g key={index} transform={`rotate(${index * 30} 50 50)`}>
              <path
                d="M50 50 L50 5 A45 45 0 0 1 95 50 Z"
                fill={segment.color}
              />
              <text
                x="75"
                y="25"
                fontSize="8"
                fill="white"
                textAnchor="middle"
                transform="rotate(15 50 50)"
              >
                {segment.number}
              </text>
            </g>
          ))}
          <circle cx="50" cy="50" r="20" fill="teal.500" />
          <text
            x="50"
            y="50"
            fontSize="6"
            fill="white"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            TON SPINNER
          </text>
        </Box>
        <Box
          position="absolute"
          top="-10px"
          left="50%"
          transform="translateX(-50%)"
          width="0"
          height="0"
          borderLeft="10px solid transparent"
          borderRight="10px solid transparent"
          borderTop="20px solid red"
        />
      </Box>
      <Flex w="100%" justify="space-between" px={4}>
        <Button colorScheme="red" onClick={() => {}}>
          Reset
        </Button>
        <Button
          colorScheme="teal"
          onClick={spinWheel}
          isDisabled={isSpinning || spinsLeft === 0}
        >
          {isSpinning ? "Spinning..." : "Spin"}
        </Button>
      </Flex>
    </VStack>
  );
};

export default SpinnerWheel;
