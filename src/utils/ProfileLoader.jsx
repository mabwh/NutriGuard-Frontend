import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getHealthProfile } from "../api/createHealthProfile";
import { profileStore } from "../store/profile";
import { getHealthRisk } from "./nutritionCalculations";

export default function ProfileLoader() {
  const profile = profileStore((state) => state.profile);
  const setProfile = profileStore((state) => state.setProfile);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getHealthProfile();

        if (response.isSuccess) {
          const { height, weight, waist } = response.data;
          let risk = null;
          if (height > 0 && weight > 0 && waist > 0) {
            const heightInMeters = height / 100;

            const bmi = weight / (heightInMeters * heightInMeters);

            const whtr = waist / height;

            risk = getHealthRisk(bmi, whtr);
          }

          setProfile({
            ...response.data,
            healthRiskLevel: risk,
          });
        }
      } catch (error) {
        // OLD CODE - kept intentionally for safety.
        // console.log(error.response?.data);

        // NEW CODE:
        // The Backend Axios interceptor clears rejected refresh-token auth state.
        // ProtectedRoutes then redirects the user to login without logging expected auth failures.
        void error;
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [setProfile]);
  if (loading) {
    return null;
  }
  if (profile?.healthRiskLevel?.level === "High Risk") {
    navigate("/health-risk");
  }

  return <Outlet />;
}
