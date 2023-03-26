import { Box } from "@chakra-ui/react";
import React from "react";

export default function Tag({ name }) {
  // tag css
  const styleImportant = {
    bg: "red.400",
  };
  const styleEasy = {
    bg: "green.400",
  };
  const styleMedium = {
    bg: "blue.400",
  };
  const styleIgnore = {
    bg: "yellow.400",
  };
  return (
    <Box
      cursor="pointer"
      sx={
        name === "Important"
          ? styleImportant
          : name === "Easy"
          ? styleEasy
          : name === "Medium"
          ? styleMedium
          : styleIgnore
      }
      w="fit-content"
      p="0.5rem 1rem"
      borderRadius="0.5rem"
      color="white"
      fontWeight="medium"
      boxShadow="xl"
    >
      {name}
    </Box>
  );
}
