import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  HStack,
  Image,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";

const InviteFriendsComponent: React.FC = () => {
  const friends = [
    { name: "Bryan Destiny", amount: "40,000,000" },
    { name: "Bryan Destiny", amount: "40,000,000" },
    { name: "Bryan Destiny", amount: "40,000,000" },
    { name: "Bryan Destiny", amount: "40,000,000" },
  ];

  return (
    <Box
      bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
      minHeight="100vh"
      p={4}
    >
      <VStack spacing={4} align="stretch">
        <Text
          color="yellow.400"
          fontSize="2xl"
          fontWeight="bold"
          textAlign="center"
        >
          Invite Friends!
        </Text>
        <Text color="gray.300" textAlign="center">
          You and your friend will receive an invitation bonus
        </Text>

        {[1, 2].map((i) => (
          <Button
            key={i}
            bg="blue.800"
            color="white"
            justifyContent="flex-start"
            height="60px"
            _hover={{ bg: "blue.700" }}
          >
            <HStack spacing={3}>
              <Image src="./icons8-friends-96.png" alt="Invite icon" />
              <VStack align={"start"}>
                {" "}
                <Text>Invite a friend</Text>
                <HStack>
                  <Image src="./Bitcoin_3D.png" alt="Bitcoin" h={5} w={5} />
                  <Text color="orange.300" fontSize="10px">
                    +100,000 for you and your friend
                  </Text>
                </HStack>
              </VStack>
            </HStack>
          </Button>
        ))}

        <Text
          color="yellow.400"
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
        >
          More Bonuses
        </Text>

        <Flex justify="space-between" align="center">
          <Text color="gray.300">List of your Friends</Text>
          <IconButton
            icon={<RepeatIcon />}
            variant="ghost"
            color="gray.300"
            aria-label="Refresh"
          />
        </Flex>

        {friends.map((friend, index) => (
          <Button
            key={index}
            bg="blue.800"
            color="white"
            justifyContent="flex-start"
            height="60px"
            _hover={{ bg: "blue.700" }}
          >
            <HStack spacing={3}>
              <Image
                src="./icons8-administrator-male-48.png"
                alt="Friend icon"
              />
              <VStack>
                {" "}
                <Text>{friend.name}</Text>
                <Text color="gray.300" fontSize="10px">
                  {friend.amount}
                </Text>
              </VStack>
            </HStack>
          </Button>
        ))}

        <HStack spacing={2}>
          <Button
            colorScheme="yellow"
            flex={1}
            leftIcon={<Image src="./person_add_24dp.png" alt="Invite icon" />}
          >
            INVITE A FRIEND
          </Button>
          <IconButton
            icon={<Image src="./content_copy_24dp.png" alt="Copy icon" />}
            colorScheme="yellow"
            aria-label="Copy invite link"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default InviteFriendsComponent;
