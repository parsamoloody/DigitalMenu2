'use client'
import { easeInOut } from "motion/react";
import tw from "tailwind-styled-components";
import { motion } from "motion/react"


//  tag style

export const StyleButton = tw.button<{$isactive : boolean}> `
  py-2 w-28 rounded-[1.1rem] text-center  text-[13px]
  
  ${(p) => p.$isactive 
    ? 'bg-[var(--main-black-color)] text-white font-semibold'
    : 'bg-[#eee] ' 
  }
`;

export const Span = tw.span `
  absolute top-3 left-3
`
export const H1 = tw.h1 `
  font-bold text-[#646464]
`

export const Div = tw.div `
 relative
`

export const P = tw.p `
bg-red-300 -mt-5 mb-6 p-2 text-center -mr-4 text-[12px] w-44 rounded-2xl
`

// box style

export const BoxGray = tw(motion.div) `
p-4 relative rounded-[1.1rem] text-[14px] shadow-[#eee] 
shadow-lg bg-[#eee] flex justify-between items-center 
`

export const Box = tw(motion.div)`
bg-[#eee] p-5 rounded-3xl w-[89%] min-[400px]:w-[355px] gap-4 flex flex-col 
`


//  variant motion

export const variantXRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    Transition: { duration: 0.3 },
  },
};

export const variantX = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    Transition: { duration: 0.3 },
  },
  exit: { opacity: 0, scale: 0 },
};

export const variantY = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const variantScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: easeInOut, duration: 0.3 },
  },
};
