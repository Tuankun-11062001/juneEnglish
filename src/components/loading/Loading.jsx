import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import loadingSvg from "../../assets/cube_loading.svg";
export default function Loading() {
  const settingStore = useSelector((state) => state.settings);

  return (
    <Container
      bg={settingStore.darkTheme ? "#1a202c" : "white"}
      pos="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
    >
      <Flex justify="center" alignItems="center" h="100%" flexDir="column">
        <Img src={loadingSvg} alt="loading" />
        <Text
          mt="2rem"
          fontSize="1.3rem"
          color={settingStore.darkTheme ? "white" : "blackAlpha.400"}
        >
          Đang tải dữ liệu các bạn đợi xíu nha....
        </Text>
      </Flex>
    </Container>
  );
}
