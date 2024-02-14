import NewsItem from "./NewsItem";

const NewsList = ({ newsItems }) => {
  return (
    <>
      {newsItems?.length > 0 ? (
        newsItems.map((item) => (
          <NewsItem key={item.title} title={item.title} />
        ))
      ) : (
        <div className="min-h-[80vh] flex justify-center items-center text-lg font-semibold text-red-500">
          Sorry! No news found.
        </div>
      )}
    </>
  );
};

export default NewsList;
