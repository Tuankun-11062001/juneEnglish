import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import FormTask from "../../components/form/FormTask";
import { BsSearch } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import CardTask from "../../components/card/CardTask";
import Tag from "../../components/tag/Tag";
import { useSelector } from "react-redux";
import "../../scss/common.scss";
import { useEffect } from "react";

export default function Manager() {
  const tags = ["Important", "Easy", "Medium", "Ignore"];
  const dataTags = useSelector((state) => state.tags.data);
  const filterEl = useRef();
  const [searchText, setSearchText] = useState("");

  const [dataFilter, setDataFilter] = useState({
    active: false,
    type: "",
    data: [],
  });

  const {
    isOpen: isOpenDawerEdit,
    onClose: onCloseDrawerEdit,
    onOpen: onOpenDrawerEdit,
  } = useDisclosure();

  const filterTag = (info) => {
    const result = dataTags.filter(
      (item) => item.header.level === info.toLowerCase()
    );
    setDataFilter((prev) => ({
      ...prev,
      active: true,
      type: info,
      data: result,
    }));
  };

  const closeFilter = () => {
    const filterBox = filterEl.current;
    filterBox.classList.add("common-tag");
    filterBox.addEventListener("transitionend", () => {
      setTimeout(() => {
        setDataFilter({
          active: false,
          type: "",
          data: [],
        });
      }, 1500);
    });
  };

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const result = dataTags.filter(
      (item) =>
        item.header.word.toLowerCase() === searchText.toLowerCase() ||
        item.header.translate.toLowerCase() === searchText.toLowerCase()
    );
    setDataFilter((prev) => ({
      ...prev,
      active: true,
      data: result,
    }));
  };

  const handleSearchKeydown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Container maxW="70%" pb="6rem">
      <Flex gap="2rem">
        <Container flex="1" marginBlock="2rem" maxW="full">
          <InputGroup mb="2rem">
            <InputLeftElement children={<BsSearch />} />

            <Input
              type="text"
              placeholder="Search Word and Pharse..."
              value={searchText}
              onChange={handleChangeSearchText}
              onKeyDown={handleSearchKeydown}
            />
            <InputRightElement width="4.5rem">
              <Button colorScheme="green" onClick={handleSearch}>
                Search
              </Button>
            </InputRightElement>
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
              <Tag key={index} name={item} getInfo={filterTag} />
            ))}
          </Flex>

          {dataFilter.active && (
            <Box mt="4rem" ref={filterEl}>
              <Flex gap="2rem">
                <Text fontSize="1.6rem" fontWeight="500">
                  Query "{dataFilter.type || "Word"} "
                </Text>
                <Button colorScheme="red" onClick={closeFilter}>
                  <Text mr="1rem" fontSize="1.5rem">
                    <IoIosCloseCircleOutline />
                  </Text>
                  Close
                </Button>
              </Flex>
              <Container
                maxW="full"
                mt="1rem"
                display="flex"
                marginInline="-2rem"
                flexWrap="wrap"
              >
                {dataFilter.data?.map((item, index) => (
                  <CardTask
                    data={item}
                    key={index}
                    openEdit={onOpenDrawerEdit}
                  />
                ))}
              </Container>

              <Box
                mt="2rem"
                w="full"
                h="0.5rem"
                bg="gray.400"
                borderRadius="10"
              ></Box>
            </Box>
          )}

          <Container
            maxW="full"
            mt="4rem"
            display="flex"
            marginInline="-2rem"
            flexWrap="wrap"
          >
            {dataTags?.map((item, index) => (
              <CardTask data={item} key={index} openEdit={onOpenDrawerEdit} />
            ))}
          </Container>
        </Container>
        <Drawer
          size="lg"
          isOpen={isOpenDawerEdit}
          placement="right"
          onClose={onCloseDrawerEdit}
          // finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <FormTask />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Container>
  );
}
