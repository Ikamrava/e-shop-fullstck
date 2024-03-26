import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import FooterList from './FooterList'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'


type Props = {}

function Footer({}: Props) {
  return (
    <footer className=' bg-slate-700 text-slate-200 text-sm mt-16 '>
      <Container>
        <div className=' flex flex-col md:flex-row justify-between pt-16 pb-8 px-10 '>
          <FooterList>
            <h3 className=' font-bold text-base mb-2'>Shop Categories</h3>
            <Link href={"#"}>Phones</Link>
            <Link href={"#"}>Laptops</Link>
            <Link href={"#"}>Desktops</Link>
            <Link href={"#"}>Watches</Link>
            <Link href={"#"}>Tvs</Link>
            <Link href={"#"}>Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className=' font-bold text-base mb-2'>Customer Service</h3>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Shipping Policy</Link>
            <Link href={"#"}>Return & Exchanges</Link>
            <Link href={"#"}>FAQs</Link>
          </FooterList>
          <div className=' w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className=' font-bold text-base mb-2'>About Us</h3>
            <p className='mb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quisquam.
            </p>
          </div>
          <div>
          <h3 className=' font-bold text-base mb-2'>Follow Us</h3>
          <div className=' flex gap-2'>
            <Link href="#">
              <FaFacebook size="24"/>
            </Link>
            <Link href="#">
              <FaInstagram size="24"/>
            </Link>
            <Link href="#">
              <FaTwitter size="24"/>
            </Link>
          </div>
         
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer