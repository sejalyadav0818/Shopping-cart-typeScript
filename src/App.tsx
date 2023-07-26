import { Container } from "react-bootstrap"
import { Navigate, Route, Routes } from "react-router-dom"
import { Store } from "./pages/Store"
import { Home } from "./pages/Home"
import About from "./pages/About"
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from "./components/NavBar"
function App() {
  return (
    <Container className="mb-4">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
