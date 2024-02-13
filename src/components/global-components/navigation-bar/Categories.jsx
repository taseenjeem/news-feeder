const Categories = () => {
  const newsCategories = [
    { id: crypto.randomUUID(), name: "General" },
    { id: crypto.randomUUID(), name: "Business" },
    { id: crypto.randomUUID(), name: "Entertainment" },
    { id: crypto.randomUUID(), name: "Health" },
    { id: crypto.randomUUID(), name: "Science" },
    { id: crypto.randomUUID(), name: "Sports" },
    { id: crypto.randomUUID(), name: "Technology" },
    { id: crypto.randomUUID(), name: "Environment" },
    { id: crypto.randomUUID(), name: "Education" },
    { id: crypto.randomUUID(), name: "Fashion" },
    { id: crypto.randomUUID(), name: "Food" },
    { id: crypto.randomUUID(), name: "Travel" },
    { id: crypto.randomUUID(), name: "Art & Culture" },
    { id: crypto.randomUUID(), name: "Opinion" },
  ];

  return (
    <>
      <div className="container mx-auto mt-6">
        <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
          {newsCategories.map((item) => (
            <li key={item.id}>
              <a href="#">{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
