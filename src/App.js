import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
  Navigate,
} from "react-router-dom";
import DiffPage from "./pages/DiffPage/DiffPage";
import DocumentsPage from "./pages/DocumentsPage/DocumentsPage";
import EditorPage from "./pages/EditorPage/EditorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { useEffect } from "react";
import { auth } from "./actions/user";
import AppStore from "./store/AppStore";
import { observer } from "mobx-react-lite";

function App() {
  useEffect(() => {
    auth().then((response) => {
      AppStore.setUser(response);
      console.log(response);
      if (!response) {
        document.location = "/login";
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            index
            path="/"
            element={
              AppStore.user?.id ? (
                <Navigate to="/documents" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={
              AppStore.user?.id ? <Navigate to="/documents" /> : <LoginPage />
            }
          />
          <Route
            path="/registration"
            element={
              AppStore.user?.id ? (
                <Navigate to="/documents" />
              ) : (
                <RegistrationPage />
              )
            }
          />
          <Route
            path="/documents"
            element={
              AppStore.user?.id ? <DocumentsPage /> : <Navigate to="/login" />
            }
          />
          <Route path="/editor/:id" element={<EditorPage />} />
          <Route path="/commit" element={<DiffPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default observer(App);
