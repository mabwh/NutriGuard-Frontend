import { MdDashboard } from "react-icons/md";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main className="grow flex flex-col items-center justify-center px-4 md:px-8 pt-16 pb-24  mx-auto w-full">
        <div className="max-w-2xl w-full flex flex-col items-center text-center bg-white p-12 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)]">
          {/* <!-- Illustration Area --> */}
          <div className="w-64 h-64 mb-8 rounded-full bg-surface-container flex items-center justify-center border border-border shadow-inner relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <TbError404 size={200} className="text-primary" />
          </div>
          {/* <!-- Typography --> */}
          <h1 className="headline-lg text-text-primary mb-4">
            Oops! We can't find that page.
          </h1>
          <p className="body-lg text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Even the best plans have a few surprises. Let's get you back to your
            wellness journey
          </p>
          {/* <!-- Action --> */}
          <Link
            className="inline-flex items-center gap-2 bg-primary text-on-primary font-button text-button px-8 py-4 rounded-full shadow-[0px_4px_12px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 hover:shadow-[0px_6px_16px_rgba(34,197,94,0.4)] transition-all duration-200"
            to="/dashboard"
          >
            <MdDashboard size={30} />
            Back to Dashboard
          </Link>
        </div>
      </main>
    </>
  );
}
