import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/users/Login"

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/users/login" element={<Login />} />
        {/* Ajoutez ceci pour gérer les 404 */}
        <Route path="/" element={<Navigate to="/users/login" replace />} />
      </Routes>
    </Router>
  )
}
export default App