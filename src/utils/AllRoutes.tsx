import LeftSideBar from "@/components/LeftSidebar";
import RightSection from "@/components/RightSection";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainApp from "../MainApp";
import SignUp from "../components/pages/SignUp";
import { auth } from "../firebaseConfig/firebase";
import PageNotFound from "./PageNotFound";
export const AllRoutes = () => {
  // console.log(auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={isAuthenticated ?
          <div className="max-w-screen-lg laptop:max-w-screen-xl w-full h-full flex flex-row justify-center relative">
            <LeftSideBar />
            <MainApp />
            <RightSection />
          </div>
          : <SignUp />} />
        {/* <Route path="/" element={<MainApp />} /> */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={
          <div className="max-w-screen-lg laptop:max-w-screen-xl w-full h-full flex flex-row justify-center relative">
            <LeftSideBar />
            <PageNotFound />
            <RightSection />
          </div>
        } />
      </Routes>
    </div>
  );
};
