import { create } from "zustand";

//persist middleware tells Zustand:
//"Persist this store so that the state survives a page reload"
//And:
//name: "nutriguard-auth"
//gives the persisted state a name in browser storage

import { persist } from "zustand/middleware";

export const authStore = create(
  persist(

    //set is a function Zustand gives us. We use it whenever we want to change something inside the store.

    (set) => ({
      // Authentication state
      user: null,
      accessToken: null,
      refreshToken: null,
      expiration: null,
      isProfileCompleted: false,

      // Save login information
      setAuth: (data) => {
        set({
          user: data.user,
          accessToken: data.token,
          refreshToken: data.refreshToken,
          expiration: data.expiration,
          isProfileCompleted: data.isProfileCompleted,
        });
      },

      // Clear authentication information
      clearAuth: () => {
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          expiration: null,
          isProfileCompleted: false,
        });
      },

      // Update tokens after a successful refresh
      updateTokens: (data) => {
        set({
          accessToken: data.token,
          refreshToken: data.refreshToken,
          expiration: data.expiration,
        });
      },
    }),
    {
      name: "nutriguard-auth",
    }
  )
);

