import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import RootPage from "./Layout/RootPage";
import Index from "./pages/index/Index";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route index element={<Index />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
