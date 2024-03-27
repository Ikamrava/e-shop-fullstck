import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import {Redressed} from 'next/font/google'


const font = Redressed({subsets: ['latin'],weight:["400"]})
type Props = {}


export default function NavBar({}: Props) {

  return (
    <div className=' sticky top-0 w-full bg-slate-200 z-30 shadow-sm  '>
        <div className=' py-4 border-b-[1px] mx-12'>
            <Container>
               <div className=' flex item-center justify-between gap-3 md:gap-0 '>
                <Link href="/" className={`${font.className} font-bold text-4xl `}>E-Shop</Link>
                <div className=' hidden md:block'>Search</div>
                <div className=' flex items-center gap-8 md:gap-12'>
                    <Link href={"/cart"}>Cart</Link>
                    <div>UserMenu</div>
                </div>
               </div>
            </Container>
           

        </div>
    </div>
  )
}