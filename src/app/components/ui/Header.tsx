import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="mb-10 flex justify-between items-center">
      <h3 className="text-2xl font-bold">Users</h3>

      <div className=" flex mx-5">
        <input
          className="border max-w-[150px] md:max-w-[200px] lg:max-w-[230px] border-gray-300 focus:outline-none 
                bg-transparent 
               rounded-l-lg px-3 py-2 placeholder:text-sm "
          type="text"
          placeholder="Search here.."
        />
        <button className=" px-3 py-2 text-white font-semibold bg-[#047EFF] rounded-r-lg text-sm ">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
