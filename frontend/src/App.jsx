import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import DataPage from "./pages/dataPage/DataPage";
import DetailDataPage from "./pages/detailDataPage/DetailDataPage";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/details/:clinicId" element={<DetailDataPage />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
