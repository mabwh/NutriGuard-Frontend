import { useEffect, useState } from "react";
import { GiDrop } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import {
  MdBakeryDining,
  MdOutlineLocalFireDepartment,
  MdOutlineSchedule,
} from "react-icons/md";
import { getCustomMealsByDate } from "../api/customMeals";
import BackendErrorMessage from "../components/BackendErrorMessage";

export default function DailyMeals() {
  // NEW CODE:
  // Daily Meals already displays the current local date, so this is the matching Backend date.
  const displayedDate = new Date();
  const formattedDate = [
    displayedDate.getFullYear(),
    String(displayedDate.getMonth() + 1).padStart(2, "0"),
    String(displayedDate.getDate()).padStart(2, "0"),
  ].join("-");

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [backendError, setBackendError] = useState("");
  // OLD CODE - kept intentionally for safety. The static mock timeline is disabled.
  const [showStaticMockMeals] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadCustomMeals = async () => {
      try {
        setIsLoading(true);
        setBackendError("");
        const response = await getCustomMealsByDate(formattedDate);

        if (!response.isSuccess) {
          if (isMounted) {
            setBackendError(response.message);
          }
          return;
        }

        if (isMounted) {
          setMeals(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setBackendError(error.response?.data?.message || "Unable to load daily meals.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadCustomMeals();

    return () => {
      isMounted = false;
    };
  }, [formattedDate]);

  const dailyNutrition = meals.reduce(
    (totals, meal) => ({
      calories: totals.calories + meal.energyKcal,
      protein: totals.protein + meal.proteinG,
      carbohydrates: totals.carbohydrates + meal.carbohydrateG,
      fat: totals.fat + meal.fatG,
    }),
    { calories: 0, protein: 0, carbohydrates: 0, fat: 0 },
  );

  return (
    <>
      {/* <!-- Header Section --> */}
      <div className="flex flex-col-reverse md:flex-row justify-between gap-md mb-xl">
        <h1 className="headline-lg text-text-primary">Today's Meal Plan</h1>
        <p className="body-lg text-text-secondary ">
          {displayedDate.toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "short",
          })}
        </p>
      </div>

      {/* <!-- Daily Nutrition Summary Bar --> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xxl">
        <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-3">
          <MdOutlineLocalFireDepartment size={22} className="text-primary" />
          <span className="caption text-text-secondary font-bold uppercase tracking-wider">
            Calories
          </span>
          <span className="text-headline-md font-bold">
            {/* OLD CODE - kept intentionally for safety. */}
            {/* 1,840 <span className="text-caption text-text-secondary">g</span> */}
            {/* NEW CODE: Backend energyKcal total for the displayed date. */}
            {dailyNutrition.calories} <span className="text-caption text-text-secondary">kcal</span>
          </span>
        </div>

        <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-3">
          <IoIosFitness size={22} className="text-primary" />
          <span className="caption text-text-secondary font-bold uppercase tracking-wider">
            Protein
          </span>
          <span className="text-headline-md font-bold">
            {/* OLD CODE - kept intentionally for safety. */}
            {/* 1,840 <span className="text-caption text-text-secondary">g</span> */}
            {/* NEW CODE: Backend proteinG total for the displayed date. */}
            {dailyNutrition.protein} <span className="text-caption text-text-secondary">g</span>
          </span>
        </div>

        <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-3">
          <MdBakeryDining size={22} className="text-primary" />
          <span className="caption text-text-secondary font-bold uppercase tracking-wider">
            Carbs
          </span>
          <span className="text-headline-md font-bold">
            {/* OLD CODE - kept intentionally for safety. */}
            {/* 1,840 <span className="text-caption text-text-secondary">g</span> */}
            {/* NEW CODE: Backend carbohydrateG total for the displayed date. */}
            {dailyNutrition.carbohydrates} <span className="text-caption text-text-secondary">g</span>
          </span>
        </div>
        <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-3">
          <GiDrop size={22} className="text-primary" />
          <span className="caption text-text-secondary font-bold uppercase tracking-wider">
            Fats
          </span>
          <span className="text-headline-md font-bold">
            {/* OLD CODE - kept intentionally for safety. */}
            {/* 1,840 <span className="text-caption text-text-secondary">g</span> */}
            {/* NEW CODE: Backend fatG total for the displayed date. */}
            {dailyNutrition.fat} <span className="text-caption text-text-secondary">g</span>
          </span>
        </div>
      </div>

      {/* <!-- Meal Timeline --> */}
      {/* OLD CODE - kept intentionally for safety. The static mock timeline is no longer rendered. */}
      {showStaticMockMeals && (
      <div className="relative space-y-xl">
        {/* <!-- Breakfast Card --> */}
        <div className="meal-timeline-item relative flex flex-col md:flex-row gap-lg items-start z-50">
          <div className="meal-timeline-connector flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-10 shadow-lg">
              01
            </div>
            {/* <span className="caption text-text-secondary mt-sm font-bold uppercase tracking-tighter z-50">
                08:00 AM
              </span> */}
          </div>
          <div className="flex-1 z-50 w-full bg-surface rounded-xl  shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1">
            <div className="md:w-1/3 h-48 md:h-auto  relative">
              <img
                className="w-full h-full object-cover"
                data-alt="A gourmet breakfast bowl with creamy avocado slices, perfectly poached eggs with runny yolks, smoked salmon, and fresh sprouts on a rustic ceramic plate. High-key natural morning lighting, professional food photography, minimalist white and green aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGlhklKkSasWxoEzq3smo1FSmM1nKuESYhSCAuLxKQWQ5DOH4QU2blVDJTMMiPfhKoyOwbc_qRyPjqW4GuY827-yNwQrH2qfJLmZpgcrSxjJqW1FteWW-OHmBo8YuL5GlUEoRbpmpHyxUHa_ZpVx9s-jTVhWAIgKVkZcagkCvWqu8AQCZJlQovDVGv-ZRAtw0yl2VXk-udUISoCzCAar4J08bPBV2PrQyXrf0u_AjD276-dOqh8nDI5Q"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-sm py-xs rounded-lg border border-border shadow-sm flex items-center gap-xs">
                <MdOutlineSchedule size={22} className="text-primary" />
                <span className="text-caption font-bold">12 min</span>
              </div>
            </div>
            <div className="flex-1 z-50 p-xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <span className="caption text-primary font-bold uppercase tracking-widest mb-xs block">
                    Breakfast
                  </span>
                  <h3 className="headline-sm text-text-primary mb-sm">
                    Avocado &amp; Poached Egg Power Bowl
                  </h3>
                  <p className="body-md text-text-secondary line-clamp-2">
                    A nutrient-dense start to your day with healthy fats, lean
                    protein, and omega-3s.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-headline-sm font-bold text-primary">
                    420
                  </span>
                  <span className="caption text-text-secondary block">
                    Calories
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-md mt-xl pt-xl border-t border-border">
                <div className="flex gap-md">
                  <button className="bg-surface border border-primary text-primary px-md md:px-lg py-sm rounded-lg button-text hover:bg-primary/5 transition-colors active:scale-95">
                    View Details
                  </button>
                  <button className="bg-surface border border-border text-text-secondary px-lg py-sm rounded-lg button-text hover:bg-surface-container-low transition-colors active:scale-95">
                    Replace
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Lunch Card (Completed State) --> */}
        <div className="meal-timeline-item relative flex flex-col md:flex-row gap-lg items-start ">
          <div className="meal-timeline-connector flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-50 shadow-lg">
              02
            </div>
            {/* <span className="text-caption text-text-secondary mt-sm font-bold uppercase tracking-tighter z-50">
                01:30 PM
              </span> */}
          </div>
          <div className="flex-1 z-50 w-full bg-surface rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1">
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative ">
              <img
                className="w-full h-full object-cover"
                data-alt="A vibrant Mediterranean quinoa salad with roasted chickpeas, cucumber, cherry tomatoes, Kalamata olives, and feta cheese. Topped with a lemon-tahini dressing. Studio food photography, bright lighting, green and teal tones."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbn7w2XQ3sO6jlevlDf13hEhglR67D2onEdAgDl9sPyDg7_ABffe_zYZ_glUJwUWL1SMbZ7Vo4xkBRPi9YkeYYGjsGjHQRgeB64JEX0Yut2GcdAQkgpwSKTKrFQfBfwOTF3n3_nYWTJt3BoXm6AwhTBXrBVBvPh48y6_gr8UeWT2Bv2QGnyIEaRkxrHnP-e_KWl7JH_ZsEXYd_h8Kqx_xVMm7_N6PDfM2uwbovN-_xTpfXcZcWjzQ_xw"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-sm py-xs rounded-lg border border-border shadow-sm flex items-center gap-xs">
                <MdOutlineSchedule size={22} className="text-primary" />
                <span className="text-caption font-bold">12 min</span>
              </div>
            </div>
            <div className="flex-1 p-xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <span className="caption text-primary font-bold uppercase tracking-widest mb-xs block">
                    Lunch
                  </span>
                  <h3 className="headline-sm text-text-primary mb-sm ">
                    Mediterranean Quinoa Salad
                  </h3>
                  <p className="text-body-md text-text-secondary line-clamp-2">
                    High-fiber meal with complex carbs and plant-based protein
                    for sustained energy.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-headline-sm font-bold text-primary">
                    510
                  </span>
                  <span className="text-caption text-text-secondary block">
                    Calories
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-md mt-xl pt-xl border-t border-border">
                <div className="flex gap-md">
                  <button className="bg-surface border border-primary text-primary px-md md:px-lg py-sm rounded-lg button-text hover:bg-primary/5 transition-colors active:scale-95">
                    View Details
                  </button>
                  <button className="bg-surface border border-border text-text-secondary px-lg py-sm rounded-lg button-text hover:bg-surface-container-low transition-colors active:scale-95">
                    Replace
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Dinner Card --> */}
        <div className="meal-timeline-item relative flex flex-col md:flex-row gap-lg items-start">
          <div className="meal-timeline-connector flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-10 shadow-lg">
              03
            </div>
            {/* <span className="text-caption text-text-secondary mt-sm font-bold uppercase tracking-tighter z-50">
                07:00 PM
              </span> */}
          </div>
          <div className="flex-1 z-50 w-full bg-surface rounded-xl overflow-hidden shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1">
            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                data-alt="Pan-seared wild-caught salmon with a lemon-herb crust, served over a bed of steamed asparagus and wild rice. Elegant dark plate, soft warm evening lighting, restaurant quality food presentation, focus on texture and freshness."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcI194kc485cdPklxdqVB6aFKcHBHGJvvQ7CC9zjj6CKjMno-u9m82qS5IROpltzE8qKGG1SmWsX_D7mt9rJtiRgduVzdT-Qq746NvO5k0EGG4AQLSmMKA_ElrQsAdP-XKZ1F6X5OTY5GTHi5v5ATNB1m66H9CVYTwr4hDJeIL8mGmjL7E0mHhbumtTRZKFddz2K1x1UEutumYMR-sPzA4x7twCj7RGj2KLWobHNOM-EfBQa34jXj7qA"
              />
              <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur px-sm py-xs rounded-lg border border-border shadow-sm flex items-center gap-xs">
                <MdOutlineSchedule size={22} className="text-primary" />
                <span className="text-caption font-bold">25 min</span>
              </div>
            </div>
            <div className="flex-1 p-xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <span className="caption text-primary font-bold uppercase tracking-widest mb-xs block">
                    Dinner
                  </span>
                  <h3 className="headline-sm text-text-primary mb-sm">
                    Lemon-Herb Wild Salmon
                  </h3>
                  <p className="text-body-md text-text-secondary line-clamp-2">
                    A clean, high-protein dinner rich in healthy fats and
                    essential micronutrients.
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-headline-sm font-bold text-primary">
                    640
                  </span>
                  <span className="text-caption text-text-secondary block">
                    Calories
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-md mt-xl pt-xl border-t border-border">
                <div className="flex gap-md">
                  <button className="bg-surface border border-primary text-primary px-md md:px-lg py-sm rounded-lg button-text hover:bg-primary/5 transition-colors active:scale-95">
                    View Details
                  </button>
                  <button className="bg-surface border border-border text-text-secondary px-lg py-sm rounded-lg button-text hover:bg-surface-container-low transition-colors active:scale-95">
                    Replace
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Snacks Card (Asymmetric Bento Style) --> */}
        <div className="meal-timeline-item relative flex flex-col md:flex-row gap-lg items-start">
          <div className="meal-timeline-connector flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-10 shadow-lg">
              04
            </div>
            {/* <span className="text-caption text-text-secondary mt-sm font-bold uppercase tracking-tighter z-50">
                Anytime
              </span> */}
          </div>
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="bg-surface rounded-xl p-lg shadow-sm border border-border flex items-center gap-md">
              <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A small bowl of Greek yogurt topped with blueberies and a drizzle of honey. Fresh fruit, minimalist white aesthetic, clean bright lighting."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMae1UGZmwO57SyzUClNn5UKt102jYYJAxx1Y9IUhlJkd0g8uslYtHhX8vYy23xyeajUi9klTldFwadLTpjXukxRCv_JlQmXiNSD_r-z2dKHlAlzykGblc-4dN_Ph8_Fh5n3ubUEbQGnDARQexqfMNPAYmw5kv7bUT_nlW7P9_7TEdh_z297cDCS2_8vuiWNcZcEXslB0IvgvUQK2qstrhyBwTnn5A_1nIW0OkLdnr6kRKEyhD-dAY2w"
                />
              </div>
              <div>
                <span className="text-caption text-tertiary font-bold uppercase">
                  Snack 1
                </span>
                <h4 className="font-bold text-text-primary">
                  Greek Yogurt &amp; Berries
                </h4>
                <p className="text-caption text-text-secondary">
                  180 kcal • 15g Protein
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-xl p-lg shadow-sm border border-border flex items-center gap-md">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A handful of mixed raw nuts, including almonds, walnuts, and cashews on a wooden surface. Earthy tones, warm lighting."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9iu7vjt4S5LtafWjHTXTq449ERk3UaLF0wPve4wR9AAE1f4YmcYdTN83v0TVGvpWq4oHhqscs6EjmN8bkAFDR83Ry9GL6gmXy2R9nK2I7t40LhQTwuTmWDG1s0O_x66jd_3jkkSF6cLjFqci2rLRkhQM_2A5Zxro6uwsVqNvBj6jA1m82iameNd7j6xkG6NVZkOHcbJzwsv3UpH7jiCGA1nBSZVf9M0pcpC6SRUmC-WYt8YAFaz6xZg"
                />
              </div>
              <div>
                <span className="text-caption text-tertiary font-bold uppercase">
                  Snack 2
                </span>
                <h4 className="font-bold text-text-primary">Raw Nut Mix</h4>
                <p className="text-caption text-text-secondary">
                  160 kcal • 6g Protein
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* NEW CODE: Render the Backend-persisted confirmed meals for the displayed date. */}
      <div className="relative space-y-xl">
        <BackendErrorMessage message={backendError} />

        {isLoading && (
          <p className="body-lg text-text-secondary">Loading daily meals...</p>
        )}

        {!isLoading && !backendError && meals.length === 0 && (
          <p className="body-lg text-text-secondary">
            No confirmed meals for this date yet.
          </p>
        )}

        {!isLoading && !backendError && meals.map((meal, index) => (
          <div
            key={meal.id}
            className="meal-timeline-item relative flex flex-col md:flex-row gap-lg items-start z-50"
          >
            <div className="meal-timeline-connector flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-10 shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
            <div className="flex-1 z-50 w-full bg-surface rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1">
              <div className="flex-1 p-xl flex flex-col justify-between">
                <div className="flex justify-between items-start gap-md">
                  <div>
                    <span className="caption text-primary font-bold uppercase tracking-widest mb-xs block">
                      {meal.mealType}
                    </span>
                    <h3 className="headline-sm text-text-primary mb-sm">{meal.name}</h3>
                    <p className="body-md text-text-secondary">
                      {meal.servings} serving{meal.servings === 1 ? "" : "s"} - {meal.source}
                    </p>
                    <p className="mt-xs text-sm text-text-secondary">
                      Meal ID: {meal.id} - Date: {meal.date} - Created: {meal.createdAt}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-headline-sm font-bold text-primary">
                      {meal.energyKcal}
                    </span>
                    <span className="caption text-text-secondary block">Calories</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-md mt-xl pt-xl border-t border-border text-sm text-text-secondary">
                  <span>{meal.proteinG} g protein</span>
                  <span>{meal.carbohydrateG} g carbs</span>
                  <span>{meal.fatG} g fat</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
