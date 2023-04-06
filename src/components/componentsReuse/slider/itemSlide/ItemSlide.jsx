import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export default function ItemSlide({ data, getUrl, index }) {
  const dataSetting = useSelector((state) => state.settings);
  return (
    <Box
      flex="0 0 auto"
      cursor="pointer"
      width="calc(50% - 2rem)"
      marginInline="1rem"
      h="8rem"
      onClick={(e) => getUrl(e, data, index)}
      className={
        index === dataSetting.indexTheme ? "setting active" : "setting"
      }
    >
      <Img
        src={data}
        w="full"
        h="full"
        objectFit="cover"
        pointerEvents="none"
      />
    </Box>
  );
}
