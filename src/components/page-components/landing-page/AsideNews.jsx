import thumb from "../../../assets/thumb.png";

const AsideNews = ({ newsWithoutDescription }) => {
  // Find the first item with urlToImage
  const itemWithImage = newsWithoutDescription.find((item) => item.urlToImage);

  // Separate items with and without image
  const itemsWithoutImage = newsWithoutDescription.filter(
    (item) => !item.urlToImage
  );

  // Function to format the date
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
      {/* right */}
      <div className="col-span-12 self-start xl:col-span-4">
        <div className="space-y-6">
          {/* news item */}
          <div className="col-span-12 mb-6 md:col-span-8">
            <img
              className="w-full"
              src={
                itemWithImage?.urlToImage ? itemWithImage?.urlToImage : thumb
              }
              alt="thumb"
            />
          </div>
          {/* info */}
          {itemsWithoutImage?.map((item) => (
            <div
              key={item.title}
              className="col-span-12 mt-6 md:col-span-4 border-b-2 border-[#D5D1C9]"
            >
              <a
                href={item.urlToImage}
                target="_blank"
                className="cursor-pointer"
              >
                <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                  {item.title}
                </h3>
              </a>
              <p className="text-base text-[#292219]">{item.content}</p>
              <p className="mt-5 text-base text-[#94908C]">
                {formatDate(item.publishedAt)}
              </p>
            </div>
          ))}

          {/* news item ends */}
        </div>
      </div>
    </>
  );
};

export default AsideNews;
