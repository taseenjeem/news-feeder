import { useEffect, useState } from "react";

const useNewsQuery = () => {
  // State to store news data
  const [news, setNews] = useState(null);

  // State to manage loading state with status and message
  const [isLoading, setIsLoading] = useState({
    status: false,
    message: "",
  });

  // State to handle errors
  const [error, setError] = useState(null);

  // Function to fetch news data
  const fetchNews = async () => {
    try {
      // Set loading status and message
      setIsLoading({
        ...isLoading,
        status: true,
        message: "Fetching news for you! Please wait...",
      });

      // Fetch news data from API
      const response = await fetch("http://localhost:8000/v2/top-headlines");

      // Check if response is successful
      if (!response.ok) {
        // If not successful, throw an error
        const errorMessage = `Fetching news failed: Error status - ${response.status}`;
        throw new Error(errorMessage);
      }

      // Parse response data
      const data = await response.json();

      // Set news data
      setNews(data);
    } catch (err) {
      // Catch and handle errors
      setError(err);
    } finally {
      // Reset loading status
      setIsLoading({
        ...isLoading,
        status: false,
        message: "",
      });
    }
  };

  // useEffect hook to fetch news data when the component mounts
  useEffect(() => {
    fetchNews();
  }, []);

  // Return news data, loading state, and error
  return { news, isLoading, error };
};

export default useNewsQuery;
