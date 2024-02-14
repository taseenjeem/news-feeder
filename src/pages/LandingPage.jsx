import { useContext } from "react";
import { NewsContext } from "../context/all-contexts";
import ErrorMessage from "../components/page-components/landing-page/ErrorMessage";
import LoadingMessage from "../components/page-components/landing-page/LoadingMessage";
import NewsList from "../components/page-components/landing-page/NewsList";

const LandingPage = () => {
  const { news, isLoading, error } = useContext(NewsContext);

  let newsItems;

  if (news && news?.result) {
    newsItems = news?.result.map((item) => item);
  } else if (news && news.articles) {
    newsItems = news?.articles.map((item) => item);
  }

  console.log(newsItems);

  return (
    <>
      <>
        {error ? (
          <ErrorMessage message={`Error: ${error.message}`} />
        ) : isLoading.active ? (
          <LoadingMessage message={isLoading.message} />
        ) : (
          <NewsList newsItems={newsItems} />
        )}
      </>
    </>
  );
};

export default LandingPage;
