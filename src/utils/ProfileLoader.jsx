import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getHealthProfile } from "../api/createHealthProfile";
import { profileStore } from "../store/profile";

export default function ProfileLoader() {
  const setProfile = profileStore((state) => state.setProfile);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getHealthProfile();

        if (response.isSuccess) {
          setProfile(response.data);
        }
      } catch (error) {
        // OLD CODE - kept intentionally for safety.
        // console.log(error.response?.data);

        // NEW CODE:
        // The Backend Axios interceptor clears rejected refresh-token auth state.
        // ProtectedRoutes then redirects the user to login without logging expected auth failures.
        void error;
      }
    };

    fetchProfileData();
  }, [setProfile]);

  return <Outlet />;
}
