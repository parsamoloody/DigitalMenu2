import React from 'react'

type inputProps = React.InputHTMLAttributes<HTMLInputElement>


const Input = ({className, ...prop}: inputProps) => {
  return (
    <input 
    {...prop} 
     className={`bg-white rounded-[1.2rem] placeholder:text-[#777] pr-9 focus:outline-none shadow-lg
       w-full shadow-white ${className} p-3`}  
    />
  )
}

export default Input
