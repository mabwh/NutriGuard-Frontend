import { create } from "zustand"

export const chatStore = create((set)=>({
    messages: [],

    addMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),

    clearMessages: () => set({messages: []})
}))