import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { TbBrain } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import "../../scss/header.scss";

export default function HeaderDrawer({ open, close }) {
  return (
    <Drawer isOpen={open} placement="right" onClose={close}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
          <Flex flexDir="column" gap="1rem">
            <NavLink to="/" className="header_item">
              <Flex
                alignItems="center"
                gap="1rem"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <GoHome style={{ fontSize: "1.5rem" }} />
                <Text fontSize="1.4rem" fontWeight="400">
                  Home
                </Text>
              </Flex>
              <Divider mt="0.5rem" />
            </NavLink>

            <NavLink to="add-task" className="header_item">
              <Flex
                alignItems="center"
                gap="1rem"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <AiOutlinePlusCircle style={{ fontSize: "1.5rem" }} />
                <Text fontSize="1.4rem" fontWeight="400">
                  Add Task
                </Text>
              </Flex>
              <Divider mt="0.5rem" />
            </NavLink>

            <NavLink to="manager-task" className="header_item">
              <Flex
                alignItems="center"
                gap="1rem"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <BiTask style={{ fontSize: "1.5rem" }} />
                <Text fontSize="1.4rem" fontWeight="400">
                  Manager
                </Text>
              </Flex>
              <Divider mt="0.5rem" />
            </NavLink>

            <NavLink to="practice" className="header_item">
              <Flex
                alignItems="center"
                gap="1rem"
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <TbBrain style={{ fontSize: "1.5rem" }} />
                <Text fontSize="1.4rem" fontWeight="400">
                  Practice
                </Text>
              </Flex>
              <Divider mt="0.5rem" />
            </NavLink>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
