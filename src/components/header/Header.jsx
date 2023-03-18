import { Box, Button, Container, Flex, Tooltip } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiHomeAlt2, BiBrain, BiTask, BiPlusCircle } from "react-icons/bi";
import "../../scss/header.scss";

export default function Header() {
  return (
    <Container maxW="full">
      <Outlet />
      <Flex
        pos="fixed"
        bottom="3rem"
        left="50%"
        transform="translateX(-50%)"
        padding="1rem 3rem"
        bg="white"
        boxShadow="2xl"
        border="1px"
        borderColor="gray.300"
        borderRadius="1rem"
        gap="3rem"
        alignItems="center"
        bgGradient="linear(to-r,blue.300, pink.300)"
      >
        <Tooltip label="Home" aria-label="A tooltip">
          <NavLink to="/" className="header_link">
            <BiHomeAlt2 />
          </NavLink>
        </Tooltip>

        <Tooltip label="Add One">
          <NavLink to="add-task" className="header_link">
            <BiPlusCircle />
          </NavLink>
        </Tooltip>

        <Tooltip label="Manager task">
          <NavLink to="manager-task" className="header_link">
            <BiTask />
          </NavLink>
        </Tooltip>
        <Tooltip label="Practice">
          <NavLink to="practice" className="header_link">
            <BiBrain />
          </NavLink>
        </Tooltip>
      </Flex>
    </Container>
  );
}
