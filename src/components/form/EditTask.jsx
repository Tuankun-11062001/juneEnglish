import React, { useEffect, useState, lazy } from "react";
import {
  Container,
  Box,
  Heading,
  InputGroup,
  Input,
  Text,
  Divider,
  Flex,
  Select,
  Button,
  useToast,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { addOne } from "../../reduxSlice/tagSlice";
const RichText = lazy(() => import("../richText/RichText"));

export default function EditTask({ data }) {
  const settingStore = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const toast = useToast();

  const [dataTask, setDataTask] = useState({
    header: {
      word: data.header.word,
      ipa: data.header.ipa,
      type: data.header.type,
      translate: data.header.translate,
      example: data.header.example,
      translateExample: data.header.translateExample,
      level: data.header.level,
    },
    example: data.example,
  });

  // setdata task
  const onChangeDataTask = (e) => {
    const { name, value } = e.target;
    setDataTask((prev) => ({
      ...prev,
      header: {
        ...prev.header,
        [name]: value,
      },
    }));
  };

  // handle submit add
  const [error, setError] = useState("");

  const onSubmitAddTask = () => {
    const task = dataTask.header;
    if (
      task.word === "" ||
      task.type === "" ||
      task.example === "" ||
      task.ipa === "" ||
      task.level === ""
    ) {
      setError("Missing some fields");
    }

    toast({
      title: "Create successfully.",
      description: `created word ${dataTask.header.word} successfully`,
      status: "success",
      duration: 9000,
      isClosable: true,
      position: "top",
    });
    dispatch(addOne(dataTask));
    setDataTask({
      header: {
        word: "",
        ipa: "",
        type: "",
        translate: "",
        example: "",
        translateExample: "",
        level: "",
      },
      example: "",
    });
  };

  return (
    <Container
      maxW="full"
      pt="2rem"
      pb="2rem"
      bg={settingStore.darkTheme ? "#2d3748" : "white"}
      borderRadius="1rem"
      boxShadow="xl"
    >
      <Heading fontSize="1.3rem">Edit Task</Heading>
      <Divider mt="1rem" />
      <Flex w="inherit" mt="2rem" flexDir="column" gap="1rem">
        <InputGroup flexDir="column" gap="1rem">
          <Text>Word or pharse</Text>
          <Input
            placeholder="Ex: Hello there!"
            name="word"
            value={dataTask.header.word}
            onChange={(e) => onChangeDataTask(e)}
          />
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>IPA</Text>
          <Input
            placeholder="Ex: Hello there!"
            name="ipa"
            value={dataTask.header.ipa}
            onChange={(e) => onChangeDataTask(e)}
          />
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>Type</Text>
          <Select
            placeholder="Select option"
            name="type"
            value={dataTask.header.type}
            onChange={(e) => onChangeDataTask(e)}
          >
            <option value="n">Noun</option>
            <option value="ajb">Ajb</option>
            <option value="v">Verb</option>
            <option value="p">Pharse</option>
          </Select>
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>Level</Text>
          <Select
            placeholder="Select option"
            name="level"
            value={dataTask.header.level}
            onChange={(e) => onChangeDataTask(e)}
          >
            <option value="important">Important</option>
            <option value="easy">Easy</option>
            <option value="medium">Mediun</option>
            <option value="Ignore">Ignore</option>
          </Select>
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>Translate</Text>
          <Input
            placeholder="Ex: Xin chao dang do!"
            name="translate"
            value={dataTask.header.translate}
            onChange={(e) => onChangeDataTask(e)}
          />
        </InputGroup>
        <Divider m="1rem" />
        <InputGroup flexDir="column" gap="1rem">
          <Text>Example</Text>
          <Input
            placeholder="Ex: Hello there!"
            name="example"
            value={dataTask.header.example}
            onChange={(e) => onChangeDataTask(e)}
          />
          <Text>Translate examble</Text>
          <Input
            placeholder="Ex: Xin chao dang do!"
            name="translateExample"
            value={dataTask.header.translateExample}
            onChange={(e) => onChangeDataTask(e)}
          />
        </InputGroup>
        <Divider m="1rem" />
        <RichText
          dataExample={dataTask.example}
          name="example"
          change={(e) => onChangeDataTask(e)}
        />
        <Text>{error}</Text>
        <Button colorScheme="green" onClick={onSubmitAddTask}>
          ADD
        </Button>
      </Flex>
    </Container>
  );
}
