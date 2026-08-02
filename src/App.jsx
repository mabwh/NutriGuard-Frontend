import { Route, Routes } from "react-router-dom";
import Login from "./auth/screens/Login";
import Home from "./pages/Home";
import Forgetpassword from "./auth/screens/Forgetpassword";
import Signup from "./auth/screens/Signup";
import MainLayout from "./layouts/Mainlayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
      </Routes>
    </>
  );
}
