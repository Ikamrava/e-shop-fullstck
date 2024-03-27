import React from 'react'
import { product } from '@/utils/tproduct'
import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';

type Props = {
  productid : string;
}

function Product({params}: {params:Props}) {
  
  return (
    <div>
      <Container>
       <ProductDetails product={product}/>
      </Container>
    </div>
  )
}

export default Product