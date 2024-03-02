import { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { auth } from "../firebaseConfig/firebase";
import { onAuthStateChanged } from "firebase/auth";
import MainApp from "../MainApp";
import SignUp from "../components/pages/SignUp";
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
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <MainApp /> : <SignUp />} />
        {/* <Route path="/" element={<MainApp />} /> */}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
