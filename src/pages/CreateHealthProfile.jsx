import { GoShieldLock } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import {
  MdOutlineDirectionsRun,
  MdOutlineReport,
  MdPsychology,
  MdStraighten,
} from "react-icons/md";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
export default function CreateHealthProfile() {
  return (
    <>
      <div className=" py-xxl px-md flex items-center justify-center">
        {/* <!-- outer card --> */}
        <div className=" max-w-250 bg-surface rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden min-h-187.5">
          {/* <!-- Left Side: Visual Illustration Area --> */}

          <div className="hidden md:flex md:w-[40%] bg-surface-container p-xl flex-col justify-center items-center relative overflow-hidden">
            {/* <!-- AI Gradient Ornament --> */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 bg-tertiary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="w-full max-w-80 mx-auto mb-xl">
                <img
                  alt="A minimalist 3D isometric illustration for a health app called NutriGuard. A bowl of fresh, vibrant ingredients like avocado, broccoli, and tomatoes sits on a clean white surface with digital holographic overlays representing AI analysis."
                  className="w-full h-auto drop-shadow-xl"
                  src="/chp.png"
                />
              </div>
              <h2 className="headline-md text-text-primary mb-md">
                Your Intelligent Wellness Partner
              </h2>
              <p className="body-lg text-text-secondary px-lg">
                NutriGuard uses advanced AI to analyze your health profile and
                generate meal plans tailored to your metabolism.
              </p>
            </div>

            {/* <!-- Feature Badges --> */}
            <div className="mt-xxl z-10 flex flex-wrap justify-center gap-sm ">
              <div className="px-md py-sm bg-surface rounded-xl shadow-sm flex items-center gap-xs">
                <GoShieldLock size={22} className=" text-success" />

                <span className="label-md text-text-primary">Data Secured</span>
              </div>
              <div className="px-md py-sm bg-surface rounded-xl shadow-sm flex items-center gap-xs">
                <span>
                  <MdPsychology size={22} className="text-tertiary" />
                </span>
                <span className=" label-md text-text-primary">AI Powered</span>
              </div>
            </div>
          </div>

          {/* <!-- Right Side: Form Content --> */}
          <div className="w-full md:w-[60%] p-xl md:p-xxl flex flex-col ">
            <div className="mb-xl">
              <h1 className="headline-lg text-text-primary mb-sm">
                Create Your Health Profile
              </h1>
              <p className="body-md text-text-secondary">
                Help us personalize your nutrition journey by answering a few
                quick questions
              </p>
            </div>

            <form className="space-y-xl" id="healthProfileForm">
              {/* <!-- Section 1: Personal Information --> */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container mb-5">
                  <IoPersonOutline
                    size={22}
                    className="fill-primary shrink-0 text-primary"
                  />
                  <h3 className="headline-sm text-text-primary">
                    Personal Information
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-md">
                    <label className="label-md text-text-secondary px-xs">
                      Date of Birth
                    </label>
                    <Input placeholder="MM/DD/YYYY" type="date" />
                  </div>
                  <div className="flex flex-col gap-md">
                    <label className=" label-md text-text-secondary px-xs">
                      Gender
                    </label>
                    <div className="flex gap-sm h-full items-center">
                      <label className="flex-1 flex items-center justify-center gap-xs cursor-pointer border border-border rounded-xl py-sm hover:bg-surface-container transition-all">
                        <input
                          name="gender"
                          type="radio"
                          className="accent-success"
                        />
                        <span className=" body-md text-text-primary">Male</span>
                      </label>
                      <label className="flex-1 flex items-center justify-center gap-xs cursor-pointer border border-border rounded-xl px-sm py-sm hover:bg-surface-container transition-all">
                        <input
                          name="gender"
                          type="radio"
                          className="accent-success"
                        />

                        <span className=" body-md text-text-primary">
                          Female
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Section 2: Body Measurements --> */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container ">
                  <MdStraighten
                    size={22}
                    className="fill-primary shrink-0 text-primary"
                  />
                  <h3 className=" headline-sm text-text-primary">
                    Body Measurements
                  </h3>
                </div>
                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div className="flex flex-col gap-md">
                    <label className=" label-md text-text-secondary px-xs">
                      Height (cm)
                    </label>
                    <Input placeholder="e.g. 170" type="number" />
                  </div>

                  <div className="flex flex-col gap-md">
                    <label className=" label-md text-text-secondary px-xs">
                      Weight (kg)
                    </label>
                    <Input placeholder="e.g. 175" type="number" />
                  </div>

                  <div className="flex flex-col gap-md">
                    <label className=" label-md text-text-secondary px-xs">
                      Waist (cm)
                    </label>
                    <Input placeholder="e.g. 35" type="number" />
                  </div>
                </div>
              </div>

              {/* <!-- Section 3: Lifestyle --> */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container ">
                  <MdOutlineDirectionsRun size={22} className="text-primary" />

                  <h3 className=" headline-sm text-text-primary">Lifestyle</h3>
                </div>

                <div className="flex flex-col gap-md">
                  <label className=" label-md text-text-secondary px-xs">
                    Activity Level
                  </label>
                  <Select
                    options={[
                      {
                        name: "Sedentary (Office job, little exercise)",
                        value: "sedentary",
                      },
                      {
                        name: "Lightly Active (1-3 days/week exercise)",
                        value: "lightly_active",
                      },
                      {
                        name: "Moderately Active (3-5 days/week exercise)",
                        value: "moderately_active",
                      },
                      {
                        name: "Very Active (6-7 days/week intense sport)",
                        value: "very_active",
                      },
                    ]}
                  ></Select>
                </div>
              </div>

              {/* <!-- Section 4: Allergies --> */}
              <div className="space-y-md">
                <div className="flex items-center gap-sm pb-sm border-b border-surface-container ">
                  <MdOutlineReport size={22} className="text-primary" />
                  <h3 className=" headline-sm text-text-primary">Allergies</h3>
                </div>

                <Input placeholder="Peanuts" />
              </div>
              {/* <!-- Primary Action --> */}
              <div className="pt-lg">
                <Button>Continue to Dashboard</Button>
              </div>

              <p className="text-center caption text-text-secondary max-w-100 mx-auto">
                Your information is used only to personalize your meal plans,
                recipes, and AI recommendations
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
