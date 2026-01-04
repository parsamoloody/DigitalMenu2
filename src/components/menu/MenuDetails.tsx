'use client'
import { useRouter } from "next/navigation";
import {motion} from 'motion/react'

import { Avatar } from "@mui/material"
import { Flex } from "@radix-ui/themes"
import { TbSquareRoundedArrowLeftFilled } from "react-icons/tb";

import useMenuDetails from "./hook/useMenuDetails"
import { variantScale, variantXRight} from "../style";
import Loader from "../ui/Loader";
import ErrorBox from "../ui/ErrorBox";

const MenuDetails = ({id}: {id: string}) => {
  const {data, loadingMenuDetail, errorMenuDetail} = useMenuDetails(id)
  const router = useRouter()

  return (
     <motion.div 
       className="min-h-screen min-[366px]:w-[480px] relative flex flex-col bg-cover bg-[url('/images/imageRes.webp')] bg-center bg-no-repeat">
       <Flex justify='center' align='center' className="h-[85vh]">
         {loadingMenuDetail && <Loader color="#fff" />}
         {errorMenuDetail && <ErrorBox message="خطا در دریافت اطلاعات" />}
       </Flex>
     

    {/* bg black to white */}
     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div> 
     
    <button className="cursor-pointer z-50" onClick={() => router.push('/')}>
    <TbSquareRoundedArrowLeftFilled className="absolute left-4 top-4" color="#ffff" size={45}/>
     </button>
      
       
        <div className="absolute bottom-50 right-7">
        <Flex align='center'>
          <motion.div 
           variants={variantScale} 
           initial='hidden'
           animate='visible'
          >
         <Avatar className={`h-22! w-22!`} alt={data?.displayId} src={data?.avatar ? data.avatar : '/images/imageRes.webp'} />
           </motion.div>
           <Flex gap='1' direction='column' className="mr-5">
             <h1 className="font-bold text-white">{data?.name}</h1> 
             <span className="text-white">{data?.subname}</span> 
           </Flex>
         </Flex>

         <motion.p
           variants={variantXRight} 
           initial='hidden'
           animate='visible'
           transition={{delay: 0.5}}
         className="text-[12px] mr-1 mt-5 text-white">{data?.bio}</motion.p>

       </div>
       
       {/* line image */}
      <Flex justify='center' align='center' className="w-full absolute bottom-26">
         <div className="w-[90%] min-[480px]:w-[440px] h-23 
          scale-[1] bg-[url('/images/line.webp')] bg-center bg-cover"></div>
         </Flex>
        </motion.div>
  )
}

export default MenuDetails





