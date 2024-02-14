import thumb1 from "../assets/thumb_lg.png";
import thumb2 from "../assets/thumb.png";
import { useContext } from "react";
import { NewsContext } from "../context/all-contexts";

const LandingPage = () => {
  const { news, isLoading, error } = useContext(NewsContext);

  let eachNews;

  if (news && news?.result) {
    eachNews = news?.result.map((item) => item);
  } else if (news && news.articles) {
    eachNews = news?.articles.map((item) => item);
  }

  console.log(eachNews);

  return (
    <>
      {error ? (
        <div className="min-h-[80vh] flex justify-center items-center text-lg font-semibold text-red-500">
          Error: {error.message}
        </div>
      ) : isLoading.active ? (
        <div className="min-h-[80vh] flex justify-center items-center text-lg font-semibold">
          <p>{isLoading.message}</p>
        </div>
      ) : (
        <>
          {eachNews?.map((i) => (
            <h1 key={i.title}> {i.title}</h1>
          ))}
        </>
      )}
    </>
  );
};

export default LandingPage;
