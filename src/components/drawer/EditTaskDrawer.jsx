import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import EditTask from "../form/EditTask";

export default function EditTaskDrawer({ open, close, data }) {
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
          <EditTask data={data} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
