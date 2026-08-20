import { FaBriefcaseMedical, FaCircleInfo } from "react-icons/fa6";
import Button from "../components/Button";
import { MdOutlineSupportAgent } from "react-icons/md";
import { logout } from "../auth/api/auth";
import { authStore } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { FaMoon } from "react-icons/fa6";


export default function HealthRisk() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      console.log("CLEARING AUTH FROM handleLogout from health risk page");
      authStore.getState().clearAuth();
      navigate("/");
    } catch (error) {
      console.log("Logout failed:\n", error);
    }
  };
  return (
    <div className="px-5 py-10">
      <main className="w-full max-w-150 mx-auto bg-surface-container rounded-2xl ambient-shadow p-8 md:p-12 text-center border border-border relative overflow-hidden">
        {/*  Subtle Background Glow  */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-error/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        {/*  Brand/Icon  */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-error/10 flex items-center justify-center border border-error/20">
            <FaMoon size={40} className="text-error rotate-18" />
          </div>
        </div>
        {/*  Header  */}
        <div className="mb-6 space-y-4">
          <h1 className="headline-lg-mobile md:headline-lg text-headline-lg-mobile md:text-headline-lg text-text-primary">
            Your Health Risk Level Is High
          </h1>
        </div>
        {/*  Content  */}
        <div className="mb-10 space-y-6 text-left md:text-center">
          <p className="body-lg text-text-secondary max-w-3xl mx-auto">
            Based on the health information you provided, we recommend speaking
            with a qualified doctor or healthcare professional before
            continuing.
          </p>
          <div className="bg-surface p-4 rounded-lg border border-border text-left">
            <div className="flex items-start gap-3">
              <FaCircleInfo
                size={40}
                className="text-primary mt-0.5 hidden md:block"
              />

              <p className="body-sm text-text-secondary text-center">
                This result is intended to help you take the right next step. A
                healthcare professional can provide advice based on your
                individual situation.
              </p>
            </div>
          </div>
        </div>
        {/*  Actions  */}
        <div className="flex flex-col  gap-4 justify-center items-center px-10">
          <Button className="w-full flex justify-center items-center md:gap-3 whitespace-nowrap">
            <MdOutlineSupportAgent size={30} className="hidden md:block" />
            Contact Support
          </Button>
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="border border-text-secondary"
          >
            Log Out
          </Button>
        </div>
      </main>
    </div>
  );
}
