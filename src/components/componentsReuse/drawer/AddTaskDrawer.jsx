import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import AddTask from "../form/AddTask";

export default function AddTaskDrawer({ open, close }) {
  return (
    <Drawer
      size="lg"
      isOpen={open}
      placement="right"
      onClose={close}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <AddTask />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
