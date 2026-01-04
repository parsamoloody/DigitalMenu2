import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type inputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn,
  error: string | undefined
}


const Input = ({className, register , error, ...props}: inputProps) => {
  return (
    <input 
     {...register}
     className={` ${className} ${error ? 'bg-red-200' : 'bg-white'} rounded-[1.2rem] placeholder:text-[#777] pr-4 py-3
     focus:outline-none shadow-lg w-full shadow-white `}  
       {...props} 
    />
  )
}

export default Input
