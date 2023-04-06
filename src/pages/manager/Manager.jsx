import {
  Box,
  Button,
  Container,
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
import { useSelector } from "react-redux";

import { BsSearch } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";

import CardTask from "../../components/card/CardTask";
import Tag from "../../components/tag/Tag";
import EditTaskDrawer from "../../components/drawer/EditTaskDrawer";
import AddTaskDrawer from "../../components/drawer/AddTaskDrawer";

import "../../scss/common.scss";

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

  // open drawer

  const {
    isOpen: isOpenDawerEdit,
    onClose: onCloseDrawerEdit,
    onOpen: onOpenDrawerEdit,
  } = useDisclosure();
  const {
    isOpen: isOpenDawerAdd,
    onClose: onCloseDrawerAdd,
    onOpen: onOpenDrawerAdd,
  } = useDisclosure();

  // filter tag

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

  // close filter

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

  // filter search

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

  // pass data to edit task
  const [dataEditTask, setDataEditTask] = useState({});

  const handleOpenEditTask = (data) => {
    setDataEditTask(data);
    onOpenDrawerEdit();
  };

  return (
    <Container maxW="70%" pb="6rem">
      <Flex gap="2rem">
        <Container flex="1" marginBlock="2rem" maxW="full">
          {/* input search */}

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
              <Button
                colorScheme="green"
                h="1.75rem"
                size="sm"
                onClick={handleSearch}
              >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>

          {/* banner */}

          <Image
            src="https://images.unsplash.com/photo-1504507926084-34cf0b939964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width="full"
            height="20rem"
            objectFit="cover"
            borderRadius="2rem"
            boxShadow="xl"
          />

          {/* tag */}

          <Flex maxW="full" mt="2rem" gap="1rem">
            {tags?.map((item, index) => (
              <Tag key={index} name={item} getInfo={filterTag} />
            ))}
            <Button
              marginLeft="auto"
              colorScheme="facebook"
              onClick={onOpenDrawerAdd}
            >
              ADD ONE
            </Button>
          </Flex>

          {/* filter task */}

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

          {/* List Task */}
          <Container
            maxW="full"
            mt="4rem"
            display="flex"
            marginInline="-2rem"
            flexWrap="wrap"
          >
            {dataTags?.map((item, index) => (
              <CardTask
                data={item}
                key={index}
                openEdit={() => handleOpenEditTask(item)}
              />
            ))}
          </Container>
        </Container>

        {/* drawer add and edit task */}

        <AddTaskDrawer open={isOpenDawerAdd} close={onCloseDrawerAdd} />
        <EditTaskDrawer
          open={isOpenDawerEdit}
          close={onCloseDrawerEdit}
          data={dataEditTask}
        />
      </Flex>
    </Container>
  );
}
