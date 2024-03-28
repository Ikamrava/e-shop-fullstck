"use client"

import { CartProductType } from "@/app/product/[productid]/ProductDetails"

type Props = {
  cartCounter?: boolean
  cartProduct: CartProductType
  handleQtyIncrease: () => void
  handleQtyDecrease: () => void
}

const btnStyle = "border-[1.2px] border-slate-300 px-2 rounded-md"

function SetQty({cartCounter,cartProduct,handleQtyDecrease,handleQtyIncrease}: Props) {
  return (
    <div className=" flex gap-8 items-center">
        {cartCounter ? null : <div className=" font-semibold">Qauntity</div>}
        <div className=" flex gap-4 items-center text-base">
        <button className={btnStyle} onClick={handleQtyDecrease}>-</button>
            <span>{cartProduct.quantity}</span>
        <button className={btnStyle} onClick={handleQtyIncrease}>+</button>
        </div>
    </div>
  )
}

export default SetQty