import { NewsContext } from "../context/all-contexts";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  // Destructuring news, isLoading, and error from the custom hook
  const { news, fetchNews, isLoading, error } = useNewsQuery();

  // Rendering NewsContext.Provider to provide news-related data to its children
  return (
    <>
      <NewsContext.Provider value={{ news, fetchNews, isLoading, error }}>
        {children}
      </NewsContext.Provider>
    </>
  );
};

export default NewsProvider;
