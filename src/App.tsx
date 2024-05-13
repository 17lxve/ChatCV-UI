import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AppliancePage, CandidateList, ChatPage } from "./pages";
import { NavBar } from "./components";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/candidate-list" replace />}
        ></Route>
        <Route path="/candidate-list" element={<CandidateList />}></Route>
        <Route path="/apply" element={<AppliancePage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
