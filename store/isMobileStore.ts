import { create } from "zustand";

interface IsMobileState {
  isMobile: boolean | false;
  setIsMobile: (menu: boolean | false) => void;
}

export const useIsMobileStore = create<IsMobileState>((set) => ({
  isMobile: false,
  setIsMobile: (menu) => set({ isMobile: menu }),
}));
