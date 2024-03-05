
const PageNotFound = () => {
  return (
    <div className="w-[600px] flex flex-col items-center py-10 my-14 space-y-4 text-gray-500">
      <p className=" text-sm text-wrap text-center">
        Hmm...this page doesn&apos;t exist. Try searching for something else.
      </p>
      <button className="xl:min-w-[220px] w-fit p-1 text-white px-3 max-w-full m-2 font-semibold mx-auto text-md btn-primary">
        Search
      </button>
    </div>
  );
};

export default PageNotFound;
