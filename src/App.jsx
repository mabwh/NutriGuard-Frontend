import { Route, Routes } from "react-router-dom";
import Login from "./auth/screens/Login";
import Home from "./pages/Home";
import Forgetpassword from "./auth/screens/Forgetpassword";
import Signup from "./auth/screens/Signup";
import MainLayout from "./layouts/Mainlayout";
import Dashboard from "./pages/Dashboard";
import CreateHealthProfile from "./pages/CreateHealthProfile";
import LoggedInlayout from "./layouts/LoggedInlayout";
import Profile from "./profile/screens/Profile";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import AiChat from "./pages/AiChat";
import ProfileLoader from "./utils/ProfileLoader";
import DailyMeals from "./pages/DailyMeals";
import NotFound from "./pages/NotFound";
import Settings from "./profile/screens/Settings";
import MealDetails from "./pages/MealDetails";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoutes />}>
          <Route path="/create-health-profile" element={<CreateHealthProfile />}/>
          <Route element={<LoggedInlayout />}>
            <Route element={<ProfileLoader />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat" element={<AiChat />} />
              <Route path="/meals" element={<DailyMeals />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/meal-details" element={<MealDetails />} />



            </Route>
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<Forgetpassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
