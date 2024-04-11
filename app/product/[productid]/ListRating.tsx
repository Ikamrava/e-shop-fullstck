"use client"

import Heading from "@/app/components/Heading"
import { Rating, dividerClasses } from "@mui/material"
import moment from "moment"

type Props = {
    product: any
}

function ListRating({product}: Props) {
  return (
    <div>
        <Heading title="Product Review"/>
        <div className=" text-sm mt-2 ">
          {product.reviews && 
            product.reviews.map((review: any) => {
              return (
                <div key={review.id} className=" max-w-300px">
                  <div className="flex gap-2 item-center">
                    <div className="  ">Avatar</div>
                    <div className=" font-semibold">{review?.user.name}</div>
                    <div>{moment(review.createdDate).fromNow()}</div>
                  </div>
                  <div className=" mt-2">
                     <Rating value={review.rating} readOnly />
                     <div className=" mt-2 ml-2">
                       {review.comment}
                     </div>
                     <hr className=" mt-4 mb-4" />

                  </div>
                  
                </div>

              )
            })
          }
        </div>
    </div>
  )
}

export default ListRating