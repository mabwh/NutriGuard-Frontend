import React from "react";
import { MdEdit } from "react-icons/md";
import { MdAccessibilityNew } from "react-icons/md";
import Card from "../../components/Card";
import Button from "../../components/Button";
import pfp from "../../../public/user.jpg";
import { IoSave } from "react-icons/io5";
import { authStore } from "../../store/auth";
import { logout } from "../../auth/api/auth";
import { useNavigate } from "react-router-dom";

function ProfileCard({ setProfileEdit, profileEdit, submitRef, isFormValid }) {
  const user = authStore((state) => state.user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      authStore.getState().clearAuth();
      navigate("/");
    } catch (error) {
      console.log("Logout failed:\n", error);
    }
  };
  return (
    <>
      <Card className="md:col-span-4 flex flex-col items-center text-center h-full">
        {/* Profile Photo */}
        <div class="relative w-32 h-32 mb-4">
          <img class="w-full h-full rounded-full object-cover" src={pfp} />

          {/* Photo Edit button */}

          <Button round={true} className="absolute bottom-1 right-1  border">
            <MdEdit className="text-headline-sm" />
          </Button>
        </div>

        {/* Full Name */}

        <h2 class="text-2xl font-semibold">{user.name}</h2>

        {/* Email */}

        <p class="mb-6">{user.email}</p>

        {/* Edit Profile Button */}

        <Button
          onClick={() => {
            if (profileEdit) {
              const valid = submitRef.current?.();
              if (!valid) return;
            }
            setProfileEdit(!profileEdit);
          }}
          className="w-full py-3 border rounded-md flex items-center justify-center gap-2 mb-3"
        >
          {!profileEdit ? (
            <>
              <MdAccessibilityNew /> Edit Health Profile
            </>
          ) : (
            <>
              <IoSave /> Save profile updates
            </>
          )}
        </Button>

        <Button
          onClick={handleLogout}
          variant="ghost"
          className="border border-text-secondary"
        >
          Log Out
        </Button>

        {profileEdit && (
          <Button
            onClick={() => setProfileEdit(!profileEdit)}
            className="w-full py-3 border rounded-md flex items-center justify-center gap-2"
            variant="secondary"
          >
            Discard Changes
          </Button>
        )}
      </Card>
    </>
  );
}

export default ProfileCard;
