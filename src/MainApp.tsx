import LeftSideBar from "./components/LeftSidebar";
import MainComponent from "./components/MainConponent";
import RightSection from "./components/RightSection";
import "./css/styles.css";

function MainApp() {
  return (
    <div className="h-full w-full min-h-screen bg-black text-white">
      <div className="container w-full h-full flex justify-center items-center relative">
        <div className="max-w-screen-lg laptop:max-w-screen-xl w-full h-full flex flex-row justify-center relative">
          <LeftSideBar />
          <MainComponent />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default MainApp;
