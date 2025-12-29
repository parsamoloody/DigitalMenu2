'use client'
import Link from "next/link"
import {motion} from 'motion/react'

import { Avatar } from "@mui/material"
import { Flex } from "@radix-ui/themes"

import useListMenus from "./hook/useListMenus"
import { variantXRight } from "../style"
import ErrorBox from "../ui/ErrorBox"
import Loader from "../ui/Loader"




const ListMenus = () => {
 const {data, loadingListMenu, errorListMenu} = useListMenus()

  return (
    <div className="w-full flex gap-6 flex-col mb-6">
    <Flex direction='column' gap='5'
     align='center' justify='center'>
   
      {errorListMenu && <ErrorBox message="مشکلی پیش اومد" />}
      {loadingListMenu && <Loader color="#666" />}

      {data?.map(item => 
       <motion.div 
         variants={variantXRight}
         initial='hidden'
         animate='visible'
       className="bg-[url('/images/imageRes.webp')] bg-cover bg-center relative rounded-[1.1rem] w-[87%] min-[450]:w-96 sm:w-[440px] h-64" key={item.displayId} >
          
        <Link href={`/menu/${item.id}`}>
          <div className="absolute rounded-[1.1rem] inset-0 bg-black/60"></div>

          <Avatar className={`h-22! w-22! absolute top-37 right-3.5`} alt={item.displayId} src='/images/imageRes.webp' />
        
          <Flex gap='1' direction='column' className="absolute text-white bottom-7 right-29">
             <h1 className="font-bold text-white">{item.name}</h1> 
             <span>{item.subname}</span> 
           </Flex>
      
        </Link></motion.div>

      )}
    </Flex>
    </div>
  )
}

export default ListMenus
