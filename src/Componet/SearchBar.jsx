import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaSearch } from "react-icons/fa";

import { GiCancel } from "react-icons/gi";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visble, setVisble] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisble(true);
    } else {
      setVisble(false);
    }
  }, [location]);

  return showSearch && visble ? (
    <div className="border-t border-b bg-gray-100 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className=" w-5 cursor-pointer" />
      </div>
      <GiCancel
        size={18}
        className=" inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
