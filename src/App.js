import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import DiffPage from "./pages/DiffPage/DiffPage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import EditorPage from "./pages/EditorPage/EditorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/commit" element={<DiffPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
