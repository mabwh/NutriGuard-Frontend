import { z } from "zod";

export const chpSechema = z.object({
    dateOfBirth: z
        .string()
        .min(1, "Date of birth is required")
        .refine((date) => {
            const birthDate = new Date(date);
            const today = new Date();

            let age = today.getFullYear() - birthDate.getFullYear();

            const monthDifference = today.getMonth() - birthDate.getMonth();

            if (
                monthDifference < 0 ||
                (monthDifference === 0 &&
                    today.getDate() < birthDate.getDate())
            ) {
                age--;
            }

            return age >= 18 && age <= 120;
        }, "Age must be between 18 and 120 years"),

    gender: z
        .coerce.number()
        .refine((value) => value === 1 || value === 2, {
            message: "Please select your gender",
        }),

    height: z
        .number({ error: "Please enter your height", })
        .min(50, "Height must be at least 50 cm")
        .max(250, "Height must be less than 250 cm"),

    weight: z
        .number({ error: "Please enter your weight", })
        .min(20, "Weight must be at least 20 kg")
        .max(300, "Weight must be less than 300 kg"),

    waist: z
        .number({ error: "Please enter your waist size", })
        .min(20, "Waist must be at least 20 cm")
        .max(250, "Waist must be less than 250 cm"),

    activityLevel: z
        .coerce.number({ error: "Please select your activity level" })
        .refine((value) => [1, 2, 3, 4, 5].includes(value), {
            message: "Please select your activity level",
        }),

    allergies: z
        .string()
        .trim()
        .optional(),

    goal: z
        .coerce.number({
            error: "BMI could not be calculated",
        })
        .refine((value) => [1, 2, 3].includes(value), {
            message: "Please Leave me alone",
        }),
});