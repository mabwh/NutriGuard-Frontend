import { VscRobot } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header className="px-lg h-(--top-nav-height) fixed top-0 left-0 w-full z-50  flex justify-between items-center bg-surface">
        <div>
          <img
            className="h-10 w-auto object-contain"
            src="/logo_with_a_solid_white-removebg-preview.png"
            alt="logo"
          />
        </div>
        <nav className="hidden md:flex items-center gap-xl">
          <a
          href="#home"
          className=" font-bold text-secondary hover:text-primary transition-colors duration-200 body-lg border-b-2 border-primary pb-1 ">
            Home
          </a>
          <a className="text-text-secondary hover:text-primary transition-colors duration-200 body-lg">
            Features
          </a>
          <a className="text-text-secondary hover:text-primary transition-colors duration-200 body-lg">
            About
          </a>
        </nav>
        <div className="flex items-center gap-md">
          <Link
            to="/login"
            className="px-lg py-sm rounded-md text-primary font-medium hover:bg-surface-muted scale-95 active:scale-90 transition-transform"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-lg py-sm bg-primary text-on-primary rounded-md font-medium  shadow-sm hover:shadow-md transition-all scale-95 active:scale-90"
          >
            Register
          </Link>
        </div>
      </header>

      <section 
      id="home"
      className="relative min-h-[90vh] flex items-center hero-gradient px-lg pt-26 pb-10 md:pt-36 md:pb-15">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center">
          {/* <!-- Hero Content --> */}
          <div className="z-10 order-2 lg:order-1">
            <h1 className="text-4xl lg:text-[64px] font-bold leading-[1.1] mb-md ">
              Eat <span className="text-primary">Smarter</span>
              <br />
              Live Healthier
            </h1>
            <p className="body-lg  text-text-secondary mb-xl ">
              Experience the future of wellness with AI-driven meal planning,
              real-time nutritional tracking, and a personal coach that learns
              your habits to help you reach your goals faster
            </p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link
                to="/signup"
                className="px-xxl py-md bg-primary text-on-primary rounded-md button-text  shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-sm group"
              >
                Create Account
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/login"
                className="px-xxl py-md bg-surface text-primary border-2 border-primary rounded-md button-text  hover:bg-surface-muted transition-colors flex items-center justify-center"
              >
                Login
              </Link>
            </div>
          </div>
          {/* <!-- Hero Illustration / Visual --> */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-square max-w-150 mx-auto float-animation">
              {/* <!-- Abstract Background Shapes --> */}
              <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-3xl"></div>
              {/* <!-- Main Illustration --> */}
              <div className="relative z-10 w-full h-full rounded-xxl overflow-hidden shadow-2xl border-8 border-white/50">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A modern, high-end 3D minimalist illustration of a vibrant collection of fresh, organic vegetables and fruits arranged artistically on a clean white surface. Soft studio lighting with gentle shadows, featuring a color palette of lush greens, bright oranges, and deep purples. The style is professional, clean, and friendly, characteristic of a premium health and wellness SaaS platform."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9-jTJqtLylsCTmjC71Coak05KCL0XfSNLatJ9rr5cWdpCUkwMqgVf5ld0eaCHK_sTwi9QqoKiX0MJbcr9-pzhHhHcIYYUQ3-Um2QDy8xxX1dC5BI8LuG_xMt1QCsLojIsxUObuZatPm0M3BTQ7qtMBmwO87VWkkc2Jm03MSDCQk3xw7XdfmKt_gMR6t8MEALblPRzVu29nmYWv5pvYlMblF3ZiqDyo-c_ZWCQtSQFU9bMCr7xrsZ4MQ"
                />
              </div>
              {/* <!-- Floating Micro-Cards --> */}
              <div className="absolute -top-10 -right-10 glass-card p-md rounded-md shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-md">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <VscRobot className=" text-primary" />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md text-text-primary">
                      Personal AI Coach
                    </p>
                    <p className="font-caption text-caption text-text-secondary">
                      Online &amp; Ready
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 glass-card p-lg rounded-md shadow-xl z-20 hidden md:block">
                <div className="flex flex-col gap-sm">
                  <p className="label-md  ">Today's Nutrition</p>
                  <div className="w-32 h-2 bg-[#eee] rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-primary"></div>
                  </div>
                  <p className="font-caption text-caption text-text-secondary">
                    75% of your goal met
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
