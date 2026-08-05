import { FcGoogle } from "react-icons/fc";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Divider from "./Divider";
import SocialButton from "./SocialButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackendErrorMessage from "../../components/BackendErrorMessage";
//api
import { signup } from "../api/auth.js";

export default function SignupForm() {
  const [backendError, setBackendError] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      console.log("data sent to api", data);
      const reply = await signup(data);
      if (reply.isSuccess) {
        //redirect to login to begin session
        navigate("/login", {
          state: {
            successMessage: `Your account has been created successfully.
             Please log in to continue.`,
          },
        });
      }
    } catch (error) {
      console.log(error.response?.data);
      //when email already exists
      setBackendError(error.response?.data?.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <BackendErrorMessage message={backendError} />
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Create Account
          </h1>

          <p className="mt-2 text-text-secondary">
            Join NutriGuard today and take control of your nutrition
          </p>
        </div>

        <Input
          id="fullName"
          name="fullName"
          type="text"
          label="Name"
          placeholder="Enter your email"
          {...register("fullName")}
          error={errors.fullName?.message}
        />

        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" disabled={isSubmitting}>
          Create Account
        </Button>

        <Divider />

        <SocialButton icon={<FcGoogle size={20} />}>
          Continue with Google
        </SocialButton>

        <p className="text-center text-sm text-text-secondary">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            type="button"
            className="font-semibold text-primary hover:underline"
          >
            Log In
          </button>
        </p>
      </form>
    </>
  );
}
