import React from 'react'
import Container from '@/app/components/Container';
import ProductDetails from './ProductDetails';
import ListRating from './ListRating';
import {products} from "@/utils/products"

type Props = {
  productid : string;
}

function Product({params}: {params:Props}) {
  const product = products.find(p => p.id === params.productid);
  return (
    <div>
      <Container>
       <ProductDetails product={product}/>
       <div className=' flex flex-col mt-20 gap-4 '>
        <div>add rating</div>
        <div><ListRating product={product}/></div>
       </div>
      </Container>
    </div>
  )
}

export default Product