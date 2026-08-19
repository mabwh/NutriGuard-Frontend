import { useEffect, useState } from "react";
import { GiDrop } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { MdBakeryDining, MdOutlineLocalFireDepartment } from "react-icons/md";
import { getCustomMealsByDate } from "../api/customMeals";
import BackendErrorMessage from "../components/BackendErrorMessage";

const mealImages = {
  Breakfast: ["/b1.jpg", "/b2.jpg", "/b3.jpg", "/b4.jpg"],
  Lunch: ["/l1.jpg", "/l2.jpg", "/l3.jpg", "/l4.jpg"],
  Dinner: ["/d1.jpg", "/d2.jpg", "/d3.jpg", "/d4.jpg"],
};
const getRandomMealImage = (mealType) => {
  console.log("CHOOSING IMAGE");
  const images = mealImages[mealType];
  if (!images || images.length === 0) {
    return "/user.jpg";
  }

  return images[Math.floor(Math.random() * images.length)];
};

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

  useEffect(() => {
    let isMounted = true;

    const loadCustomMeals = async () => {
      try {
        setIsLoading(true);
        setBackendError("");
        console.log("CALLING API");
        const response = await getCustomMealsByDate(formattedDate);

        if (!response.isSuccess) {
          if (isMounted) {
            setBackendError(response.message);
          }
          return;
        }

        if (isMounted) {
          const mealsWithImages = response.data.map((meal) => ({
            ...meal,
            image: getRandomMealImage(meal.mealType),
          }));

          setMeals(mealsWithImages);
        }
      } catch (error) {
        if (isMounted) {
          setBackendError(
            error.response?.data?.message || "Unable to load daily meals.",
          );
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
    <div className="min-h-screen">
      {/*  header  */}
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
      <BackendErrorMessage message={backendError} />

      {isLoading && (
        <p className="body-lg text-text-secondary">Loading daily meals...</p>
      )}

      {!isLoading && !backendError && meals.length === 0 && (
        <p className="body-lg text-text-secondary">
          No confirmed meals for this date yet.
        </p>
      )}
      {/* daily nutrition values */}
      {meals?.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md mb-xxl">
          <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-3">
            <MdOutlineLocalFireDepartment size={22} className="text-primary" />
            <span className="body-md text-text-secondary font-bold uppercase tracking-wider">
              Calories
            </span>
            <span className="text-headline-md font-bold text-primary">
              {dailyNutrition.calories.toFixed(0)}{" "}
              <span className="text-caption ">kcal</span>
            </span>
          </div>

          <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-2">
            <IoIosFitness size={30} className="text-info rotate-18" />
            <span className="body-md text-text-secondary font-bold uppercase tracking-wider">
              Protein
            </span>
            <span className="text-headline-md font-bold text-info">
              {dailyNutrition.protein.toFixed(0)}{" "}
              <span className="text-caption ">g</span>
            </span>
          </div>

          <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-2">
            <MdBakeryDining size={30} className="text-warning" />
            <span className="body-md text-text-secondary font-bold uppercase tracking-wider">
              Carbs
            </span>
            <span className="text-headline-md font-bold text-warning">
              {dailyNutrition.carbohydrates.toFixed(0)}{" "}
              <span className="text-caption">g</span>
            </span>
          </div>
          <div className="bg-surface p-xl rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col gap-2">
            <GiDrop size={30} className="text-tertiary" />
            <span className="body-md text-text-secondary font-bold uppercase tracking-wider">
              Fats
            </span>
            <span className="text-headline-md font-bold text-tertiary">
              {dailyNutrition.fat.toFixed(0)}{" "}
              <span className="text-caption ">g</span>
            </span>
          </div>
        </div>
      )}
      {!isLoading && !backendError && console.log("fuck u\n", meals)}
      {!isLoading &&
        !backendError &&
        meals.map((meal, index) => (
          <div
            key={meal.id}
            className="meal-timeline-item relative flex flex-col md:flex-row gap-lg items-start z-0"
          >
            {/* timeline */}
            <div className="meal-timeline-connector flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold z-10 shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* Meal Card * */}

            <div className=" flex-1 z-50 w-full bg-surface  rounded-xl  shadow-[0px_4px_12px_rgba(0,0,0,0.08)] border border-border flex flex-col md:flex-row transition-all duration-300 hover:shadow-[0px_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 mb-10">
              <div className="md:w-1/3 h-58  relative">
                <img
                  className="w-full h-full object-cover"
                  src={meal.image}
                  alt={meal.name}
                />
              </div>
              <div className="flex-1 z-50 p-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="caption text-primary font-bold uppercase tracking-widest mb-xs block">
                      {meal.mealType}
                    </span>
                    <h3 className="headline-sm text-text-primary mb-md">
                      {meal.name}
                    </h3>
                    <div className="body-md text-text-secondary line-clamp-2">
                      Nutrition Values:
                      <div className="grid grid-cols-3 gap-md py-md border-t border-border mt-sm">
                        <div className="flex flex-col">
                          <span className="text-caption text-text-secondary font-medium uppercase tracking-wider">
                            Protein
                          </span>
                          <span className="text-body-lg font-bold text-info">
                            {meal.proteinG}g
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-caption text-text-secondary font-medium uppercase tracking-wider">
                            Carbs
                          </span>
                          <span className="text-body-lg font-bold text-warning">
                            {meal.carbohydrateG}g
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-caption text-text-secondary font-medium uppercase tracking-wider">
                            Fats
                          </span>
                          <span className="text-body-lg font-bold text-tertiary">
                            {meal.fatG}g
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-headline-sm font-bold text-primary">
                      {meal.energyKcal}
                    </span>
                    <span className="caption text-text-secondary block">
                      Calories
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
