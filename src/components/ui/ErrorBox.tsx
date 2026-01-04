import { BiSolidMessageSquareError } from "react-icons/bi";
import { BoxGray } from "../style";


const ErrorBox = ({message}:{message: string}) => {
  return (
    <BoxGray
      initial={{scale:0.9, opacity:0}}
      animate={{scale:1, opacity:1}}
      transition={{duration: 0.2}}
      className="w-[80%]! min-[305px]:w-56! z-50! flex-col! justify-center! p-5!">
      <BiSolidMessageSquareError color="#e26666" size={35} className="-mt-4 -translate-y-3"/>
      <p className="text-[14px] w-[90%] text-center">{message}</p>
    </BoxGray>
  )
}

export default ErrorBox
