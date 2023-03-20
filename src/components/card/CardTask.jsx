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
} from "@chakra-ui/react";

export default function CardTask() {
  return (
    <Card
      w={{
        base: "full",
        md: "calc(50% - 2rem)",
        lg: "calc(33.33% - 2rem)",
        xl: "calc(25% - 2rem)",
      }}
      margin="1rem"
    >
      <CardHeader>
        <Heading size="md">Hello (n) /heˈləʊ/ : Xin chao</Heading>
      </CardHeader>
      <CardBody>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Exam
          </Heading>
          <Text pt="2" fontSize="sm">
            Hello June!
          </Text>
          <Text pt="2" fontSize="sm">
            dich: Xin chao June!
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
}
