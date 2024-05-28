import { useItemsStore } from "../items"

export const useAppStore = () => {
  return {
    itemsStore: useItemsStore(),
  };
};

export type RootStoreInterface = ReturnType<typeof useAppStore>;