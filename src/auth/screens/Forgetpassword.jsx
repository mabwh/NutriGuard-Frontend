import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import ForgetCardWbg from "../components/ForgetCardWbg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { otpSchema, resetPasswordSchema } from "../utils/validation";

export default function Forgetpassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const {
    register: registerOtp,
    handleSubmit: handleOtpSubmit,
    formState: { errors: otpErrors },
  } = useForm({
    resolver: zodResolver(otpSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  //handlers
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    console.log("emmail submitted", email);
    if (email) setStep(2);
  };

  const handleSubmitOtp = (data) => {
    console.log("OTP submitted", data);

    setStep(3);
  };

  const handleSubmitNewPassword = (data) => {
    console.log(data);

    navigate("/login");
  };

  switch (step) {
    case 1:
      return (
        <>
          <ForgetCardWbg>
            <h1 className="text-2xl font-semibold">Forgot Password?</h1>
            <p className="text-center text-sm text-text-secondary">
              {" "}
              Don't worry! Enter the email address associated with your account
              and we'll send you a verification code to reset your password{" "}
            </p>
            <form className="space-y-4 w-full" onSubmit={handleSubmitEmail}>
              <Input
                key="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="Email Address"
              />
              <Button
                type="submit"
                className="flex justify-center items-center gap-3"
              >
                Send Verification Code <FaArrowRight />{" "}
              </Button>
            </form>

            <button
              className="flex justify-center items-center gap-3 text-text-secondary hover:border hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-surface-muted"
              onClick={() => navigate("/login")}
            >
              {" "}
              <FaArrowLeft />
              Back to login
            </button>
          </ForgetCardWbg>
        </>
      );
    case 2:
      return (
        <>
          <ForgetCardWbg>
            <h1 className="text-2xl font-semibold">Verify Your Email</h1>
            <p className="text-center text-sm text-text-secondary">
              {" "}
              We've sent a 6-digit verification code to your email address.
              Please enter it below to continue{" "}
            </p>
            <form
              className="space-y-4 w-full"
              onSubmit={handleOtpSubmit(handleSubmitOtp)}
            >
              <Input
                key="otp"
                placeholder="Enter the 6-digit code"
                {...registerOtp("otp")}
                error={otpErrors.otp?.message}
                type="text"
              />
              <Button
                type="submit"
                className="flex justify-center items-center gap-3"
              >
                Verify Code <FaArrowRight />{" "}
              </Button>
            </form>

            <button
              className="flex justify-center items-center gap-3 text-text-secondary hover:border hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-surface-muted"
              onClick={() => setStep(1)}
            >
              {" "}
              <FaArrowLeft />
              Back
            </button>
          </ForgetCardWbg>
        </>
      );
    case 3:
      return (
        <>
          <ForgetCardWbg>
            <h1 className="text-2xl font-semibold">Reset Password</h1>
            <p className="text-center text-sm text-text-secondary">
              {" "}
              Your new password should be strong and different from your
              previous password{" "}
            </p>
            <form
              className="space-y-4 w-full"
              onSubmit={handlePasswordSubmit(handleSubmitNewPassword)}
            >
              <Input
                key="newpass"
                {...registerPassword("password")}
                error={passwordErrors.password?.message}
                type="password"
                label="New password"
              />
              <Input
                {...registerPassword("confirmPassword")}
                error={passwordErrors.confirmPassword?.message}
                type="password"
                label="Confirm password"
              />
              <Button type="submit">Reset Password</Button>
            </form>

            <button
              className="flex justify-center items-center gap-3 text-text-secondary hover:border hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-surface-muted"
              onClick={() => navigate("/login")}
            >
              {" "}
              <FaArrowLeft />
              Back to login
            </button>
          </ForgetCardWbg>
        </>
      );
  }
}
