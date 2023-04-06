import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import { BsMusicNoteList } from "react-icons/bs";
import "../../../scss/music.scss";
import { data_music } from "../../../common/data_music";
import { motion } from "framer-motion";
import MusicItem from "./MusicItem";

const listMusicMotion = {
  init: {
    opacity: 0,
    height: 0,
  },
  appear: {
    opacity: 1,
    height: "100%",
    transition: {
      duration: 1,
    },
  },
};

export default function Music() {
  const [showListMusic, setShowListMusic] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({
    name: "Hallelujah",
    category: "hillsong",
    img: "https://previews.123rf.com/images/solomnikov/solomnikov1510/solomnikov151000735/46945081-hallelujah-and-raised-hands.jpg",
    music: data_music[0].music,
  });
  const listMusicContainer = useRef();

  const onShowListMusic = () => {
    setShowListMusic(!showListMusic);
  };

  return (
    <Container maxW="full" m="1rem 0 0 0" p="0">
      <Flex flexDir="column" gap="1rem">
        <Box
          w="full"
          h="7rem"
          borderTopLeftRadius="2rem"
          borderTopRightRadius="2rem"
          overflow="hidden"
        >
          <Img src={currentMusic.img} w="full" h="full" objectFit="cover" />
        </Box>
        <Flex alignItems="center" gap="1rem">
          <Text w="10rem">{currentMusic.name}</Text>
          <audio src={currentMusic.music} controls style={{ flex: "1" }} />
          <Button ml="auto" onClick={onShowListMusic}>
            <BsMusicNoteList />
          </Button>
        </Flex>
        {showListMusic && (
          <Box
            ref={listMusicContainer}
            as={motion.div}
            initial={listMusicMotion.init}
            animate={listMusicMotion.appear}
            exit={{ opacity: 0 }}
          >
            <Flex flexDir="column" gap="1rem">
              {data_music.map((item, index) => (
                <MusicItem
                  item={item}
                  key={index}
                  currentSong={currentMusic.name}
                />
              ))}
            </Flex>
          </Box>
        )}
      </Flex>
    </Container>
  );
}
