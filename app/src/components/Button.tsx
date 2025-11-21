'use client'

import React from 'react'

type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({className , children, ...prop }: buttonProps) => {
  return (
    <button {...prop} className={` ${className} bg-[#333]  p-2 rounded-[1.2rem] text-[#eee] cursor-pointer`}>
         {children}
     </button>
  )
}

export default Button
