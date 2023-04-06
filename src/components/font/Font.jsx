import {
  Box,
  Flex,
  Input,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { data_font } from "../../common/data_font";

export default function Font({ data }) {
  const { obj_Font, func_Font } = data;

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "xl",
  };
  return (
    <Box>
      {/* header font */}

      <Text fontSize="1.3rem" fontWeight="600">
        Font
        <Text mt="0.2rem" w="5rem" h="0.2rem" bg="gray.400" />
        {/* font test */}
        <Box h="auto" w="80%" margin="auto" marginBlock="2rem">
          <Text
            fontSize={`${obj_Font.size}rem`}
            textAlign="center"
            fontFamily={obj_Font.fontFamily}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Text>
        </Box>
        {/* slider font */}
        <Box w="70%" margin="auto">
          <Slider
            mt="2rem"
            aria-label="slider-ex-6"
            color="orange.500"
            onChange={(val) => func_Font.fontSize(val)}
          >
            <SliderMark value={25} sx={labelStyles}>
              25%
            </SliderMark>
            <SliderMark value={50} sx={labelStyles}>
              50%
            </SliderMark>
            <SliderMark value={75} sx={labelStyles}>
              75%
            </SliderMark>
            <SliderMark
              value={obj_Font.slider}
              textAlign="center"
              bg="orange.400"
              color="white"
              mt="-10"
              ml="-5"
              paddingInline="0.5rem"
              w="max-content"
            >
              {obj_Font.slider}%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack bg="orange.400" />
            </SliderTrack>
            <SliderThumb bg="orange.600" />
          </Slider>
        </Box>
        {/* family font */}
        <Box mt="4rem">
          <Text mb="1rem" fontSize="1.1rem" color="gray.600">
            Font Family
          </Text>
          <Select
            variant="outline"
            placeholder={obj_Font.fontFamily}
            onChange={func_Font.fontChange}
            name="fontFamily"
            value={obj_Font.fontFamily}
          >
            {data_font.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Select>
        </Box>
        {/* font color */}
        <Box mt="4rem">
          <Text mb="1rem" fontSize="1.1rem" color="gray.600">
            Color Font
          </Text>
          <Flex justifyContent="space-between">
            <Box flex="1">
              <Text mb="1rem" ml="2rem" fontSize="1rem" color="gray.600">
                color for header
              </Text>
              <Input
                type="color"
                placeholder="chose your color "
                name="headingColor"
                value={obj_Font.headingColor}
                onChange={func_Font.fontChange}
              />
            </Box>
            <Box flex="1">
              <Text mb="1rem" ml="2rem" fontSize="1rem" color="gray.600">
                color for paragraph
              </Text>
              <Input
                type="color"
                placeholder="chose your color "
                name="paragraphColor"
                value={obj_Font.paragraphColor}
                onChange={func_Font.fontChange}
              />
            </Box>
          </Flex>
        </Box>
      </Text>
    </Box>
  );
}
