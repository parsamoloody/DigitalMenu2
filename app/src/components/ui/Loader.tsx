import { SiGooglemarketingplatform } from "react-icons/si";
import {motion} from "motion/react"
const Loader = ({color}: {color:string}) => {
  return (
    <motion.div 
     animate={{y:[8,10,9,20]}}
     transition={{repeat: Infinity}}
     className="z-50"
    >
      <SiGooglemarketingplatform size={30} color={color} />
    </motion.div>
  )
}

export default Loader
