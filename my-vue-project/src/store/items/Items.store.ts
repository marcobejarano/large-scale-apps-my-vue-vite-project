import { reactive } from "vue";
import type { ItemsStateInterface } from "./models";
import { apiClient } from "@/api-client";

const itemsState = reactive<ItemsStateInterface>({
  loading: false,
  items: [],
});

const actions = {
  loadItems: async () => {
    itemsState.loading = true;
    itemsState.items = [];

    const data = await apiClient.items.fetchItems();
    itemsState.loading = false;
    itemsState.items = data;
  },
  toggleItemSelected: async (id: number) => {
    const item = (itemsState.items || []).find((object) => object.id === id);
    if (item) {
      item.selected = !item.selected;
    }
  }
};

const getters = {
  get loading() {
    return itemsState.loading;
  },
  get items() {
    return itemsState.items;
  }
};

export interface ItemsStoreInterface {
  getters: typeof getters;
  actions: typeof actions;
};

export const useItemsStore = (): ItemsStoreInterface => {
  return {
    getters,
    actions,
  };
};
