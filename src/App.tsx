import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import * as Pages from "./pages/index";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Pages.Home />} />

|    <Route path="/about" element={<Pages.About />} />
      <Route path="/projects" element={<Pages.Projects />} />
      <Route path="/resume" element={<Pages.Resume />} />

      {/* <Route path="/contact" element={<Pages.PageNotFound/>} /> */}
      <Route path="*" element={<Pages.PageNotFound/>} />
    </Routes>
  </Router>
  );
}

export default App;
