import React from 'react';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../../data'
import { mobile } from "../../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Categories = () => {
    return (
       <Container>
           { categories.map((item, key) => { 
               return <CategoryItem item={item} key={key}/>
           }) }
       </Container>
    )
}

export default Categories
