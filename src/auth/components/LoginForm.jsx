import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import Divider from "../components/Divider";
import SocialButton from "../components/SocialButton";

import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/validation";
import { useNavigate } from "react-router-dom";
//api
import { login } from "../api/auth";
import { useState } from "react";
import BackendErrorMessage from "../../components/BackendErrorMessage";

export default function LoginForm({ successMessage }) {
  const [backendError, setBackendError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors ,isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    try {
      console.log("data sent to api \n", data);
      const reply = await login(data.email, data.password);
      if (reply.isSuccess) {
        //store user in global state
        //rediredt to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error.response?.data);
      setBackendError(
        error.response?.data?.message || "Login failed. Try again ",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <BackendErrorMessage message={backendError} />
      {successMessage && (
        <div className="rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 text-center font-medium mb-3">
          {successMessage}
        </div>
      )}
      <div>
        <h1 className="text-3xl font-bold text-text-primary">Welcome Back</h1>

        <p className="mt-2 text-text-secondary">
          Sign in to continue to NutriGuard.
        </p>
      </div>

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

      <div className="flex items-center justify-between">
        <Checkbox id="remember" name="remember" label="Remember me" />

        <button
          onClick={() => navigate("/forgot-password")}
          type="button"
          className="text-sm font-medium text-primary hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <Button type="submit" disabled={isSubmitting}>Log In</Button>

      <Divider />

      <SocialButton icon={<FcGoogle size={20} />}>
        Continue with Google
      </SocialButton>

      <p className="text-center text-sm text-text-secondary">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          type="button"
          className="font-semibold text-primary hover:underline"
        >
          Sign Up
        </button>
      </p>
    </form>
  );
}
