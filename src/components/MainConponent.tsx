import { BiBarChart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaRegBookmark, FaRegComment, FaRegHeart } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FiSettings, FiShare } from "react-icons/fi";
import { LuDot, LuMapPin, LuRepeat2 } from "react-icons/lu";
import { MdOutlineGifBox } from "react-icons/md";
import { RiGalleryLine, RiListCheck2 } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

export default function MainComponent() {
  const authInfoString = localStorage.getItem("auth");
  const authInfo = authInfoString ? JSON.parse(authInfoString) : null;
  const currentUserPhoto = authInfo ? authInfo.profilePhoto : null;
  const currentUserName = authInfo ? authInfo.name : null;
  const currentUserEmail = authInfo ? authInfo.email : null;
  return (
    <main className=" flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600/50">
      <nav className="fixed bg-black backdrop-blur-sm bg-opacity-55 font-semibold z-40 w-[600px] flex flex-row text-center border-b-[0.5px] border-r-[0.5px] twitter-border-color text-sm h-[55px]">
        <a href={"#"} className="h-full w-full ">
          <div className=" h-full w-full px-4 pt-4 select-none hover:bg-blue-200 transition duration-200 hover:bg-opacity-15 cursor-pointer">
            <span className="border-b-4 border-blue-400 py-4">For you</span>
          </div>
        </a>
        <a href={"#"} className="h-full w-full">
          <div className="w-full h-full px-4 pt-4 select-none hover:bg-blue-200 transition duration-200 hover:bg-opacity-15 cursor-pointer font-semibold text-gray-500">
            <span className="border-b-4 border-transparent py-4">
              Following
            </span>
          </div>
        </a>
        <div className="flex items-center justify-center p-2">
          <a
            href={"#"}
            className="p-2 h-fit w-full hover:bg-blue-200 transition duration-200 hover:bg-opacity-15 cursor-pointer rounded-full"
          >
            <FiSettings />
          </a>
        </div>
      </nav>
      <div className="mt-[55px] border-t-[0.5px] border-b-[0.5px] border-gray-600/50 min-h-28 pt-2 px-2 space-y-3 relative flex flex-row">
        {/* logo section */}
        <div className="p-2">
          <div className="w-10 h-10 bg-slate-400 rounded-full">
            <img
              src={currentUserPhoto}
              alt="photo"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
        {/* input section */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center text-xl">
            <input
              type="text"
              placeholder="What's happening?!"
              className="w-full h-full bg-transparent p-1 outline-none border-none placeholder:text-gray-500"
            />
          </div>
          <div className="w-full flex flex-row justify-between my-2 py-2">
            <div className="flex flex-row text-primary">
              <div className="icon-hover hover:bg-blue-500 hover:bg-opacity-20">
                <RiGalleryLine className="w-[1.2rem] h-[1.2rem]" />
              </div>
              <div className="icon-hover hover:bg-blue-500 hover:bg-opacity-20">
                <MdOutlineGifBox className="w-[1.2rem] h-[1.2rem]" />
              </div>
              <div className="icon-hover hover:bg-blue-500 hover:bg-opacity-20">
                <RiListCheck2 className="w-[1.2rem] h-[1.2rem]" />
              </div>
              <div className="icon-hover hover:bg-blue-500 hover:bg-opacity-20">
                <FaRegFaceSmile className="w-[1.2rem] h-[1.2rem]" />
              </div>
              <div className="icon-hover hover:bg-blue-500 hover:bg-opacity-20">
                <SlCalender className="w-[1.2rem] h-[1.2rem]" />
              </div>
              <div className="icon-hover hover:bg-blue-500 hover:bg-opacity-20">
                <LuMapPin className="w-[1.2rem] h-[1.2rem]" />
              </div>
            </div>
            <button className="btn-primary p-2 px-5 text-sm">Post</button>
          </div>
        </div>
      </div>

      {/* Posts Section */}

      <div className="posts flex flex-col">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-row border-t-[0.5px] twitter-border-color"
          >
            <div className="userIcon p-3 pe-1">
              <div className="w-10 h-10 bg-slate-400 rounded-full">
                <img
                  src={currentUserPhoto}
                  alt="currentUserPhoto"
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
            <div className="postContent p-1 px-2 w-full">
              <header className="flex flex-row w-full items-center justify-between">
                <div className="flex flex-row items-center space-x-1">
                  <p className="font-bold text-sm">{currentUserName}</p>
                  <p className="text-sm text-gray-500">{currentUserEmail}</p>
                  <p className="text-sm text-gray-500">
                    <LuDot />
                  </p>
                  <p className="text-sm text-gray-500">1h</p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="icon-hover text-gray-500 hover:bg-blue-500 hover:text-blue-500 hover:bg-opacity-25">
                    <BsThreeDots size={17} />
                  </p>
                </div>
              </header>
              <div className="postText pe-2 space-y-3">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique, consequuntur. Quos at, minus voluptate placeat
                  beatae eligendi aliquid deleniti ad, fugiat provident
                  veritatis inventore libero id, hic omnis tenetur sapiente
                  similique sunt distinctio repudiandae nemo quasi.
                </p>
                {/* Post Image */}
                <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
              </div>
              {/* Icons */}
              <div className="flex flex-row w-full justify-between space-x-1 py-3 text-slate-500">
                <div className="icon-hover hover:bg-blue-500 hover:text-blue-500 hover:bg-opacity-25">
                  <FaRegComment size={15} />
                  <p className="absolute ms-[20px]">2</p>
                </div>
                <div className="icon-hover hover:bg-green-500 hover:text-green-500 hover:bg-opacity-25">
                  <LuRepeat2 size={20} />
                  <p className="absolute ms-[23px]">10</p>
                </div>
                <div className="icon-hover hover:bg-pink-500 hover:text-pink-500 hover:bg-opacity-25">
                  <FaRegHeart size={15} />
                  <p className="absolute ms-[20px]">17</p>
                </div>
                <div className="icon-hover hover:bg-blue-500 hover:text-blue-500 hover:bg-opacity-25">
                  <BiBarChart size={20} />
                  <p className="absolute ms-[23px]">188K</p>
                </div>
                <div className="flex flex-row ">
                  <div className="icon-hover hover:bg-blue-500 hover:text-blue-500 hover:bg-opacity-25">
                    <FaRegBookmark size={15} />
                  </div>
                  <div className="icon-hover hover:bg-blue-500 hover:text-blue-500 hover:bg-opacity-25">
                    <FiShare size={15} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
