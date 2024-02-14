const MainNewsLayout = ({ newsWithDescription }) => {
  // Destructure the newsWithDescription array to get the first four items and the rest
  const [firstItem, secondItem, thirdItem, fourthItem, ...remainingItems] =
    newsWithDescription || [];

  // Function to format the date from a string to a human-readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
        {/* Render the first news item */}
        <div className="col-span-12 grid grid-cols-12 gap-4">
          {/* Render information about the first news item */}
          <div className="col-span-12 lg:col-span-4">
            <a href={firstItem?.url} target="_blank">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {firstItem?.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{firstItem?.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {formatDate(firstItem?.publishedAt)}
            </p>
          </div>
          {/* Render the thumbnail image for the first news item */}
          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={secondItem?.urlToImage} alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">{secondItem?.title}</p>
          </div>
        </div>
        {/* Render the second news item */}
        <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
          {/* Render information about the second news item */}
          <div className="col-span-12 md:col-span-6">
            <a href={thirdItem?.url} target="_blank">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                {thirdItem?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{thirdItem?.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {formatDate(thirdItem?.publishedAt)}
            </p>
          </div>
          {/* Render the thumbnail image for the second news item */}
          <div className="col-span-12 md:col-span-6">
            <img className="w-full" src={fourthItem?.urlToImage} alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">{fourthItem?.title}</p>
          </div>
        </div>
        {/* Render the remaining news items */}
        {remainingItems.map((item) => (
          <div
            key={item?.title} // Use the title as the key for each item
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            {/* Render information about the remaining news items */}
            <div className="col-span-12 md:col-span-4">
              <a href={item?.url} target="_blank">
                <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                  {item?.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{item?.description}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {formatDate(item?.publishedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainNewsLayout;
