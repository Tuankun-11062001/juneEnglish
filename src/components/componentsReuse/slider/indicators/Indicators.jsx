import { Container, List, ListItem } from "@chakra-ui/react";
import React from "react";

export default function Indicators({ data, currentSlide, switchSlide }) {
  return (
    <Container>
      <List display="flex" gap="2rem">
        {data?.map((_, index) => (
          <ListItem
            w="1rem"
            h="1rem"
            borderRadius="2rem"
            onClick={() => switchSlide(index)}
            bg={currentSlide === index ? "orange" : "white"}
            cursor="pointer"
          ></ListItem>
        ))}
      </List>
    </Container>
  );
}
