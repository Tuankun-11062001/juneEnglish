import React from "react";
import {
  Container,
  InputGroup,
  Input,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import CardTask from "../../components/card/CardTask";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

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
  console.log(dataTags);
  return (
    <Container
      maxW="full"
      as={motion.div}
      initial={pageMotion.init}
      animate={pageMotion.open}
    >
      <InputGroup
        pos="relative"
        left="50%"
        transform="translateX(-50%)"
        display="flex"
        justify="center"
        alignItems="center"
        w="50%"
        mt="2rem"
        border="1px"
        borderRadius="1rem"
        paddingInline="1rem"
        borderColor="gray.300"
      >
        <BsSearch />
        <Input
          type="text"
          placeholder="Search here..."
          border="unset"
          fontSize="1.2rem"
        />
      </InputGroup>

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
