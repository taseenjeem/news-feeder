import AsideNews from "./AsideNews";
import MainNewsLayout from "./MainNewsLayout";

const NewsList = ({ newsItems }) => {
  // Filter news items with description
  const newsWithDescription = newsItems?.filter((item) => item.description);

  // Filter news items without description
  const newsWithoutDescription = newsItems?.filter((item) => !item.description);

  return (
    <>
      <main className="my-10 lg:my-14">
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* Render main news layout with news items having description */}
          <MainNewsLayout newsWithDescription={newsWithDescription} />
          {/* Render aside news with news items without description */}
          <AsideNews newsWithoutDescription={newsWithoutDescription} />
        </div>
      </main>
    </>
  );
};

export default NewsList;
