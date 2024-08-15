import {
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, CloseIcon } from "@chakra-ui/icons";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  AiOutlineRobot,
  AiOutlineReload,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

export default function Nav() {
  const broGoBack = () => {
    window.history.back();
  };
  return (
    <>
      {" "}
      {/* Navbar */}
      <Flex
        w="100%"
        bg="black"
        as={"nav"}
        p={4}
        align="center"
        justify="space-between"
      >
        <HStack spacing={2}>
          <IconButton
            icon={<CloseIcon />}
            onClick={broGoBack}
            aria-label="Cancel"
            variant="unstyled"
            color="white"
            fontSize="lg"
          />
          <Text fontWeight="bold" fontSize="md" color={"white"}>
            Ape with Friends
          </Text>
        </HStack>
        <HStack spacing={3}>
          <IconButton
            icon={<ChevronDownIcon />}
            aria-label="Expand"
            variant="unstyled"
            color="white"
            fontSize="lg"
          />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<BsThreeDotsVertical />}
              aria-label="Options"
              variant="unstyled"
              color="white"
              fontSize="lg"
            />
            <MenuList>
              <MenuItem icon={<AiOutlineRobot />} as={RouterLink} to={"/"}>
                OPEN BOT
              </MenuItem>
              <MenuItem
                icon={<AiOutlineReload />}
                as={RouterLink}
                to={"/dashboard"}
              >
                RELOAD PAGE
              </MenuItem>
              <MenuItem
                icon={<AiOutlineInfoCircle />}
                as={RouterLink}
                to={"/apefriends"}
              >
                TERMS OF USE
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>{" "}
    </>
  );
}
