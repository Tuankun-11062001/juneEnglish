import { Container } from "@chakra-ui/react";
import React from "react";
import FormTask from "../../components/form/FormTask";

export default function AddTask() {
  return (
    <Container maxW="70%">
      <FormTask />
    </Container>
  );
}
