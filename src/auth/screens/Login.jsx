import AuthLayout from "../../layouts/Authlayout";
import HeroSection from "../components/HeroSection";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <>
      <AuthLayout
        hero={
          <HeroSection
            title={"Continue building healthier habits"}
            description={
              "Access your personalized meal plans, track micronutrients, and get real-time feedback from our AI nutritionists."
            }
            image={"/loginHero.png"}
          />
        }
      >
        <LoginForm />
      </AuthLayout>
    </>
  );
}
