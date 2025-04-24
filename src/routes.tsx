import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import AssinePage from "./Pages/AssinePage/index.tsx";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assine" element={<AssinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
