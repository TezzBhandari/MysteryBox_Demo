import { create } from "zustand";
import { randomValuedArray } from "./utils/helperFuntion";

export interface MysterBoxStore {
  openModal: boolean;
  attempt: number;
  draw: Array<number>;
  increaseAttempt: () => void;
  setOpenModal: () => void;
}
const useMysterBoxStore = create<MysterBoxStore>((set, get) => ({
  attempt: 0,
  openModal: false,
  draw: randomValuedArray(5),
  increaseAttempt: () => {
    set((state) => ({ attempt: state.attempt + 1 }));
  },
  setOpenModal: () => set((state) => ({ openModal: !state.openModal })),
}));

export default useMysterBoxStore;
