const activityMultipliers = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9,
};

const goalAdjustments = {
    1: -500,
    2: 0,
    3: 300,
    LoseWeight: -500,
    MaintainWeight: 0,
    GainWeight: 300,
};

const macroPercentages = {
    1: { protein: 0.45, carbs: 0.3, fat: 0.2 },
    2: { protein: 0.35, carbs: 0.4, fat: 0.25 },
    3: { protein: 0.35, carbs: 0.45, fat: 0.2 },
    LoseWeight: { protein: 0.45, carbs: 0.3, fat: 0.2 },
    MaintainWeight: { protein: 0.35, carbs: 0.4, fat: 0.25 },
    GainWeight: { protein: 0.35, carbs: 0.45, fat: 0.2 },
};

const FIBER_G_PER_1000_CALORIES = 14;
const WATER_ML_PER_KG = 30;

const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
            today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
};

export const calculateNutritionNeeds = (profile) => {
    if (!profile) return null;

    const age = calculateAge(profile.dateOfBirth);

    // -------------------------
    // 1. BMR - Mifflin St Jeor
    // -------------------------

    let bmr;

    // The profile forms store gender as 1 (male) or 2 (female).
    if (Number(profile.gender) === 1 || profile.gender === "Male") {
        bmr =
            (10 * profile.weight) +
            (6.25 * profile.height) -
            (5 * age) +
            5;
    } else {
        bmr =
            (10 * profile.weight) +
            (6.25 * profile.height) -
            (5 * age) -
            161;
    }

    // -------------------------
    // 2. TDEE
    // -------------------------

    const activityMultiplier =
        activityMultipliers[profile.activityLevel] ?? 1.2;

    const tdee = bmr * activityMultiplier;

    // -------------------------
    // 3. Calories based on goal
    // -------------------------

    const goal = Number.isFinite(Number(profile.goal))
        ? Number(profile.goal)
        : profile.goal;

    const goalAdjustment = goalAdjustments[goal] ?? 0;

    const dailyCalories = tdee + goalAdjustment;

    // -------------------------
    // 4. Macros
    // -------------------------

    const percentages = macroPercentages[goal] ?? macroPercentages[2];
    const protein = (dailyCalories * percentages.protein) / 4;
    const carbs = (dailyCalories * percentages.carbs) / 4;
    const fat = (dailyCalories * percentages.fat) / 9;

    // -------------------------
    // 7. Fiber
    // -------------------------

    const fiber =
        (dailyCalories / 1000) *
        FIBER_G_PER_1000_CALORIES;

    // -------------------------
    // 8. Water
    // -------------------------

    const water = (profile.weight * WATER_ML_PER_KG) / 1000;

    return {
        age,
        bmr,
        tdee,
        calories: dailyCalories,
        protein,
        carbs,
        fat,
        fiber,
        water,
    };
};

export const getHealthRisk = (bmi, whtr) => {
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