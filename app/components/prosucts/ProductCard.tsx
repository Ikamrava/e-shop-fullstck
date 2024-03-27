"use client"
import { formatPrice } from '@/utils/formatPrice'
import { truncate } from '@/utils/truncate'
import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {
  product: any
}

function ProductCard({product}: Props) {
    const prodcutRating = product.reviews.reduce((acc:number,item:any) => item.rating + acc ,0) / product.reviews.length
    console.log(prodcutRating)
  return (
    <div className=' col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 
    transition hover:scale-105 text-center text-sm
    '>
        <div className='
        flex flex-col items-center w-full gap-1
        '>
           <div className=' aspect-square overflow-hidden relative w-full'>
             <Image fill className=" w-full h-full object-contain" src={product.images[0].image} alt="ProductImage"/>
           </div>
           <div className=' mt-4 font-bold'>
             {truncate(product.name)}
           </div>
           <div>
               <Rating value={prodcutRating} readOnly/>
           </div>
           <div>
             {product.reviews.length} reviews
           </div>
           <div className=' font-bold '>{formatPrice(product.price)}</div>
        </div>
    </div>
  )
}

export default ProductCard