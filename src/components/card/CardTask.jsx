import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  Heading,
  StackDivider,
  Box,
  Text,
  CardFooter,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

export default function CardTask({ type, openEdit, data }) {
  const navigate = useNavigate();

  const onChangePageDetail = () => {
    type === "active" && navigate("detail-task/1");
    openEdit();
  };

  const typeColor = {
    important: "red.400",
    easy: "green.400",
    medium: "blue.400",
    ignore: "yellow.400",
  };

  // css type
  const activeStyle = {
    base: "full",
    md: "calc(50% - 2rem)",
    lg: "calc(33.33% - 2rem)",
    xl: "calc(25% - 2rem)",
  };
  const editStyle = {
    base: "full",
    md: "calc(50% - 2rem)",
    lg: "calc(33.33% - 2rem)",
    xl: "calc(33.33% - 2rem)",
  };

  // trash button

  const trashButton = (e) => {
    e.stopPropagation();

    console.log("trash");
  };

  return (
    <Card
      onClick={onChangePageDetail}
      w={type === "active" ? activeStyle : editStyle}
      margin="1rem"
      borderWidth="thin"
      borderColor={
        data.header.level === "important"
          ? typeColor.important
          : data.header.level === "easy"
          ? typeColor.easy
          : data.header.level === "medium"
          ? typeColor.medium
          : typeColor.ignore
      }
    >
      <CardHeader>
        <Heading size="md">{`${data.header.word} (${data.header.type}) ${data.header.ipa} : ${data.header.translate}`}</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Exam
          </Heading>
          <Text pt="2" fontSize="sm">
            {data.header.example}
          </Text>
          <Text pt="2" fontSize="sm">
            dich: {data.header.translateExample}
          </Text>
        </Box>
      </CardBody>
      {type !== "active" && (
        <CardFooter>
          <Divider />
          <Button
            colorScheme="red"
            w="max-content"
            display="flex"
            alignItems="center"
            gap="0.5rem"
            p="1rem"
            onClick={trashButton}
          >
            <Text>
              <BsTrash width="1rem" height="1rem" mr="2rem" />
            </Text>
            delete
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
