const activityMultipliers = {
    Sedentary: 1.2,
    LightlyActive: 1.375,
    ModeratelyActive: 1.55,
    VeryActive: 1.725,
};

const goalAdjustments = {
    LoseWeight: -500,
    MaintainWeight: 0,
    GainWeight: 300,
};

const PROTEIN_G_PER_KG = 1.6;
const FAT_G_PER_KG = 1;
const FIBER_G_PER_1000_CALORIES = 14;
const WATER_ML_PER_KG = 35;

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

    if (profile.gender === "Male") {
        bmr =
            10 * profile.weight +
            6.25 * profile.height -
            5 * age +
            5;
    } else {
        bmr =
            10 * profile.weight +
            6.25 * profile.height -
            5 * age -
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

    const goalAdjustment =
        goalAdjustments[profile.goal] ?? 0;

    const dailyCalories = tdee + goalAdjustment;

    // -------------------------
    // 4. Protein
    // -------------------------

    const protein = profile.weight * PROTEIN_G_PER_KG;

    const proteinCalories = protein * 4;

    // -------------------------
    // 5. Fat
    // -------------------------

    const fat = profile.weight * FAT_G_PER_KG;

    const fatCalories = fat * 9;

    // -------------------------
    // 6. Carbs
    // Remaining calories
    // -------------------------

    const carbCalories =
        dailyCalories -
        proteinCalories -
        fatCalories;

    const carbs = carbCalories / 4;

    // -------------------------
    // 7. Fiber
    // -------------------------

    const fiber =
        (dailyCalories / 1000) *
        FIBER_G_PER_1000_CALORIES;

    // -------------------------
    // 8. Water
    // -------------------------

    const water =
        (profile.weight * WATER_ML_PER_KG) / 1000;

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