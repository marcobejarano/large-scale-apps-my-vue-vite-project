import type { ItemInterface } from "@/models";

export interface ItemsStateInterface {
  loading: boolean;
  items: ItemInterface[];
}
