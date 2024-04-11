import { createContext, useCallback, useContext, useState } from "react";
import { CartProductType } from "../product/[productid]/ProductDetails";

type CartContextType = {
    cartTotalQty: number,
    cartProducts: CartProductType[] | null
    handleAddProductToCart: (products: CartProductType) => void
}
type Props = {
   [propName:string]:any
}

export const CartContextt = createContext<CartContextType | null>(null)

export const CartContextProvider = (props:Props)=>{
    const [cartTotalQty,setCartTotalQty] = useState(0)
    const [cartProducts,setCartProducts] = useState<CartProductType[] | null>(null)

    const handleAddProductToCart = useCallback((products: CartProductType)=>{
        setCartProducts((prev)=>{
          let updatedCart
          if(prev){
            updatedCart = [...prev,products]
          }else{
            updatedCart = [products]
          }
          return updatedCart
        })
        
    },[])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
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