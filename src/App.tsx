import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import { AllRoutes } from "./utils/AllRoutes";
function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full min-h-screen bg-black text-white">
        <div className="container w-full h-full flex justify-center items-center relative">
          <AllRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
