import React from "react";
import {
  Box,
  VStack,
  Image,
  Text,
  Button,
  SimpleGrid,
  Collapse,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

// Define the type for RewardButton props
interface RewardButtonProps {
  label: string;
  amount: string;
  iconSrc: string;
  onClick: () => void;
}

const RewardButton: React.FC<RewardButtonProps> = ({
  label,
  amount,
  iconSrc,
  onClick,
}) => (
  <Button
    onClick={onClick}
    h={"auto"}
    width="100%"
    justifyContent="space-between"
    bg="blue.800"
    color="white"
    _hover={{ bg: "blue.700" }}
  >
    <HStack>
      {" "}
      <Image src={iconSrc} alt={label} boxSize="30px" />
      <VStack align={"start"} p={2}>
        <Text>{label}</Text>
        <HStack>
          <Image src="/src/assets/Bitcoin_3D.png" alt="Bitcoin" h={5} w={5} />{" "}
          <Text color="yellow" fontSize="10px">
            {amount}
          </Text>
        </HStack>
      </VStack>
    </HStack>

    <ChevronRightIcon />
  </Button>
);

const DailyRewardsComponent: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <Box
      bg="linear-gradient(to bottom, #0D1B2A, #2a4365)"
      minHeight="100vh"
      p={4}
    >
      <VStack spacing={4} align="stretch">
        <Image src="/src/assets/Bitcoin_3D.png" alt="Bitcoin" mx="auto" />
        <Text
          color="yellow.400"
          fontSize="2xl"
          fontWeight={400}
          textAlign="center"
        >
          Earn Daily Rewards
        </Text>

        <RewardButton
          label="Daily Reward"
          amount="+100,000"
          iconSrc="/src/assets/icons8-friends-96.png"
          onClick={onToggle}
        />
        <Collapse in={isOpen} animateOpacity>
          <SimpleGrid columns={6} spacing={3} mb={4}>
            {days.map((day) => (
              <Box
                key={day}
                as="button"
                border="1px solid #DACC3E" // Border color
                borderRadius={"lg"}
                backgroundColor="transparent" // Make background transparent
                _hover={{
                  backgroundColor: "#DACC3E", // Yellow color on hover
                  color: "white", // Text color on hover for contrast
                }}
                _active={{
                  backgroundColor: "#DACC3E", // Yellow color when the card is pressed
                  color: "white", // Text color when the card is pressed
                }}
                _focus={{
                  boxShadow: "none", // Remove box shadow on focus if you want a cleaner look
                  backgroundColor: "#DACC3E", // Yellow color on focus
                  color: "white", // Text color on focus
                }}
                color={"yellow"}
                p={2}
                fontSize="8px"
              >
                DAY {day}
                <HStack color="white" justify="space-around">
                  <Image
                    src="/src/assets/Bitcoin_3D.png"
                    alt="Bitcoin"
                    h={5}
                    w={5}
                  />
                  <Text fontSize="8px">500</Text>
                </HStack>
              </Box>
            ))}
          </SimpleGrid>
          <Button colorScheme="yellow" width="100%">
            CLAIM REWARD
          </Button>
        </Collapse>

        <RewardButton
          label="Daily Combo"
          amount="+100,000"
          iconSrc="/src/assets/icons8-telegram.png"
          onClick={() => {}}
        />
        <RewardButton
          label="Subscribe to Tik Tok"
          amount="+100,000"
          iconSrc="/src/assets/icons8-tiktok.png"
          onClick={() => {}}
        />
        <RewardButton
          label="Subscribe to Discord"
          amount="+100,000"
          iconSrc="/src/assets/icons8-discord.png"
          onClick={() => {}}
        />
      </VStack>
    </Box>
  );
};

export default DailyRewardsComponent;
