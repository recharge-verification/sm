import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Ajoutez ceci pour gérer les 404 */}
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}
export default App