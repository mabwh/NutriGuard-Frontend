import {
  MdOutlineCalendarMonth,
  MdEmojiEvents,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { IoMdFitness } from "react-icons/io";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { MdOutlineForum } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { calculateNutritionNeeds } from "../utils/nutritionCalculations";
//zustand
import { authStore } from "../store/auth";
import { profileStore } from "../store/profile";

export default function Dashboard() {
  const user = authStore((state) => state.user);
  const location = useLocation();
  const successMessage = location.state?.successMessage;
  const profile = profileStore((state) => state.profile);
  //console.log("health profile", profile);
  const goalUiKit = {
    LoseWeight: {
      bg: "bg-error",
      text: "text-error",
      label: "Over Weight",
      description: `Your current BMI is above the healthy range`,
    },

    MaintainWeight: {
      bg: "bg-success",
      text: "text-success",
      label: "Maintain Weight",
      description: "Your current BMI is within the healthy range.",
    },

    GainWeight: {
      bg: "bg-warning",
      text: "text-warning",
      label: "Gain Weight",
      description: "Your current BMI is below the healthy range.",
    },
  };
  const currentGoal = goalUiKit[profile?.goal];

  const height = profile?.height;
  const weight = profile?.weight;
  let bmi = 0;
  if (height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    bmi = weight / (heightInMeters * heightInMeters);
  }
  const whtr = profile?.waist / height;
  const getHealthRisk = (bmi, whtr) => {
    // High
    if (bmi >= 30 || whtr >= 0.6) {
      return {
        level: "High Risk",
        description:
          "Your measurements indicate increased health risk. Consider speaking with a healthcare professional.",
        segments: 3,
      };
    }

    // Moderate
    if (bmi >= 25 || whtr >= 0.5) {
      return {
        level: "Moderate Risk",
        description:
          "Your measurements indicate some increased health risk. Maintaining a healthy weight and waist size can help.",
        segments: 2,
      };
    }

    // Low
    return {
      level: "Low Risk",
      description:
        "Your BMI and waist-to-height ratio are currently within the healthy screening range.",
      segments: 1,
    };
  };

  const healthRisk = getHealthRisk(bmi, whtr);
  //for ui
  const riskColors = {
    "Low Risk": {
      bg: "bg-success",
      text: "text-success",
    },
    "Moderate Risk": {
      bg: "bg-warning",
      text: "text-warning",
    },
    "High Risk": {
      bg: "bg-error",
      text: "text-error",
    },
  };
  const currentRiskColors = riskColors[healthRisk.level];

  const nutrition = calculateNutritionNeeds(profile);
  return (
    <>
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
        <div className="flex items-center self-start gap-2 bg-surface p-2 rounded-md border border-border card-shadow">
          <MdOutlineCalendarMonth size={22} className=" text-primary" />

          <span className="label-md text-text-on-surface">
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
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
              {/* <button className="bg-white text-primary px-6 py-3 rounded-md button-text hover:bg-white/90 transition-all">
                  View Progress
                </button> */}
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
            <div className="flex justify-between items-center">
              <span className="text-text-secondary label-md">
                Weight Status
              </span>

              <LuChartNoAxesCombined size={25} className={currentGoal?.text} />
            </div>
            <div>
              <p className={`headline-sm ${currentGoal?.text}`}>
                {`${currentGoal?.label}`}
              </p>
              <p className="text-[14px] text-text-secondary mt-1">
                BMI: {bmi.toFixed(2)} (Current: {profile?.weight}kg)
              </p>
              <p className={`text-[14px] text-text-secondary mt-1`}>
                {currentGoal?.description}
              </p>
            </div>
          </div>
          <div className="bg-surface p-6 rounded-3xl border border-border card-shadow flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary label-md">Health Risk</span>
              <MdOutlineVerifiedUser
                size={25}
                className={currentRiskColors.text}
              />
            </div>
            <div>
              <p className="headline-sm text-text-on-surface">
                {healthRisk.level}
              </p>
              <p className="text-[14px] text-text-secondary mt-1">
                {healthRisk.description}
              </p>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3].map((segment) => (
                <div
                  key={segment}
                  className={`h-2 w-1/3 rounded-full ${
                    segment <= healthRisk.segments
                      ? currentRiskColors.bg
                      : "bg-surface-container"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* <!-- Daily Nutrition Overview --> */}
        <div className="col-span-12 lg:col-span-8 bg-surface p-8 rounded-3xl border border-border  card-shadow">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h3 className=" headline-sm text-text-on-surface">
              Daily Nutrition Needs
            </h3>
            <span className="text-xs text-primary bg-success/10 px-3 py-1 rounded-full font-semibold">
              ✦ {"  "} Personalized
            </span>
          </div>
          <div className="grid grid-cols-1 md:gap-x-12 gap-y-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between label-md">
                  <span className="text-text-on-surface">Calories</span>
                  <span className="text-text-secondary">
                    {Math.round(nutrition?.calories)} kcal
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between label-md">
                  <span className="text-text-on-surface">Protein</span>
                  <span className="text-text-secondary">
                    {Math.round(nutrition?.protein)}g
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between   label-md">
                  <span className="text-text-on-surface">Carbs</span>
                  <span className="text-text-secondary">
                    {Math.round(nutrition?.carbs)}g
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between   label-md">
                  <span className="text-text-on-surface">Fat</span>
                  <span className="text-text-secondary">
                    {Math.round(nutrition?.fat)}g
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between   label-md">
                  <span className="text-text-on-surface">Fiber</span>
                  <span className="text-text-secondary">
                    {" "}
                    {Math.round(nutrition?.fiber)}g
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between   label-md">
                  <span className="text-text-on-surface">Water</span>
                  <span className="text-text-secondary">
                    {nutrition?.water.toFixed(1)}L
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <p className="text-[15px] text-text-secondary leading-6 mt-4">
                Your daily nutrition targets are personalized based on your
                health profile, activity level, and current goal. These values
                are estimates to help you plan balanced meals throughout the
                day.
              </p>
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
              Got questions about your dinner? Ask our AI Assistant for healthy
              swaps or calorie estimation
            </p>
            <Link
              to={"/chat"}
              className="w-full bg-primary/10 text-text-on-surface px-8 py-4 rounded-2xl button-text  shadow-lg shadow-secondary/20 flex items-center justify-center gap-3 transition-transform hover:scale-95"
            >
              <MdOutlineForum size={50} className="fill-primary " />
              Chat with AI Assistant
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
