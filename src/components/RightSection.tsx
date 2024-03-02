import { BsDot, BsThreeDots } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

export default function RightSection() {
  const authInfoString = localStorage.getItem("auth");
  const authInfo = authInfoString ? JSON.parse(authInfoString) : null;
  const currentUserPhoto = authInfo ? authInfo.profilePhoto : null;
  const currentUserName = authInfo ? authInfo.name : null;
  const currentUserEmail = authInfo ? authInfo.email : null;

  return (
    <section className="sticky top-0 h-screen flex flex-col space-y-4 right-0 p-1 pe-0 ps-2 laptop:ps-8 max-h-full overflow-y-auto scrollbar-hide">
      {/* Search box section */}
      <div>
        <div className="relative w-full h-full">
          <input
            type="text"
            id="searchBox"
            placeholder="Search"
            className="outline-none bg-[#202327] focus:bg-black placeholder:text-gray-500 placeholder:text-sm w-full h-full rounded-full py-3 px-8 ps-14 peer focus:border-sky-600 focus:border-[1px]"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-5 h-full flex items-center justify-center text-gray-500 peer-focus:text-sky-400"
          >
            <FiSearch className="w-4 h-4" />
          </label>
        </div>
      </div>
      {/* Whats happening section */}
      <div className="bg-dark-gray w-full rounded-2xl">
        <h3 className="text-xl font-bold p-4">What&apos;s happening</h3>
        <div className="flex flex-col">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="hover:bg-white/5 transition duration-75 cursor-pointer p-2 px-4 flex justify-between"
            >
              <div className="space-y-2">
                <div className="flex flex-row space-x-1 text-xs text-neutral-500">
                  <span>Entertainment</span>
                  <BsDot />
                  <span>Trending</span>
                </div>
                <div className="font-semibold text-sm">
                  <h5>#ThisIsGood</h5>
                </div>
                <div className="text-xs text-neutral-500">
                  <span>1.2M posts</span>
                </div>
              </div>
              <div className="p-1 icon-hover hover:bg-blue-500 hover:bg-opacity-10 hover:text-primary text-neutral-500 w-fit h-fit">
                <BsThreeDots size={15} />
              </div>
            </div>
          ))}
          <div className="hover:bg-white/5 transition duration-75 cursor-pointer text-primary text-sm p-4 flex justify-between">
            <p>Show More</p>
          </div>
        </div>
      </div>
      {/* Who to follow */}
      <div className="bg-dark-gray w-full rounded-2xl">
        <h3 className="text-xl font-bold p-4">Who to follow</h3>
        <div className="flex flex-col">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="hover:bg-white/5 transition duration-75 cursor-pointer p-2 px-4 flex justify-between"
            >
              <div className="space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  {/* Logo */}

                  <div className="w-10 h-10 rounded-full bg-slate-500">
                    <img
                      src={currentUserPhoto}
                      alt="currentUserPhoto"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  {/* User info */}
                  <div className="text-xs text-neutral-500">
                    <h5 className="font-semibold text-sm text-white hover:underline">
                      {currentUserName}
                    </h5>
                    <span>{currentUserEmail}</span>
                  </div>
                </div>
              </div>
              <button className="outline-none text-sm bg-white transition hover:bg-slate-300 text-neutral-800 font-semibold p-[0.4rem] px-4 h-fit w-fit rounded-full">
                Follow
              </button>
            </div>
          ))}
          <div className="hover:bg-white/5 transition duration-75 cursor-pointer text-primary text-sm p-4 flex justify-between">
            <p>Show More</p>
          </div>
        </div>
      </div>
    </section>
  );
}
