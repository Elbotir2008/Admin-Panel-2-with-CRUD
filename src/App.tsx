import { BrowserRouter } from "react-router-dom";
import { Route, Router, Routes } from "react-router";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Students from "./pages/students/Students";
import Payments from "./pages/payments/Payments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
