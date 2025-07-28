import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/users/Login"

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/users/login" element={<Login />} />
        {/* Ajoutez ceci pour gérer les 404 */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}
export default App