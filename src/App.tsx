import Navbar from "./Navbar";
import AutomationPage from "./pages/Devops/AutomationPage";
import DevOpsPage from "./pages/Devops/DevOpsPage";
import SecurityPage from "./pages/Devops/SecurityPage";
import SoftwarePage from "./pages/Devops/SoftwarePage";
import Advantage from "./pages/Home/Advantage";
import Contacts from "./pages/Home/Contacts";
import Footer from "./pages/Home/Footer";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-fit font-inter  gap-10 ">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/devops" element={<DevOpsPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/software" element={<SoftwarePage />} />
          <Route path="/automation" element={<AutomationPage />} />
        </Routes>
        <Advantage />
        <Contacts />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
