import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Img,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useState } from "react";
import { data_image } from "../../../common/data_image";
import { updateApp } from "../../../reduxSlice/settingSlices";
import { useDispatch, useSelector } from "react-redux";
import SlideShow from "../../componentsReuse/slider/SlideShow";
import Music from "../../componentsSettings/music/Music";
import Font from "../../componentsSettings/font/Font";
import ChangeMode from "../../componentsSettings/changeMode/ChangeMode";

export default function Setting({ isOpenSetting, onCloseSetting }) {
  const dispatch = useDispatch();
  const settingStore = useSelector((state) => state.settings);

  const [dataSetting, setDataSetting] = useState({
    theme: settingStore.theme,
    indexTheme: settingStore.indexTheme,
    font: {
      slider: settingStore.slider,
      size: settingStore.size,
      headingColor: settingStore.headingColor,
      paragraphColor: settingStore.paragraphColor,
      fontFamily: settingStore.fontFamily,
    },
    music: {},
  });

  // setting logic theme
  const getUrlImage = (e, url, index) => {
    const boxsEl = document.querySelectorAll(".setting");
    const box = e.target;
    console.log(box);
    boxsEl.forEach((item) => {
      item.classList.remove("active");
    });

    box.classList.add("active");

    setDataSetting((prev) => ({
      ...prev,
      theme: url,
      indexTheme: index,
    }));
  };

  // setting logic font
  const handleChangeFontSize = (val) => {
    setDataSetting((prev) => ({
      ...prev,
      font: {
        ...prev.font,
        slider: val,
        size: val / (100 / 3),
      },
    }));
  };

  const handleChangeFontFamilyAndColor = (e) => {
    const { name, value } = e.target;
    setDataSetting((prev) => ({
      ...prev,
      font: {
        ...prev.font,
        [name]: value,
        color: {
          ...prev.font.color,
          [name]: value,
        },
      },
    }));
  };

  // ====== obj custom data =======

  // custom dataImg (img, func)
  const customDataImg = {
    listImage: data_image,
    getUrl: getUrlImage,
  };

  // custom dataFont (obj font and func)

  const customDataFont = {
    obj_Font: dataSetting.font,
    func_Font: {
      fontSize: handleChangeFontSize,
      fontChange: handleChangeFontFamilyAndColor,
    },
  };

  // =================================

  // submit all change settings

  const handleSubmitSetting = () => {
    dispatch(updateApp(dataSetting));
    onCloseSetting();
  };

  return (
    <Drawer
      placement="right"
      isOpen={isOpenSetting}
      onClose={onCloseSetting}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Setting</DrawerHeader>

        <DrawerBody display="flex" flexDir="column" gap="1rem">
          {/* change dark and light theme */}

          <ChangeMode />
          {/* slider */}

          <Box h="max-content">
            <Text fontSize="1.3rem" fontWeight="600">
              Theme
              <Text mt="0.2rem" w="5rem" h="0.2rem" bg="gray.400" />
            </Text>
            {/* slide show */}

            <SlideShow data={customDataImg} controls={true} />
          </Box>

          <Font data={customDataFont} />
          {/* music */}
          <Box>
            <Text fontSize="1.3rem" fontWeight="600">
              Music
              <Text mt="0.2rem" w="5rem" h="0.2rem" bg="gray.400" />
            </Text>
            <Music />
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Button colorScheme="green" mr="2rem" onClick={handleSubmitSetting}>
            Done!
          </Button>
          <Button colorScheme="red">Cancel</Button>
          <Spacer />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
