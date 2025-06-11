import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import AssinePage from "./Pages/AssinePage/index.tsx";
import Host from "./Pages/Hosting/index.tsx";
import Sms from "./Pages/Sms/index.tsx";
import Error404 from "./Pages/Error404/Error404.tsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/assine" element={<AssinePage />} />
        <Route path="/hospedagem" element={<Host />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
