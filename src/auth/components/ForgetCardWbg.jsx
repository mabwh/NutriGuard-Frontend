import { Link } from "react-router-dom";

export default function ForgetCardWbg({ children }) {
  return (
    <div className="bg-background relative min-h-screen flex justify-center items-center px-10 ">
      <img
        src="/forgetBg.png"
        alt="Healthy food"
        className="absolute inset-0 h-full w-full object-cover blur-sm"
      />
      <div className="absolute inset-0 bg-black/50" />
      {/* card */}
      <div className="relative z-10 max-w-112 shadow-2xl rounded-xl bg-surface flex flex-col justify-center items-center gap-6 p-10">
        {/* logo */}
        <Link to="/" className="w-40">
          <img
            src="/logo_with_a_solid_white.png"
            alt="NutriGuard logo"
            className=""
          />
        </Link>
        {children}
      </div>
    </div>
  );
}
