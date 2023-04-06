import { Box, Container } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Controls from "./controls/Controls";
import Indicators from "./indicators/Indicators";
import ItemSlide from "./itemSlide/ItemSlide";
import "../../../scss/slider.scss";

const SlideShow = ({ controls = false, indicator = false, data, isShow }) => {
  const [currentSlide, setCurrentSlide] = useState(3);
  const sliderContainer = useRef();
  useEffect(() => {
    sliderContainer.current.style.transform = `translateX(${
      -currentSlide * 50
    }%)`;
  }, [currentSlide]);

  const next = () => {
    setCurrentSlide((prev) =>
      prev === data.listImage.length - 1 ? 0 : prev + 1
    );
  };
  const prev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? data.listImage.length - 1 : prev - 1
    );
  };

  const switchSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <Container overflow={"hidden"} maxW="full" m="0" p="0" pos="relative">
      <Box ref={sliderContainer} className="slider_container">
        {data.listImage?.map((item, index) => (
          <ItemSlide
            data={item}
            getUrl={data.getUrl}
            index={index}
            key={index}
          />
        ))}
      </Box>
      {controls && <Controls next={next} prev={prev} />}
      {indicator && (
        <Indicators
          switchSlide={switchSlide}
          currentSlide={currentSlide}
          data={data}
        />
      )}
    </Container>
  );
};

export default SlideShow;
