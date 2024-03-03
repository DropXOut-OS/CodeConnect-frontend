import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import { AllRoutes } from "./utils/AllRoutes";
function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
