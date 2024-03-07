import { BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitter,
} from "react-icons/bs";
import { FaFeatherAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const navigate = useNavigate();

  const signOutHandle = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      localStorage.removeItem("auth");
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  };

  const authInfoString = localStorage.getItem("auth");
  const authInfo = authInfoString ? JSON.parse(authInfoString) : null;
  const currentUserPhoto = authInfo ? authInfo.profilePhoto : null;
  const currentUserName = authInfo ? authInfo.name : null;
  const currentUserEmail = authInfo ? authInfo.email : null;

  const NAVIGATION_ITEMS = [
    {
      title: "Twitter",
      icon: BsTwitter,
    },
    {
      title: "Home",
      icon: MdHomeFilled,
    },
    {
      title: "Explore",
      icon: FiSearch,
    },
    {
      title: "Notifications",
      icon: BsBell,
    },
    {
      title: "Messages",
      icon: BsEnvelope,
    },
    {
      title: "Bookmarks",
      icon: BsBookmark,
    },
    {
      title: "Profile",
      icon: BiUser,
    },
  ];

  return (
    <>
      <section className="sticky top-0 w-fit flex flex-col items-center xl:items-stretch h-screen screen:ps-6 xl:pe-3 max-h-full overflow-y-auto space-y-16 ps-2 pb-4 scrollbar-hide">
        <div className="flex flex-col xl:pe-3 items-center xl:items-stretch h-full space-y-3 my-2 w-fit xl:w-full">
          {NAVIGATION_ITEMS.map((item, index) => (
            <a
              href={`/${item?.title.toLocaleLowerCase()}`}
              key={index}
              className={`surfing-link-hover ${
                index === 1 ? "active" : ""
              } text-[22px] flex items-center justify-start space-x-4 rounded-3xl p-2 w-fit`}
            >
              <div className="w-fit mx-auto flex items-center">
                <item.icon size={28} />
              </div>
              {item?.title !== "Twitter" && (
                <div className="text-[20px] pe-6 hidden xl:flex">
                  {<span>{item?.title}</span>}
                </div>
              )}
            </a>
          ))}
          <button className="xl:min-w-[220px] w-fit p-3 max-w-full m-2 text-lg btn-primary mx-3">
            <span className="hidden xl:flex w-fit mx-auto">Post</span>
            <span className="flex xl:hidden">
              <FaFeatherAlt size={25} />
            </span>
          </button>
        </div>
        <button className="rounded-full flex items-center space-x-2 bg-transparent p-3 text-center surfing-link-hover transition duration-200 xl:w-[100%] w-full h-fit xl:max-w-full justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10">
              <img
                src={currentUserPhoto}
                alt="userPhoto"
                style={{
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="text-left text-sm hidden xl:flex xl:flex-col">
              <div className="font-semibold whitespace-nowrap">
                <span className=" text-md">{currentUserName}</span>
              </div>
              <span className="text-userColor">{currentUserEmail}</span>
              <span
                className="text-userCo text-xs cursor-pointer flex justify-start"
                onClick={signOutHandle}
              >
                Sign out
              </span>
            </div>
          </div>
          <div className="hidden xl:flex">
            <BsThreeDots />
          </div>
        </button>
      </section>
    </>
  );
}
