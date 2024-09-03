import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCommonStore = create(
  devtools((set) => ({
    showCreateJob: false,
    showBackdrop: false,
    setShowBackdrop: (value) => set({ showBackdrop: value }),
    setShowCreateJob: (value) => set({ showCreateJob: value }),
  }))
);

export default useCommonStore;
