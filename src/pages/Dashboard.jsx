import {
  MdOutlineCalendarMonth,
  MdEmojiEvents,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { MdOutlineForum } from "react-icons/md";
//zustand
import { authStore } from "../store/auth";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const user = authStore((state) => state.user);
  const location = useLocation();
  const successMessage = location.state?.successMessage;

  return (
    <>
      <div className="mx-auto max-w-max p-xl">
        {successMessage && (
          <div className="rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700 text-center font-medium mb-3">
            {successMessage}
          </div>
        )}
        {/* <!-- Greeting Header --> */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="headline-lg text-primary mb-3 md:mb-1">
              Good Morning, {user.name} !
            </h1>
            <p className="text-text-secondary body-lg">
              Here's how your health journey looks today
            </p>
          </div>
          <div className="flex items-center gap-2 bg-surface p-2 rounded-md border border-border card-shadow">
            <MdOutlineCalendarMonth size={22} className=" text-primary" />

            <span className="label-md text-text-on-surface">
              Monday, October 26
            </span>
          </div>
        </div>

        {/* <!-- Bento Grid Layout --> */}
        <div className="grid grid-cols-12 gap-6">
          {/* <!-- Achievement Card (Left Column) --> */}
          <div className="col-span-12 lg:col-span-8 bg-primary text-on-primary rounded-3xl p-8 relative overflow-hidden card-shadow group transition-transform hover:-translate-y-1">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="bg-white/20 w-fit p-2 rounded-default mb-6 backdrop-blur-sm">
                  <MdEmojiEvents size={30} />
                </div>
                <h2 className="headline-md mb-2">Congratulations!</h2>
                <p className="text-white/80 body-lg max-w-3xl">
                  You've lost 2 kg this month! You're 80% closer to your target
                  weight of 65 kg. Keep up the amazing work with your meal
                  consistency.
                </p>
              </div>
              <div className="mt-8">
                <button className="bg-white text-primary px-6 py-3 rounded-md button-text hover:bg-white/90 transition-all">
                  View Progress
                </button>
              </div>
            </div>
            {/* <!-- Decorative Background Element --> */}
            <div className="absolute right-[-40px] bottom-[-40px] opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[320px]">
                <IoMdFitness size={320} />
              </span>
            </div>
          </div>

          {/* <!-- Health Summary Cards (Right Column) --> */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface p-6 rounded-3xl border border-border card-shadow flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="text-text-secondary label-md">
                  Weight Status
                </span>

                <LuChartNoAxesCombined size={25} className="text-warning" />
              </div>
              <div>
                <p className="headline-sm text-text-on-surface">Overweight</p>
                <p className="text-[14px] text-text-secondary mt-1">
                  BMI: 26.4 (Current: 72kg)
                </p>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2">
                <div className="bg-warning h-2 rounded-full w-[65%]"></div>
              </div>
            </div>
            <div className="bg-surface p-6 rounded-3xl border border-border card-shadow flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <span className="text-text-secondary label-md">
                  Health Risk
                </span>
                <MdOutlineVerifiedUser size={25} className="text-success" />
              </div>
              <div>
                <p className="headline-sm text-text-on-surface">Low Risk</p>
                <p className="text-[14px] text-text-secondary mt-1">
                  Metabolic markers are optimal
                </p>
              </div>
              <div className="flex gap-1">
                <div className="h-2 w-1/3 bg-success rounded-full"></div>
                <div className="h-2 w-1/3 bg-surface-container rounded-full"></div>
                <div className="h-2 w-1/3 bg-surface-container rounded-full"></div>
              </div>
            </div>
          </div>

          {/* <!-- Daily Nutrition Overview --> */}
          <div className="col-span-12 lg:col-span-8 bg-surface p-8 rounded-3xl border border-border  card-shadow">
            <div className="flex justify-between items-center mb-8">
              <h3 className=" headline-sm text-text-on-surface">
                Daily Nutrition Overview
              </h3>
              <button className="text-primary label-md hover:underline">
                Edit Goals
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* <!-- Left Column (Macros) --> */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between label-md">
                    <span className="text-text-on-surface">Calories</span>
                    <span className="text-text-secondary">
                      1,650 / 2,100 kcal
                    </span>
                  </div>
                  <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full transition-all duration-1000 w-[78%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between label-md">
                    <span className="text-text-on-surface">Protein</span>
                    <span className="text-text-secondary">95g / 140g</span>
                  </div>
                  <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="bg-status-info h-full rounded-full transition-all duration-1000 w-[68%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between   label-md">
                    <span className="text-text-on-surface">Carbs</span>
                    <span className="text-text-secondary">180g / 220g</span>
                  </div>
                  <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="bg-warning h-full rounded-full transition-all duration-1000 w-[82%]"></div>
                  </div>
                </div>
              </div>
              {/* <!-- Right Column (Extras) --> */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between   label-md">
                    <span className="text-text-on-surface">Fat</span>
                    <span className="text-text-secondary">45g / 65g</span>
                  </div>
                  <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="bg-secondary-fixed-dim h-full rounded-full transition-all duration-1000 w-[70%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between   label-md">
                    <span className="text-text-on-surface">Fiber</span>
                    <span className="text-text-secondary">22g / 30g</span>
                  </div>
                  <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="bg-primary-container h-full rounded-full transition-all duration-1000 w-[73%]"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between   label-md">
                    <span className="text-text-on-surface">Water</span>
                    <span className="text-text-secondary">2.1L / 3L</span>
                  </div>
                  <div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
                    <div className="bg-info h-full rounded-full transition-all duration-1000 w-[70%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- AI Assistant CTA Card --> */}
          <div className="col-span-12 lg:col-span-4 bg-primary/10  rounded-3xl p-8 flex flex-col items-center text-center justify-center card-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BsStars size={22} className="fill-primary text-4xl" />
              </div>
              <h3 className=" headline-sm text-primary mb-3">
                AI Personal Assistant
              </h3>
              <p className="text-text-on-surface text-[14px] font-medium mb-8 px-4">
                Got questions about your dinner? Ask our AI Assistant for
                healthy swaps or calorie estimation
              </p>
              <button className="w-full bg-primary/10 text-text-on-surface px-8 py-4 rounded-2xl button-text  shadow-lg shadow-secondary/20 flex items-center justify-center gap-3 transition-transform hover:scale-95">
                <MdOutlineForum size={50} className="fill-primary " />
                Chat with AI Assistant
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
