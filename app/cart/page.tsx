import React from 'react'
import {products} from "@/utils/products"
import Container from '../components/Container'
import CartClient from './CartClient'


type Props = {}

function Cart({}: Props) {
  return (
    <div className=' pt-8'>
      <Container>
        <CartClient/>
      </Container>
    </div>
  )
}

export default Cart
