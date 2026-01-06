import { create } from "zustand";
import { ProductType } from "../types/types";

type FiltersStoreType = {
  filters: {
    sort: "default" | "asc" | "desc";
    characteristics: Partial<
      Record<keyof ProductType["characteristics"], string[] | undefined>
    >;
    page: number;
  };
  setSort: (sort: "default" | "asc" | "desc") => void;
  setPage: (page: number) => void;
  resetCharacteristics: () => void;
  addCharacteristic: (
    name: keyof ProductType["characteristics"],
    value: string
  ) => void;
  deleteCharacteristic: (
    name: keyof ProductType["characteristics"],
    value: string
  ) => void;
};

export const useFiltersStore = create<FiltersStoreType>((set) => ({
  filters: {
    sort: "default",
    characteristics: {},
    page: 1,
  },
  setPage: (page) => {
    set((state) => ({
      ...state,
      filters: { ...state.filters, page },
    }));
  },
  setSort: (sort) => {
    set((state) => ({
      ...state,
      filters: { ...state.filters, sort, page: 1 },
    }));
  },
  resetCharacteristics: () => {
    set((state) => ({
      ...state,
      filters: { ...state.filters, characteristics: {}, page: 1 },
    }));
  },

  addCharacteristic: (name, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        characteristics: {
          ...state.filters.characteristics,
          [name]: [...(state.filters.characteristics?.[name] || []), value],
        },
        page: 1,
      },
    })),
  deleteCharacteristic: (name, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        characteristics: {
          ...state.filters.characteristics,
          [name]: state.filters.characteristics?.[name]?.filter(
            (v) => v !== value
          ),
        },
        page: 1,
      },
    })),
}));
