import React, { useState } from "react";
import {
  Arrow,
  Container,
  ImgContainer,
  InfoContainer,
  Slide,
  Image,
  Title,
  Desc,
  Button,
  Wrapper,
} from "./Slider.style";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const onClickHandler = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const displaySlide = () => {
    return sliderItems.map((slideItem, key) => {
      return (
        <Slide bg={slideItem.bg} key={key}>
          <ImgContainer>
            <Image src={slideItem.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{slideItem.title}</Title>
            <Desc>
              { slideItem.desc }
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      );
    });
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => onClickHandler("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        { displaySlide() }
      </Wrapper>
      <Arrow direction="right" onClick={() => onClickHandler("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
