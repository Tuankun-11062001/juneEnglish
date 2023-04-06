import {
  Box,
  Button,
  Container,
  Flex,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiHomeAlt2, BiBrain, BiTask } from "react-icons/bi";
import { MdOutlineLyrics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import "../../../scss/header.scss";
import Setting from "../setting/Setting";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../reduxSlice/settingSlices";
import { useLayoutEffect } from "react";

export default function Header() {
  const settingStore = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  console.log(settingStore);
  const {
    isOpen: isOpenSetting,
    onOpen: onOpenSetting,
    onClose: onCloseSetting,
  } = useDisclosure();

  useLayoutEffect(() => {
    const dark = document.querySelector(".chakra-ui-dark");
    if (dark) {
      dispatch(
        changeMode({
          ...settingStore,
          darkTheme: true,
        })
      );
    }
  }, []);

  return (
    <Container
      maxW="full"
      h="full"
      p="0"
      backgroundAttachment="fixed"
      background={`url('${settingStore.theme}')`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
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

        <Tooltip label="Manager task">
          <NavLink to="manager-task" className="header_link">
            <BiTask />
          </NavLink>
        </Tooltip>

        <Tooltip label="Lyrics song">
          <NavLink to="lyrics" className="header_link">
            <MdOutlineLyrics />
          </NavLink>
        </Tooltip>

        <Tooltip label="Practice">
          <NavLink to="practice" className="header_link">
            <BiBrain />
          </NavLink>
        </Tooltip>

        <Tooltip label="Setting">
          <Button
            variant="outline"
            fontSize="1.5rem"
            _hover={{ bg: "green.400" }}
            onClick={onOpenSetting}
          >
            <IoSettingsOutline color="white" />
          </Button>
        </Tooltip>
      </Flex>
      <Setting isOpenSetting={isOpenSetting} onCloseSetting={onCloseSetting} />
    </Container>
  );
}
