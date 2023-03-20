import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";

export default function AddTask() {
  const { quill, quillRef } = useQuill();

  const [dataTask, setDataTask] = useState({
    header: {
      word: "",
      ipa: "",
      type: "",
      translate: "",
      example: "",
      translateExample: "",
    },
    example: "",
  });

  // setdata task

  const onChangeDataTask = (e) => {
    const { name, value } = e.target;
    setDataTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // quill
  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        // console.log(quill.getText()); // Get text only
        // console.log(quill.getContents()); // Get delta contents
        setDataTask((prev) => ({
          ...prev,
          example: quill.root.innerHTML,
        })); // Get innerHTML using quill
        // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  // handle submit add
  const onSubmitAddTask = () => {
    console.log(dataTask);
  };

  return (
    <Container maxW="full" mt="2rem" pb="10rem">
      <Heading fontSize="1.3rem">Add one Task</Heading>
      <Divider mt="1rem" />
      <Flex w="inherit" mt="2rem" flexDir="column" gap="1rem">
        <InputGroup flexDir="column" gap="1rem">
          <Text>Word or pharse</Text>
          <Input
            placeholder="Ex: Hello there!"
            name="word"
            value={dataTask.header.word}
            onChange={onChangeDataTask}
          />
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>IPA</Text>
          <Input
            placeholder="Ex: Hello there!"
            name="ipa"
            value={dataTask.header.ipa}
            onChange={onChangeDataTask}
          />
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>Type</Text>
          <Select
            placeholder="Select option"
            name="type"
            value={dataTask.header.type}
            onChange={onChangeDataTask}
          >
            <option value="n">Noun</option>
            <option value="ajb">Ajb</option>
            <option value="v">Verb</option>
            <option value="p">Pharse</option>
          </Select>
        </InputGroup>
        <InputGroup flexDir="column" gap="1rem">
          <Text>Translate</Text>
          <Input
            placeholder="Ex: Xin chao dang do!"
            name="translate"
            value={dataTask.header.translate}
            onChange={onChangeDataTask}
          />
        </InputGroup>
        <Divider m="1rem" />
        <InputGroup flexDir="column" gap="1rem">
          <Text>Example</Text>
          <Input
            placeholder="Ex: Hello there!"
            name="example"
            value={dataTask.header.example}
            onChange={onChangeDataTask}
          />
          <Text>Translate examble</Text>
          <Input
            placeholder="Ex: Xin chao dang do!"
            name="translateExample"
            value={dataTask.header.translateExample}
            onChange={onChangeDataTask}
          />
        </InputGroup>
        <Divider m="1rem" />
        <Box ref={quillRef}></Box>
        <Button colorScheme="green" onClick={onSubmitAddTask}>
          ADD
        </Button>
      </Flex>
    </Container>
  );
}
