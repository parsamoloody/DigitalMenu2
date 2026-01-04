import { RiSearch2Fill } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-[87%] min-[450]:w-96 sm:w-[465px]">
        
        
        <input
          type="text"
          placeholder="جستجوعه مجموعه"
          className="w-full rounded-2xl bg-[#eee]
          placeholder:text-[#777] pr-4 py-3 focus:outline-none shadow-lg
          placeholder:text-[13px] shadow-[#eee]"
        />

        
        <RiSearch2Fill
          size={26}
          color="#555"
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
};

export default SearchBar;
