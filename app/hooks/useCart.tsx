import { createContext, use, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "../product/[productid]/ProductDetails";
import {toast} from 'react-hot-toast';

type CartContextType = {
    cartTotalQty: number,
    cartProducts: CartProductType[] | null,
    handleAddProductToCart: (products: CartProductType) => void,
    handleRemoveProductFromCart: (product:CartProductType) => void,
    handleQtyIncrease: (product:CartProductType) => void,
    handleQtyDecrease: (product:CartProductType) => void,
    handleCleareCart: () => void,
}
type Props = {
   [propName:string]:any
}

export const CartContextt = createContext<CartContextType | null>(null)

export const CartContextProvider = (props:Props)=>{
    const [cartTotalQty,setCartTotalQty] = useState(0)
    const [cartProducts,setCartProducts] = useState<CartProductType[] | null>(null)

    useEffect(()=>{
        const cartItems = localStorage.getItem("eShoppingItems")
        if(cartItems){
            setCartProducts(JSON.parse(cartItems))
        }
    },[])

    const handleAddProductToCart = useCallback((products: CartProductType)=>{
        setCartProducts((prev)=>{
          let updatedCart
          if(prev){
            updatedCart = [...prev,products]
          }else{
            updatedCart = [products]
          }
          
          localStorage.setItem("eShoppingItems",JSON.stringify(updatedCart))
        
          toast.success("Prodcut added to cart")

          return updatedCart
        })
        
    },[])

    const handleRemoveProductFromCart = useCallback((product:CartProductType)=>{
       if(cartProducts){
            const updatedCart = cartProducts.filter((item)=>item.id !== product.id)
            setCartProducts(updatedCart)
            localStorage.setItem("eShoppingItems", JSON.stringify(updatedCart))
            toast.success("Product removed from cart")
        }
    },[cartProducts])

    const handleQtyIncrease = useCallback((product:CartProductType)=>{
      let updatedCart 
      if(product.quantity === 99){
          return toast.error("Max quantity reached")
      }
      if(cartProducts){
          updatedCart = [...cartProducts]
          const productIndex = updatedCart.findIndex((item)=>item.id === product.id)
          updatedCart[productIndex].quantity += 1
          setCartProducts(updatedCart)
          localStorage.setItem("eShoppingItems", JSON.stringify(updatedCart))
      }
    },[cartProducts])

    const handleQtyDecrease = useCallback((product:CartProductType)=>{
      if(product.quantity === 1){
        return toast.error("Use remove to delete the Item")
    }
      let updatedCart
      if(cartProducts){
          updatedCart = [...cartProducts]
          const productIndex = updatedCart.findIndex((item)=>item.id === product.id)
          updatedCart[productIndex].quantity -= 1
          setCartProducts(updatedCart)
          localStorage.setItem("eShoppingItems", JSON.stringify(updatedCart))
      }
    },[cartProducts])

    const handleCleareCart = useCallback(()=>{
        setCartProducts(null)
        setCartTotalQty(0)
        toast.success("Cart cleared")
        localStorage.removeItem("eShoppingItems")
    },[cartProducts])
  

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleQtyIncrease,
        handleQtyDecrease,
        handleCleareCart,
    }
    return <CartContextt.Provider value={value}  {...props}/>
    
}


export const useCart = () => {
    const context = useContext(CartContextt);
    if (context === null) {
      throw new Error('useCart must be used within a CartContextProvider');
    }
    return context;
  }