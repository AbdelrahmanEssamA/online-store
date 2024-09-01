import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/shared/Login";
import Products from "./pages/customer/Products";
import NavBar from "./components/NavBar";

function App() {
  const token = localStorage.getItem("token");
  console.log(token);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
