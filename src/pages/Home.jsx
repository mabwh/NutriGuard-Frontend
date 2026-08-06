import { VscRobot } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { IoMdRestaurant } from "react-icons/io";
import { MdOutlineAnalytics } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { MdOutlineForum } from "react-icons/md";
import {
  FaArrowRight,
  FaLeaf,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className="w-full  fixed top-0 left-0  z-50   bg-surface">
        <div className="px-md md:px-lg h-(--top-nav-height) flex justify-between items-center mx-auto max-w-max">
          <a href="#home">
            <img
              className="h-10 w-auto object-contain"
              src="/logo_with_a_solid_white-removebg-preview.png"
              alt="logo"
            />
          </a>
          <nav className="hidden md:flex items-center gap-xl">
            <a
              href="#home"
              className=" font-bold text-secondary hover:text-primary transition-colors duration-200 body-lg border-b-2 border-primary pb-1 "
            >
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
              className="hidden md:block px-lg py-sm rounded-md text-primary font-medium hover:bg-surface-muted scale-95 active:scale-90 transition-transform"
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
        </div>
      </header>

      <section
        id="home"
        className="relative flex items-center hero-gradient px-lg pt-26 pb-10 md:pt-36 md:pb-15"
      >
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

      <section id="" className="py-xxxl px-lg ">
        <div className="max-w-max mx-auto">
          <div className="text-center mb-xxl">
            <h2 className="headline-lg-mobile md:headline-lg mb-md">
              Intelligent Features for Modern Living
            </h2>
            <p className="body-lg text-text-secondary max-w-2xl mx-auto">
              Our platform integrates seamlessly into your life, making healthy
              choices the easiest choices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {/* <!-- Large Card --> */}
            <div className="md:col-span-2 bg-surface p-xl rounded-3xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-md group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="">
                    <IoMdRestaurant size={22} />
                  </span>
                </div>
                <h3 className="headline-md  mb-sm">AI Meal Architect</h3>
                <p className="text-text-secondary mb-xl">
                  Generate weekly meal plans based on your pantry, preferences,
                  and biometric goals. No more "What's for dinner?" anxiety.
                </p>
              </div>
              <div className="h-52 w-full rounded-md overflow-hidden bg-surface-container-low">
                <img className="w-full h-full object-cover" src="/home2.png" />
              </div>
            </div>

            {/* <!-- Small Card 1 --> */}
            <div className="bg-surface p-xl rounded-3xl shadow-sm group hover:shadow-md transition-shadow">
              <div>
                <div className="w-12 h-12 bg-tertiary/10 rounded-md flex items-center justify-center mb-md group-hover:bg-tertiary group-hover:text-white transition-colors">
                  <span className="">
                    <MdOutlineAnalytics size={22} />
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-sm">
                  Smart Analytics
                </h3>
                <p className="text-text-secondary text-body-md mb-xl">
                  Visualize your progress with clinical-grade charts. Track
                  macros, micros, and energy levels over time.
                </p>
              </div>
              <div className="h-48 w-full rounded-md overflow-hidden bg-surface-container-low">
                <img
                  className="w-full h-full object-cover"
                  src="/pngtree-blue-and-white-icon-with-decreasing-bars-and-line-chart-arrow-png-image_18263576.webp"
                />
              </div>
            </div>
            {/* <!-- Small Card 2 --> */}
            <div className="bg-surface p-xl rounded-3xl shadow-sm group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-md flex items-center justify-center mb-md group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="">
                  <FaUserGroup size={22} />
                </span>
              </div>
              <h3 className="headline-sm mb-sm">Community Pulse</h3>
              <p className="text-text-secondary body-md">
                Connect with peers, join wellness challenges, and share recipes
                with a supportive community.
              </p>
            </div>
            {/* <!-- Medium Card 2 --> */}
            <div className="md:col-span-2 bg-surface p-xl rounded-3xl shadow-sm flex flex-col md:flex-row gap-xl items-center group hover:shadow-md transition-shadow">
              <div className="flex-1">
                <div className="w-12 h-12 bg-warning/10 rounded-md flex items-center justify-center mb-md group-hover:bg-warning group-hover:text-white transition-colors">
                  <span className="">
                    <MdOutlineForum size={22} />
                  </span>
                </div>
                <h3 className="headline-md mb-sm">24/7 AI Coach</h3>
                <p className="text-text-secondary">
                  Have a question about a snack? Ask your coach anytime.
                  Real-time advice powered by the latest nutritional science.
                </p>
              </div>
              <div className="flex-1 w-full h-full min-h-50 rounded-md overflow-hidden bg-primary/5 p-md flex items-center justify-center">
                {/* <!-- Simple AI Chat Micro-UI --> */}
                <div className="w-full space-y-md">
                  <div className="bg-white p-sm rounded-default shadow-sm border border-border self-start mr-xl">
                    <p className="text-caption">
                      Is Greek yogurt a good snack before bed?
                    </p>
                  </div>
                  <div className="bg-primary/10 p-sm rounded-default shadow-sm border border-primary/20 ml-xl">
                    <p className="text-caption italic">
                      "Yes! It's rich in casein protein which supports muscle
                      repair while you sleep..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="" className="py-xxl md:py-xxxl px-md">
        <div className="max-w-max mx-auto bg-primary rounded-4xl p-xxl px-xl text-center text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              width="100%"
            >
              <circle cx="20" cy="20" fill="white" r="40"></circle>
              <circle cx="80" cy="80" fill="white" r="30"></circle>
            </svg>
          </div>
          <div className="relative z-10">
            <h2 className="headline-lg lg:text-[48px] mb-md">
              Ready to start your journey?
            </h2>
            <p className="body-lg text-on-primary/80 mb-xl max-w-144 mx-auto">
              Join thousands of others who have transformed their relationship
              with food through intelligent technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link
                to="/login"
                className="px-xl md:px-xxl py-md bg-white text-primary rounded-md button-text hover:bg-surface-container transition-colors shadow-xl"
              >
                Get Started for Free
              </Link>
              <button className="px-xxl py-md bg-primary-container/20 border border-white/30 text-white rounded-md button-text hover:bg-primary-container/30 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full pt-xl pb-md px-lg bg-surface-muted ">
        <div className=" max-w-max mx-auto flex flex-col md:flex-row justify-between gap-xl">
          <div className="flex flex-col items-start gap-xs flex-1 ">
            <div class="flex items-center gap-sm mb-xs">
              <FaLeaf size={35} color="#006e2f" />
              <span class=" headline-sm font-bold text-primary dark:text-inverse-primary">
                NutriGuard
              </span>
            </div>
            <p className="body-md text-text-secondary md:pl-10">
              Log in to unlock your personalized nutrition plan and take the
              next step toward a healthier more vibrant you
            </p>
          </div>

          <div className=" flex flex-col sm:flex-row gap-xl md:gap-xxxl flex-2 justify-end-safe">
            <div className="flex flex-col gap-sm">
              <h4 className="font-label-md text-label-md font-bold text-text-primary mb-xs">
                Product
              </h4>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Features
              </a>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                AI Assistant
              </a>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Meal Planner
              </a>
            </div>
            <div className="flex flex-col gap-sm">
              <h4 className="font-label-md text-label-md font-bold text-text-primary mb-xs">
                Resources
              </h4>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Help Center
              </a>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Blog
              </a>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Community
              </a>
            </div>
            <div className="flex flex-col gap-sm">
              <h4 className="font-label-md text-label-md font-bold text-text-primary mb-xs">
                Company
              </h4>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                About Us
              </a>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="body-md text-text-secondary hover:text-[#22C55E] transition-colors"
                href="#"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-max mx-auto mt-md pt-md  border-t border-border  flex flex-col md:flex-row justify-between md:items-center ">
          <div className="mb-5">
            <p className=" caption text-text-secondary ">
              © 2026 NutriGuard. Intelligent Wellness
            </p>
          </div>

          <div className="  flex  items-center gap-md">
            <a
              className="text-text-secondary hover:text-[#22C55E] transition-colors"
              href="#"
            >
              <FaInstagram className="w-5.5 h-5.5 md:w-7.5 md:h-7.5" />
            </a>
            <a
              className="text-text-secondary hover:text-[#22C55E] transition-colors"
              href="#"
            >
              <FaFacebook className="w-5.5 h-5.5 md:w-7.5 md:h-7.5" />
            </a>
            <a
              className="text-text-secondary hover:text-[#22C55E] transition-colors"
              href="#"
            >
              <FaTiktok className="w-5.5 h-5.5 md:w-7.5 md:h-7.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
