"use client"

import Link from "next/link"
import { useCart } from "../hooks/useCart"
import { MdArrowBack } from "react-icons/md"
import Heading from "../components/Heading"
import Button from "../components/Button"
import ItemContent from "./ItemContent"

type Props = {}

function CartClient({}: Props) {
  const {cartProducts,handleCleareCart} = useCart()
  if(!cartProducts || cartProducts.length === 0) return (
    <div className=" flex flex-col items-center" >
        <div className=" text-2xl">No products in cart</div>
        <div>
            <Link href={"/"} className=" text-slate-500 flex items-center gap-1 mt-2">
                <MdArrowBack size={20}/>
                <span>Start Shopping</span>
            </Link>
        </div>
    </div>
  )
  return (
    <div>
        <Heading title="Shopping Cart" center/>

        <div className=" hidden md:grid md:grid-cols-5 text-xs gap-4 pb-2 items-center mt-8">
            <div className=" col-span-2 justify-self-start">Product</div>
            <div className=" justify-self-center">Price</div>
            <div className=" justify-self-center">Quantity</div>
            <div className=" justify-self-end">Total</div>
        </div>

        <div>
            {cartProducts && cartProducts.map(product => (
                  <ItemContent key={product.id} item = {product}/>
            ))}
        </div>

        <div className=" flex border-t-[1.5px] bordr-slate-200 justify-between gap-4 pt-4 mt-4">
            <div className=" w-24">
                <Button label="Clear Cart" onClick={()=>{handleCleareCart()}} small outline/>
            </div>
            <div className=" text-sm flex flex-col gap-1 items-start" >
                <div className=" flex justify-between w-full text-base font-semibold">
                    <span>Total</span>
                    <span>£0.00</span>
                </div>
                <p className=" text-slate-500">Taxes and Shipping calculated at checkout</p>
                <Button label="Checkout" onClick={()=>{}} small/>
                <Link href={"/"} className=" text-slate-500 flex items-center gap-1 mt-2">
                <MdArrowBack size={20}/>
                <span>Continue Shopping</span>
            </Link>
            </div>
        </div>

    </div>
  )
}

export default CartClient