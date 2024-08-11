import Navbar from "./Navbar";
import DevOpsPage from "./pages/Devops/DevOpsPage";
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
          {/* <Route path="/security" element={<Security />} /> */}
          {/* <Route path="/software" element={<Software />} /> */}
          {/* <Route path="/automation" element={<Automation />} /> */}
        </Routes>
        <Advantage />
        <Contacts />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
