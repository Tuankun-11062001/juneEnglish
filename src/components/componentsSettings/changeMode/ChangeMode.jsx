import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../../reduxSlice/settingSlices";

export default function ChangeMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.settings);

  const handleChangeMode = () => {
    toggleColorMode();
    dispatch(
      changeMode({
        ...dark,
        darkTheme: !dark.darkTheme,
      })
    );
  };
  return (
    <Button
      position="relative"
      w="fit-content"
      p="1rem"
      marginLeft="auto"
      onClick={handleChangeMode}
    >
      {colorMode === "dark" ? (
        <BsFillSunFill fontSize="1.5rem" style={{ color: "orange" }} />
      ) : (
        <BsFillMoonFill fontSize="1.5rem" style={{ color: "orange" }} />
      )}
    </Button>
  );
}
