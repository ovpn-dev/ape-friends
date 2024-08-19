import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Circle,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import { MdHome, MdGroup, MdAssignment } from "react-icons/md";
import { GiUpgrade, GiPsychicWaves } from "react-icons/gi";

// Placeholder components for different pages
const Home: React.FC = () => <Text>Home Page Content</Text>;
const Upgrade: React.FC = () => <Text>Upgrade Page Content</Text>;
const Friends: React.FC = () => <Text>Friends Page Content</Text>;
const Tasks: React.FC = () => <Text>Tasks Page Content</Text>;
const Airdrop: React.FC = () => <Text>Airdrop Page Content</Text>;

type MenuItem = {
  icon: React.ElementType;
  label: string;
  key: string;
  component: React.FC;
};

const GameInterface: React.FC = () => {
  const [balance, setBalance] = useState<number>(350590);
  const [energy, setEnergy] = useState<number>(1000);
  const [activePage, setActivePage] = useState<string>("home");

  const handleTap = () => {
    setBalance((prev) => prev + 1);
    setEnergy((prev) => Math.max(0, prev - 1));
  };

  const menuItems: MenuItem[] = [
    { icon: MdHome, label: "HOME", key: "home", component: Home },
    { icon: GiUpgrade, label: "UPGRADE", key: "upgrade", component: Upgrade },
    { icon: MdGroup, label: "FRIENDS", key: "friends", component: Friends },
    { icon: MdAssignment, label: "TASKS", key: "tasks", component: Tasks },
    {
      icon: GiPsychicWaves,
      label: "AIRDROP",
      key: "airdrop",
      component: Airdrop,
    },
  ];

  const renderContent = () => {
    const ActiveComponent =
      menuItems.find((item) => item.key === activePage)?.component || Home;
    return <ActiveComponent />;
  };

  return (
    <Box
      bg="gray.900"
      h="100vh"
      color="white"
      display="flex"
      flexDirection="column"
    >
      <VStack spacing={4} align="stretch" p={4} flex={1}>
        <VStack justify="space-between">
          <HStack>
            {/* <Icon as={FaBitcoin} color="orange.400" boxSize={6} /> */}
            <Image
              src="./Bitcoin_3D.png" // Ensure this path is correct
              alt="Bitcoin"
              boxSize="35px"
              alignSelf="center"
            />
            <Text fontSize="30px" fontWeight={400}>
              {balance.toLocaleString()}
            </Text>
          </HStack>
          <HStack>
            <Button
              colorScheme="yellow"
              fontWeight={400}
              rounded={"3xl"}
              size="lg"
              onClick={handleTap}
            >
              <VStack p={5}>
                <Text fontSize={"8px"}>EARN PER TAP</Text>
                <Flex align={"center"}>
                  <Image
                    src="./Bitcoin_3D.png" // Ensure this path is correct
                    alt="Bitcoin"
                    boxSize="20px"
                  />
                  +1
                </Flex>
              </VStack>
            </Button>
            <Button
              size="lg"
              colorScheme="yellow"
              variant="outline"
              fontSize={"8px"}
              rounded={"3xl"}
            >
              <VStack p={5}>
                <Text fontSize={"8px"}> ENERGY</Text>
                <Flex align={"center"}>
                  <Image
                    src="./Bitcoin_3D.png" // Ensure this path is correct
                    alt="Bitcoin"
                    boxSize="20px"
                  />
                  {energy}/{1000}
                </Flex>
              </VStack>
            </Button>
          </HStack>
        </VStack>

        {activePage === "home" && (
          <>
            <Text textAlign="center" fontWeight="bold">
              King Kong Mode
            </Text>
            <Flex justify="center" align="center" flex={1}>
              <Circle
                size="200px"
                bg="cyan.400"
                as="button"
                onClick={handleTap}
                _hover={{ bg: "cyan.300" }}
                _active={{ bg: "cyan.500" }}
              />
            </Flex>
          </>
        )}

        {renderContent()}

        <Button colorScheme="yellow">UPGRADE MODE</Button>
      </VStack>

      <HStack justify="space-around" p={2} bg="gray.800" as="nav">
        {menuItems.map(({ icon, label, key }) => (
          <VStack key={key} spacing={1}>
            <Circle
              size="40px"
              bg={activePage === key ? "yellow.400" : "gray.700"}
              as="button"
              onClick={() => setActivePage(key)}
            >
              <Icon as={icon} boxSize={5} />
            </Circle>
            <Text fontSize="xs">{label}</Text>
          </VStack>
        ))}
      </HStack>
    </Box>
  );
};

export default GameInterface;
