import { Button, Container } from "@chakra-ui/react";
import React from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

export default function Controls({ next, prev }) {
  return (
    <Container className="slider_setting_button">
      <Button
        onClick={prev}
        borderRadius="full"
        paddingBlock="1.1rem"
        size="sm"
        colorScheme="green"
      >
        <BsFillCaretLeftFill />
      </Button>
      <Button
        onClick={next}
        borderRadius="full"
        size="sm"
        colorScheme="green"
        paddingBlock="1.1rem"
      >
        <BsFillCaretRightFill />
      </Button>
    </Container>
  );
}
