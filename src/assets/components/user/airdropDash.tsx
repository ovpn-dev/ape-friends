import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Circle,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaBitcoin } from "react-icons/fa";

type Item = {
  name: string;
  value: number;
  level: number;
};

const DashboardScreen: React.FC = () => {
  const balance: number = 255987;
  const profitPerHour: number = 350;

  const categories: string[] = ["CRYPTO", "BUSINESS", "SPECIALS"];

  const items: Item[] = [
    { name: "KING KONG APE", value: 255987, level: 1 },
    { name: "KING KONG APE", value: 255987, level: 1 },
    { name: "KING KONG APE", value: 255987, level: 1 },
    { name: "KING KONG APE", value: 255987, level: 1 },
  ];

  return (
    <Box bg="gray.900" h="auto" color="white" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Circle size="100px" bg="cyan.400" />
          <VStack align="stretch" flex={1} ml={4}>
            <Button
              colorScheme="yellow"
              justifyContent="space-between"
              h="40px"
            >
              <Text>BALANCE</Text>
              <HStack>
                <Circle size="20px" bg="red.500" />
                <Text>{balance.toLocaleString()}K</Text>
              </HStack>
            </Button>
            <Button
              colorScheme="yellow"
              variant="outline"
              justifyContent="space-between"
              h="40px"
            >
              <Text>PROFIT PER HOUR</Text>
              <HStack>
                <FaBitcoin />
                <Text>{profitPerHour}K</Text>
              </HStack>
            </Button>
          </VStack>
        </HStack>

        <HStack justify="space-between">
          {categories.map((category, index) => (
            <Button
              key={index}
              flex={1}
              colorScheme={index === 0 ? "yellow" : "teal"}
              variant={index === 0 ? "solid" : "outline"}
            >
              {category}
            </Button>
          ))}
        </HStack>

        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          {items.map((item, index) => (
            <GridItem key={index}>
              <VStack
                bg="gray.800"
                borderRadius="md"
                p={4}
                align="stretch"
                spacing={2}
              >
                <Box bg="gray.700" h="100px" borderRadius="md" />
                <Text fontWeight="bold">{item.name}</Text>
                <HStack justify="space-between">
                  <Text>LEVEL {item.level}</Text>
                  <HStack>
                    <FaBitcoin />
                    <Text>{item.value.toLocaleString()}</Text>
                  </HStack>
                </HStack>
                <Button colorScheme="yellow" size="sm">
                  <HStack>
                    <FaBitcoin />
                    <Text>{item.value.toLocaleString()}</Text>
                  </HStack>
                </Button>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default DashboardScreen;
