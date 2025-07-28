import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./users/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/users/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;