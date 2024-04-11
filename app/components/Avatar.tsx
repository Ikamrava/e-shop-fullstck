import Image from 'next/image'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

type Props = {
    src?:string | null | undefined
}

function Avatar({src}: Props) {
    if(src){
        return <Image 
        src={src}
        alt="avatar"
        width={30}
        height={30}
        className=' rounded-full'
        
        />
    }
  return (
    <FaUserCircle size={24}/>
  )
}

export default Avatar