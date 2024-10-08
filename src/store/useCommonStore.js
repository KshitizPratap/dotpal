import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { dummyJobData } from "../config/Config";

const useCommonStore = create(
  devtools((set) => ({
    showCreateJob: false,
    showBackdrop: false,
    selectedJobsIndex: undefined,
    jobs: dummyJobData,
    userCred: { username: "", password: "" },
    setUserCred: (userCred) => set({ userCred }),
    setJobs: (jobs) => set({ jobs }),
    setSelectedJobsIndex: (selectedJobsIndex) => set({ selectedJobsIndex }),
    setShowBackdrop: (showBackdrop) => set({ showBackdrop }),
    setShowCreateJob: (showCreateJob) => set({ showCreateJob }),
  }))
);

export default useCommonStore;
