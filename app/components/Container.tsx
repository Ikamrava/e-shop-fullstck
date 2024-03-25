import React from 'react'

type Props = {
    children: React.ReactNode
}

function Container({children}: Props) {
  return (
    <div className='
    max-w-[1920px]
    mx-auto
    xl-px-20
    md:px-2
    px-4
    '>
        {children}
        </div>
  )
}

export default Container