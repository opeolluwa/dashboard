/**
 * define the theme and store it in local storage or the capacitor preference object
 */

import { defineStore } from "pinia";
import { Preferences } from "@capacitor/preferences";
import { getStoredData, storeData } from "@/main";

export const useDarkMode = defineStore("colorTheme", {
  state: (): State => ({
    isDarkMode: false,
    colorTheme: "light-theme",
  }),

  getters: {
    enabledDarkMode: /* async */ (state) => state.colorTheme === "dark-theme",
  },

  actions: {
    toggleColorTheme() {
      /*  const hasDarkPreference = window.matchMedia(
                 "(prefers-color-scheme: dark)"
             ).matches;
             if (hasDarkPreference) {
                 this.colorTheme = "dark-theme";
             } */
      if (this.colorTheme === "light-theme") {
        this.colorTheme = "dark-theme";
      } else if (this.colorTheme === "dark-theme") {
        this.colorTheme = "light-theme";
      }
    },
  },
});

// the state
interface State {
  isDarkMode: boolean;
  colorTheme: string;
}
