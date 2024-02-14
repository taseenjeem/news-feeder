import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const useNewsQuery = () => {
  // State to store news data
  const [news, setNews] = useState(null);

  // State to manage search query
  const [searchQuery, setSearchQuery] = useState("");

  // State to manage loading state
  const [isLoading, setIsLoading] = useState({ active: false, message: "" });

  // State to handle errors
  const [error, setError] = useState(null);

  // Debounce the search query with a delay of 1 second
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);

  // Function to fetch news data
  const fetchNews = async (category, query = "") => {
    try {
      setIsLoading({
        active: true,
        message: "Fetching news for you! Please wait...",
      });

      // Construct URL based on category and search query
      const url = query
        ? `http://localhost:8000/v2/search?q=${query}`
        : `http://localhost:8000/v2/top-headlines?category=${
            !category ? "general" : category
          }`;

      // Fetch news data from the API
      const response = await fetch(url);

      // Check if response is successful
      if (!response.ok) {
        // If not successful, throw an error
        const errorMessage = `No News found For This Category || Status - ${response.status}`;
        throw new Error(errorMessage);
      } else {
        setError(null);
      }

      // Parse response data and set news state
      const data = await response.json();
      setNews(data);
    } catch (err) {
      // Catch and handle errors
      setError(err);
    } finally {
      // Reset loading status
      setIsLoading({ active: false, message: "" });
    }
  };

  // Effect to fetch news data when the debounced search query changes
  useEffect(() => {
    if (debouncedSearchQuery !== "") {
      fetchNews(null, debouncedSearchQuery);
    } else {
      // If search query is empty, fetch news for the default category
      fetchNews();
    }
  }, [debouncedSearchQuery]);

  // Return news data, fetch function, search query state, loading state, and error
  return { news, fetchNews, searchQuery, setSearchQuery, isLoading, error };
};

export default useNewsQuery;
