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
        console.log(error.response?.data);
      }
    };

    fetchProfileData();
  }, [setProfile]);

  return <Outlet />;
}
