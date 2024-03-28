"use client"

import { CartProductType, SelectedImgType } from "@/app/product/[productid]/ProductDetails"
import Image from "next/image"
// 
// 

type Props = {
    cartProduct:CartProductType
    product:any
    handleColorSet: (value: SelectedImgType) => void
}

function ProductImages({cartProduct,product,handleColorSet}: Props) {
   

  return (
    <div className=" grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
         <div className=" flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px] ">
               {product.images.map((item:any) => (
                  <div key={item.color}
                            className={`relative rounded border-teal-300 w-[80%] aspect-square ${cartProduct.selectedImg.color === item.color ? "border-[2.5px]":"border-none"}`}
                            onClick={()=>handleColorSet(item)}>
                        <img src={item.image} alt={item.color} />
                  </div>
               ))}
         </div>
         <div className=" col-span-5 relative aspect-square ">
            <Image src={cartProduct.selectedImg.image} alt={cartProduct.name} fill className="object-contain h-full w-full max-h-[500px] min-h-[300px] sm:min-h-[400px]" />
         </div>
         
      

    </div>
  )
}

export default ProductImages