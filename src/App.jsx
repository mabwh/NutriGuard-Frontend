import { Route, Routes } from "react-router-dom";
import Login from "./auth/screens/Login";
import Home from "./pages/Home";
import Forgetpassword from "./auth/screens/Forgetpassword";
import Signup from "./auth/screens/Signup";
import MainLayout from "./layouts/Mainlayout";
import Dashboard from "./pages/Dashboard";
import CreateHealthProfile from "./pages/CreateHealthProfile";
import LoggedInlayout from "./layouts/LoggedInlayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/create-health-profile"
            element={<CreateHealthProfile />}
          />
        </Route>
        <Route element={<LoggedInlayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
      </Routes>
    </>
  );
}
