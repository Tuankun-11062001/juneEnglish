import {
  Box,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import FormTask from "../../components/form/FormTask";
import { BsSearch } from "react-icons/bs";
import CardTask from "../../components/card/CardTask";
import Tag from "../../components/tag/Tag";

export default function Manager() {
  const tags = ["Important", "Easy", "Medium", "Ignore"];
  return (
    <Container maxW="80%">
      <Flex gap="2rem">
        <Container flex="1" marginBlock="2rem" maxW="full">
          <InputGroup mb="2rem">
            <InputLeftElement children={<BsSearch />} />

            <Input type="text" placeholder="Search Word and Pharse..." />
          </InputGroup>
          <Image
            src="https://images.unsplash.com/photo-1504507926084-34cf0b939964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width="full"
            height="20rem"
            objectFit="cover"
            borderRadius="2rem"
            boxShadow="xl"
          />

          <Flex maxW="full" mt="2rem" gap="1rem">
            {tags?.map((item, index) => (
              <Tag key={index} name={item} />
            ))}
          </Flex>

          <Container maxW="full" mt="4rem">
            <CardTask />
          </Container>
        </Container>
        <Container flex="1">
          <FormTask />
        </Container>
      </Flex>
    </Container>
  );
}
