import React from "react";
import {
  Box,
  VStack,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

const StatCard = ({ title, value, subtext, change }) => (
  <Box bg="gray.800" borderRadius="md" p={4}>
    <Flex justifyContent="space-between" alignItems="flex-start" mb={2}>
      <Text color="gray.300" fontSize="sm">
        {title}
      </Text>
      <Flex alignItems="center">
        <Text color="green.400" fontSize="sm" mr={1}>
          {change}
        </Text>
        <Icon as={ArrowUpIcon} color="green.400" w={3} h={3} />
      </Flex>
    </Flex>
    <Text color="white" fontSize="2xl" fontWeight="bold" mb={1}>
      {value}
    </Text>
    <Text color="gray.500" fontSize="xs" mb={3}>
      {subtext}
    </Text>
    <Button size="sm" colorScheme="yellow" width="100%">
      VIEW GRAPH
    </Button>
  </Box>
);

const AnalyticsComponent = () => {
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
          Analytics
        </Text>

        <SimpleGrid columns={{ base: 2, md: 2 }} spacing={4}>
          <StatCard
            title="Daily Active Users"
            value="120,590,555"
            subtext="Compared to (110,590,555 yesterday)"
            change="+2.5%"
          />
          <StatCard
            title="Session Duration"
            value="120hr 50min"
            subtext="Compared to (110hr 50min yesterday)"
            change="+2.5%"
          />
          <StatCard
            title="User Engagement"
            value="120,590,555"
            subtext="Compared to (110,590,555 yesterday)"
            change="+2.5%"
          />
          <StatCard
            title="Revenue Metrics"
            value="120hr 50min"
            subtext="Compared to (110hr 50min yesterday)"
            change="+2.5%"
          />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default AnalyticsComponent;
