import AuthLayout from "../../layouts/Authlayout";
import HeroSection from "../components/HeroSection";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <>
      <AuthLayout
        reverse
        hero={
          <HeroSection
            title="Start Your Wellness Journey"
            description="Receive personalized meal plans, AI nutrition guidance, and healthy recommendations tailored specifically for you. "
            image="/signupHero.png"
          />
        }
      >
        <SignupForm />
      </AuthLayout>
    </>
  );
}
