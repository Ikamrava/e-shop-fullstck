"use client"

import { formatPrice } from "@/utils/formatPrice"
import { CartProductType } from "../product/[productid]/ProductDetails"
import Link from "next/link"
import { truncate } from "@/utils/truncate"
import Image from "next/image"
import SetQty from "../components/prosucts/SetQty"
import { useCart } from "../hooks/useCart"



type Props = {
    item:CartProductType
}

function ItemContent({item}: Props) {
    const {handleRemoveProductFromCart,handleQtyIncrease,handleQtyDecrease} = useCart()
  return (
    <div className=" flex flex-col md:grid md:grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
       <div className=" col-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div className=" relative w-[70px] aspect-square">
                    <Image src={item.selectedImg.image} alt={item.name} fill className=" object-contain" />
                </div>
            </Link>

            <div className=" flex flex-col justify-between">
                <Link href={`/product/${item.id}`}>
                {truncate(item.name)}
                </Link>
            <div>{item.selectedImg.color}</div>

            <div className=" w-16">
                <button className=" text-slate-500 underline cursor-pointer" 
                onClick={()=> handleRemoveProductFromCart(item) }>Remove
                </button>
            </div>
       </div>
        
       </div>

       <div className=" items-center">{formatPrice(item.price)}</div>

       <div className=" justify-self-center">
        <SetQty cartCounter= {true} cartProduct={item} handleQtyIncrease={()=>handleQtyIncrease(item)} handleQtyDecrease={()=>handleQtyDecrease(item)}/>
       </div>

       <div className=" justify-self-end font-semibold">
        {formatPrice(item.price * item.quantity)}
       </div>

    </div>
    
  )
}

export default ItemContent