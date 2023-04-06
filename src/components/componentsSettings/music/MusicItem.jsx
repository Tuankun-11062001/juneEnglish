import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function MusicItem({ item, currentSong }) {
  return (
    <Flex
      maxW="full"
      bg={currentSong === item.name ? "orange.300" : "gray.300"}
      p="0.5rem"
      justify="space-between"
      alignItems="center"
      borderRadius="0.5rem"
    >
      <Text color={currentSong === item.name ? "white" : "#222"}>
        {item.name}
      </Text>
      {currentSong === item.name ? (
        <Button colorScheme="gray">Again</Button>
      ) : (
        <Button colorScheme="gray">Play</Button>
      )}
    </Flex>
  );
}
