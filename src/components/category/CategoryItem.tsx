import React from "react";
import { Button, Container, Image, Info, Title } from "./CategoryItem.style";

interface categoryProps{
    item: any
}

const CategoryItem: React.FC<categoryProps> = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
