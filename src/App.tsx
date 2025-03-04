import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import * as Pages from "./pages/index";
import { DarkModeProvider } from "./DarkModeContext";

function App() {
  return (
  <DarkModeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/wb" element={<Pages.Whiteboard />} />
        <Route path="/project_archive" element={<Pages.ProjectArchive />} />
        {/* <Route path="/contact" element={<Pages.PageNotFound/>} /> */}
        <Route path="*" element={<Pages.PageNotFound/>} />
      </Routes>
    </Router>
  </DarkModeProvider>
  );
}

export default App;
