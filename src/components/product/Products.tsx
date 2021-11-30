import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../../data';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
    
const Products = () => {
    return (
       <Container>
           { popularProducts.map((product, key) =>{
               return  <Product product={product} key={key}/>
           }) }
       </Container>
    )
}

export default Products
