import { create } from "zustand"

export const mealStore = create((set)=>({
    meals: [],

    setMeals: (meals) => set({meals}),

    addMeal: (meal) => set((state) => ({
        meals: [...state.meals, meal]
    })),

    clearMeals: () => set({meals: []})
}))