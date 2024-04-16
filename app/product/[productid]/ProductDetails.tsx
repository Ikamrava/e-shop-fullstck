"use client"

import Button from "@/app/components/Button"
import ProductImages from "@/app/components/prosucts/ProductImages"
import SetColor from "@/app/components/prosucts/SetColor"
import SetQty from "@/app/components/prosucts/SetQty"
import { useCart } from "@/app/hooks/useCart"
import { Rating } from "@mui/material"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { MdCheckCircle } from "react-icons/md"


type Props = {
   product:any 
}
export type CartProductType = {
    id:string,
    name:string,
    description:string
    brand:string,
    category:string,
    selectedImg:SelectedImgType
    price:number,
    quantity:number,

}

export type SelectedImgType ={
    color:string,
    colorCode:string,
    image:string
}

const Horizontal =() =>{
    return(
        <hr className=" w-[30%]  my-2"/>
    )
}

function ProductDetails({product}: Props) {
    
    const {cartTotalQty, handleAddProductToCart , cartProducts} = useCart()
    const [isProductInCart,setIsProductInCart] = useState(false)
    const prodcutRating = product.reviews.reduce((acc:number,item:any) =>
     item.rating + acc ,0) / product.reviews.length

     const [cartProduct,setCartProduct] = useState<CartProductType> ({
        id:product.id,
        name:product.name,
        description:product.description,
        brand:product.brand,
        category:product.category,
        selectedImg:{...product.images[0]},
        price:product.price,
        quantity:1,
     })

     const router = useRouter()
     console.log(cartProducts)

     useEffect(() =>{
        setIsProductInCart(false)
        if(cartProducts) {
            const existingIndex = cartProducts.findIndex((item)=> item.id = product.id)
            if(existingIndex > -1) {
                setIsProductInCart(true)
            }
        }
     },[cartProducts])

    const handleColorSet = useCallback((value:SelectedImgType)=>{
        setCartProduct(prev =>({...prev,selectedImg:value}))
    },[cartProduct.selectedImg])
    
    const handleQtyIncrease = () =>{
        setCartProduct(prev =>({...prev, quantity:prev.quantity + 1}))
    }

    const handleQtyDecrease = () =>{
        if(cartProduct.quantity === 1) return;
        setCartProduct(prev =>({...prev, quantity:prev.quantity - 1}))
    }


  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        <div>
            <ProductImages cartProduct={cartProduct} product={product} handleColorSet={handleColorSet} />
        </div>
        <div className=" flex flex-col gap-1 text-slate-500 text-sm">
           <h2 className=" text-3xl font-medium text-slate-700">{product.name}</h2>
           <div className=" flex items-center gap-2">
                 <Rating value={prodcutRating} readOnly/>
                 <div >{product.reviews.length} reviews</div>
           </div>
           <Horizontal/>
           <div className=" text-justify">{product.description}</div>
           <Horizontal/>
           <div>
            <span className=" font-semibold">Category:</span> {product.category}
           </div>
           <div>
            <span className=" font-semibold">Brand:</span> {product.brand}
           </div>
           <div className={product.inStock ? " text-teal-400 font-bold" : " text-red-400" }>{product.inStock ? "In Stock" : " Out of Stock" }</div>
           <Horizontal/>
           {isProductInCart ?
            <>
              <p className=" mb-2 text-slate-500 flex items-center gap-1">
                <MdCheckCircle className="text-teal-40" size={20}/>
                <span>Product added to the cart</span>
              </p> 
              <div className=" max-w-72 font-bold">
                <Button label="View Cart" outline onClick={()=>router.push("/cart")}/>
              </div>
            </>
           :
           <>  
                <SetColor cartProduct={cartProduct} images={product.images} handleColorSet={handleColorSet} />
                <Horizontal/>
                <SetQty cartCounter = {true} cartProduct= {cartProduct} 
                        handleQtyIncrease = {handleQtyIncrease}
                        handleQtyDecrease = {handleQtyDecrease}/>
                <Horizontal/>
                <div className=" max-w-72">
                <Button label="Add to Cart" small={false} onClick={()=>handleAddProductToCart(cartProduct)} />
                </div>
            </>
           }
           
        </div>
    </div>
  )
}

export default ProductDetails