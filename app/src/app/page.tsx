import ListMenus from "@/components/menu/ListMenus";
import SearchBar from "@/components/menu/SearchBar";
import { H1 } from "@/components/style";
import { SiGooglemarketingplatform } from "react-icons/si";

export default function Home() {
  return (
      <div className="m gap-8 flex justify-center items-center flex-col">

      <SiGooglemarketingplatform size={50} color="#444" />

      <SearchBar />
      
      <div className="w-full max-w-[400px] px-7 sm:px-0 text-right justify-start">
        <H1>فروشگاه های من</H1>
      </div>
      <ListMenus />
     
    </div>
   
  );
}