import React from "react";
import {
  Container,
  InputGroup,
  Input,
  Flex,
  Box,
  Text,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import CardTask from "../../components/card/CardTask";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "../../scss/common.scss";

const pageMotion = {
  init: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  const dataTags = useSelector((state) => state.tags.data);

  return (
    <Container
      maxW="80%"
      as={motion.div}
      initial={pageMotion.init}
      animate={pageMotion.open}
      h="200vh"
    >
      <Box pt="4rem">
        <InputGroup
          pos="relative"
          left="50%"
          transform="translateX(-50%)"
          w="50%"
          borderRadius="1rem"
          borderColor="gray.400"
        >
          <InputLeftElement children={<BsSearch color="gray" />} />
          <Input type="text" placeholder="Search here..." fontSize="1.2rem" />
        </InputGroup>
      </Box>
      <Flex
        // marginInline="-2rem"
        marginTop="5rem"
        wrap="wrap"
        paddingBottom="7rem"
      >
        {dataTags?.map((item, index) => (
          <CardTask key={index} type="active" data={item} />
        ))}
      </Flex>
    </Container>
  );
}
