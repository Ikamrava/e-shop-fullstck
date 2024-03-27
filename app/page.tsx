import Image from 'next/image'
import HomeBanner from './components/HomeBanner'
import {products} from "../utils/products"
import ProductCard from './components/prosucts/ProductCard'

export default function Home() {
  return (
    <div className="">
      <div>
         <HomeBanner/>
      </div>
      <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 mx-auto'>
       {products.map((product:any) => (
        <div key={product.id}>
          <ProductCard product = {product} />
        </div>
       ))}
      </div>
     

    </div>
  )
}
