"use client"

import { CartContextProvider } from "../hooks/useCart"

interface CartContextProvider {
    children: React.ReactNode
}


function CartProvider({children}: CartContextProvider) {
  return (
    <CartContextProvider>
        {children} 
    </CartContextProvider>
  )
}

export default CartProvider