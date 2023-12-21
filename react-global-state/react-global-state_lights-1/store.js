import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useBearStore = create(
  persist(
    (set) => ({
      lights: [
        { id: 1, name: "Living Room", isOn: false },
        { id: 2, name: "Kitchen", isOn: false },
        { id: 3, name: "Bedroom", isOn: false },
        { id: 4, name: "Bathroom", isOn: false },
        { id: 5, name: "Garage", isOn: false },
        { id: 6, name: "Porch", isOn: false },
        { id: 7, name: "Garden", isOn: false },
        { id: 8, name: "Office", isOn: false },
      ],

      handleLightToggle: (id) =>
        set((state) => ({
          lights: state.lights.map((light) =>
            light.id === id ? { ...light, isOn: !light.isOn } : light
          ),
        })),


      handleAllOn: () =>
        set((state) => ({
          lights: state.lights.map((light) => ({ ...light, isOn: true })),
        })),

      handleAllOff: () =>
        set((state) => ({
          lights: state.lights.map((light) => ({ ...light, isOn: false })),
        })),
    }),
    {
      name: "lights",
      getStorage: () => localStorage,
    }
  )
);
export default useBearStore;
