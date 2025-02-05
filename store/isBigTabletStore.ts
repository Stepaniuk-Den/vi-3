import { create } from "zustand";

interface IsBigTabletState {
  isBigTablet: boolean | false;
  setIsBigTablet: (menu: boolean | false) => void;
}

export const useIsBigTabletStore = create<IsBigTabletState>((set) => ({
  isBigTablet: false,
  setIsBigTablet: (menu) => set({ isBigTablet: menu }),
}));
