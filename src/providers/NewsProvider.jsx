import { NewsContext } from "../context/all-contexts";
import useNewsQuery from "../hooks/useNewsQuery";

const NewsProvider = ({ children }) => {
  const { news, isLoading, error } = useNewsQuery();

  return (
    <>
      <NewsContext.Provider value={{ news, isLoading, error }}>
        {children}
      </NewsContext.Provider>
    </>
  );
};

export default NewsProvider;
