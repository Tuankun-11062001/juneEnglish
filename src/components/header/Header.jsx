import { Button, Flex, Spacer, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import HeaderDrawer from "../header_drawer/HeaderDrawer";

export default function Header() {
  //   const {
  //     isOpen: isOpenDrawer,
  //     onClose: onCloseDrawer,
  //     onOpen: onOpenDrawer,
  //   } = useDisclosure();

  const { isOpen = false, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex bg="blue.600" padding="1rem" alignItems="center" color="white">
        <Text fontSize="1.5rem" fontWeight="500">
          June'English
        </Text>
        <Spacer />
        <Button
          variant="solid"
          border="none"
          bg="transparent"
          onClick={onOpen}
          _hover={{ bg: "blue.200", color: "white" }}
        >
          <BiMenuAltRight
            style={{ width: "2.3rem", height: "2.3rem", color: "white" }}
          />
        </Button>
      </Flex>
      <HeaderDrawer open={isOpen} close={onClose} />
      <Outlet />
    </>
  );
}
