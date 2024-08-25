import React, { useState, useEffect } from "react";
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
import ApeModeScreen from "./apeModes";
import EarnMoreCoinsScreen from "./earnMoreScreen";
import DashboardScreen from "./user/airdropDash";
import InviteFriendsComponent from "./inviteFriends";

// Define the types for components
const Home: React.FC = () => <Text></Text>;
const Upgrade: React.FC = () => <ApeModeScreen />;
const Friends: React.FC = () => <InviteFriendsComponent />;
const Tasks: React.FC = () => <EarnMoreCoinsScreen />;
const Airdrop: React.FC = () => <DashboardScreen />;

type MenuItem = {
  icon: React.ElementType;
  label: string;
  key: string;
  component: React.FC;
};
const levelNames: string[] = [
  "Spider Monkey",
  "Chimpanzee",
  "Orangutan",
  "Gorilla",
  "King Kong",
];

const GameInterface: React.FC = () => {
  const [balance, setBalance] = useState<number>(35590);
  const [energy, setEnergy] = useState<number>(1000);
  const [activePage, setActivePage] = useState<string>("home");
  const [level, setLevel] = useState<number>(1);
  const [clicks, setClicks] = useState<number>(0);

  const levelImages: string[] = [
    "./1SpiderMonkeyAvatar.png",
    "./2ChimpAvatar.png",
    "./3BaboonAvatar.png",
    "./4GorillaAvatar.png",
    "./5KingKongA.png",
  ];

  useEffect(() => {
    const newLevel = Math.min(Math.floor(clicks / 1000) + 1, 5);
    if (newLevel !== level) {
      setLevel(newLevel);
      alert(
        `Congratulations! You've reached ${
          levelNames[newLevel - 1]
        } Mode (Level ${newLevel})!`
      );
    }
  }, [clicks, level]);

  const handleTap = (): void => {
    setBalance((prev) => prev + 1);
    setEnergy((prev) => Math.max(0, prev - 1));
    setClicks((prev) => prev + 1);
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

  const renderContent = (): JSX.Element => {
    const ActiveComponent =
      menuItems.find((item) => item.key === activePage)?.component || Home;
    return <ActiveComponent />;
  };

  return (
    <Box
      bg="gray.900"
      h="auto"
      minH={"100vh"}
      color="white"
      display="flex"
      flexDirection="column"
    >
      <VStack spacing={4} align="stretch" p={4} flex={1}>
        <VStack justify="space-between">
          <HStack>
            <Image
              src="./Bitcoin_3D.png"
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
                  <Image src="./Bitcoin_3D.png" alt="Bitcoin" boxSize="20px" />
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
                  <Image src="./Bitcoin_3D.png" alt="Bitcoin" boxSize="20px" />
                  {energy}/{1000}
                </Flex>
              </VStack>
            </Button>
          </HStack>
        </VStack>

        {activePage === "home" && (
          <>
            <Text textAlign="center" fontWeight="bold" color={"yellow"}>
              {levelNames[level - 1]} Mode (Level {level})
            </Text>
            <Flex justify="center" align="center" flex={1} direction="column">
              <Circle
                size="200px"
                bg="purple.700"
                as="button"
                onClick={handleTap}
                _hover={{ bg: "purple.500" }}
                _active={{ bg: "cyan.300" }}
                overflow="hidden"
                border={"10px solid"}
                borderColor={"purple.900"}
              >
                <Image
                  src={levelImages[level - 1]}
                  alt={`Level ${level}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Circle>
              <Text mt={4}>Clicks: {clicks}</Text>
              <Text>Next Level: {Math.min(level * 1000, 5000)} clicks</Text>
            </Flex>
            <Button colorScheme="yellow" rounded={"3xl"}>
              UPGRADE MODE
            </Button>
          </>
        )}

        {renderContent()}
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
