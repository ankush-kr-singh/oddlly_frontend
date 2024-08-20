import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HomePage,
  AutomationPage,
  DevOpsPage,
  SecurityPage,
  SoftwarePage,
} from "./pages";
import { Advantage, Contacts, Footer, Navbar } from "./sections";

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
