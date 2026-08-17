import { IoChevronForward } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { IoMdRefresh } from "react-icons/io";

export default function MealDetails() {
  return (
    <>
      {/*  Breadcrumbs */}
      <div className="flex items-center gap-2 mb-8 text-text-on-surface label-md">
        <Link to={"/meals"} className="hover:text-primary transition-colors">
          Daily Plan
        </Link>
        <IoChevronForward size={14} />
        <span className="text-text-primary">Grilled Salmon with Quinoa</span>
      </div>
      {/*  Header Section */}
      <div className="  mb-12">
        {/*  Large Prominent Image */}

        <div className="relative w-full aspect-4/3 rounded-3xl meal-shadow group  h-100 rounded-xxl overflow-hidden mb-xl shadow-lg">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            data-alt="A high-resolution culinary photograph of a grilled Atlantic salmon fillet with vibrant sear marks, served over a fluffy bed of tricolor quinoa. The dish is garnished with fresh dill, lemon wedges, and roasted cherry tomatoes. The lighting is soft and bright, highlighting textures in a minimalist, clean, modern kitchen setting using NutriGuard's white and primary green accents."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrn-l94pn3bWhkIdPSWF0aYXXlMlpizuneRrpQbeW3skZcn3x6r0IusP-DVJuXMTWIo16VmehFiu-Nz7MzxMfW30QW53EHXutYmNNQV2RPHH2qaYK70fVhgPtHk3TTel4bYzRGSpiD-waEErJDv5LDNnAar9IkZ79P4BzK49SWwZuE-fMG3hL0gxlz5J6EP4vHxfs8XPAuwLPSioMi2C_aCbLv7eKlSqih7IdG15qiUXnDmP_-Q8B7"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
          {/*  Title & Nutrition Summary */}
          <div className="absolute bottom-0 left-0  p-5 md:p-10 text-white">
            <h1 className="headline-md md:headline-lg mb-1 md:mb-2">
              Grilled Salmon with Tri-color Quinoa
            </h1>
            <p className="text-body-md md:text-body-lg text-white/80 max-w-2xl">
              {" "}
              A nutrient-dense, heart-healthy meal rich in Omega-3 fatty acids
              and complex carbohydrates. Perfect for a restorative post-workout
              dinner or a light energizing lunch.
            </p>
          </div>
          <div className="absolute top-6 left-6 flex gap-2">
            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-primary font-bold text-xs md:text-label-md flex items-center gap-2">
              <MdOutlineSchedule size={18} /> 25 mins
            </span>
          </div>
        </div>
      </div>
      {/*  Details Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        {/*  Ingredients Section */}
        <section className="md:col-span-8">
          <div className="bg-white rounded-3xl p-xl meal-shadow h-full border border-border/50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="headline-sm text-text-primary">Ingredients</h2>
              {/* <span className="text-body-sm text-text-secondary">
                1 Serving
              </span> */}
            </div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-body-lg text-text-primary">
                    Atlantic Salmon
                  </span>
                </div>
                <span className="font-bold text-text-primary">150g</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-body-lg text-text-primary">
                    Cooked Quinoa
                  </span>
                </div>
                <span className="font-bold text-text-primary">1/2 cup</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-body-lg text-text-primary">
                    Fresh Dill
                  </span>
                </div>
                <span className="font-bold text-text-primary">1 tbsp</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-body-lg text-text-primary">
                    Lemon Juice
                  </span>
                </div>
                <span className="font-bold text-text-primary">1/2 unit</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-body-lg text-text-primary">
                    Olive Oil
                  </span>
                </div>
                <span className="font-bold text-text-primary">1 tsp</span>
              </li>
              <li className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-body-lg text-text-primary">
                    Cherry Tomatoes
                  </span>
                </div>
                <span className="font-bold text-text-primary">100g</span>
              </li>
            </ul>
          </div>
        </section>
        {/*   Nutrition Facts */}
        <section className="md:col-span-4 flex flex-col justify-center gap-10 bg-white p-8 rounded-2xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] ">
          <h2 className="headline-sm text-text-primary">Nutrition Facts</h2>
          <div className="grid grid-cols-2 ">
            {/*  Nutrition Summary Cards */}
            <div className="border-r p-5  border-border  flex flex-col  justify-center items-center ">
              <span className="text-text-secondary label-md mb-1">
                Calories
              </span>
              <span className="headline-sm text-[16px] text-primary whitespace-nowrap ">
                540 kcal
              </span>
            </div>
            <div className="   p-5  meal-shadow flex flex-col justify-center items-center">
              <span className="text-text-secondary label-md mb-1">Protein</span>
              <span className="headline-sm text-info">42g</span>
            </div>
            <div className="border-r border-border p-5 border-t  flex flex-col justify-center items-center">
              <span className="text-text-secondary label-md mb-1">Carbs</span>
              <span className="headline-sm text-warning">38g</span>
            </div>
            <div className="border-t border-border p-5  flex flex-col justify-center items-center">
              <span className="text-text-secondary label-md mb-1">Fat</span>
              <span className="headline-sm text-secondary">22g</span>
            </div>
          </div>

          <Button className="flex justify-center gap-2 items-center">
            <IoMdRefresh size={22} />
            Regenerate Meal
          </Button>
        </section>
      </div>

      <div className="bg-white rounded-3xl p-md md:p-xl meal-shadow h-full border border-border/50">
        <h2 className="headline-sm text-text-primary mb-8 px-md">
          Preparation
        </h2>
        <div className="space-y-8 relative">
          {/*  Timeline Line */}
          <div className="absolute left-4.75 top-4 bottom-4 w-0.5 bg-surface-container hidden sm:block"></div>
          <div className="flex gap-4 md:gap-6 relative">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold z-10">
              1
            </div>
            <div>
              <h3 className="headline-sm text-text-primary mb-2">
                Prepare the Quinoa
              </h3>
              <p className="text-body-lg text-text-secondary">
                Rinse the quinoa under cold water. Combine 1 part quinoa with 2
                parts water in a saucepan. Bring to a boil, then cover and
                simmer for 15 minutes until liquid is absorbed.
              </p>
            </div>
          </div>
          <div className="flex gap-6 relative">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold z-10">
              2
            </div>
            <div>
              <h3 className="headline-sm text-text-primary mb-2">
                Season the Salmon
              </h3>
              <p className="text-body-lg text-text-secondary">
                Pat the salmon fillet dry. Rub with olive oil and season with
                sea salt, pepper, and fresh dill. Let it sit at room temperature
                for 5 minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-6 relative">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold z-10">
              3
            </div>
            <div>
              <h3 className="headline-sm text-text-primary mb-2">Grilling</h3>
              <p className="text-body-lg text-text-secondary">
                Preheat your grill or pan over medium-high heat. Place salmon
                skin-side down and cook for 4-5 minutes. Flip carefully and cook
                for another 3 minutes until opaque.
              </p>
            </div>
          </div>
          <div className="flex gap-6 relative">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold z-10">
              4
            </div>
            <div>
              <h3 className="headline-sm text-text-primary mb-2">Assembly</h3>
              <p className="text-body-lg text-text-secondary">
                Fluff the quinoa with a fork. Plate the quinoa, top with grilled
                salmon, and garnish with roasted cherry tomatoes and a squeeze
                of fresh lemon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
