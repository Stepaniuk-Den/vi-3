import { create } from "zustand";

interface HoveredMenuState {
  hoveredMenu: string | null;
  setHoveredMenu: (menu: string | null) => void;
}

export const useHoveredMenuStore = create<HoveredMenuState>((set) => ({
  hoveredMenu: null,
  setHoveredMenu: (menu) => set({ hoveredMenu: menu }),
}));
