import { useContext, useState, useEffect, useRef } from "react";
import { NewsContext } from "../../../context/all-contexts";
import searchIcon from "../../../assets/icons/search.svg";

const Search = () => {
  // To maintain the input appearing behavior
  const [isShowing, setIsShowing] = useState(false);

  // Accessing searchQuery and setSearchQuery from NewsContext
  const { searchQuery, setSearchQuery } = useContext(NewsContext);

  // Reference to the input element
  const inputRef = useRef(null);

  // Function to handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle click outside the input field
  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsShowing(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Search input field */}
      <div
        className="pt-2 flex items-center text-gray-600 max-w-[320px] w-full relative"
        ref={inputRef}
      >
        {isShowing && (
          <div className="w-full">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-12 w-full rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              value={searchQuery}
              onChange={handleChange}
              placeholder="Search Articles"
            />
          </div>
        )}
        {/* Search button */}
        <button
          className="absolute right-0 mr-3"
          onClick={() => setIsShowing(!isShowing)}
        >
          <img className="size-8" src={searchIcon} alt="" />
        </button>
      </div>
    </>
  );
};

export default Search;
