import { create } from "zustand"

export const profileStore = create((set)=>({
    profile: null,

    setProfile: (resData) => set({profile: resData})
}))