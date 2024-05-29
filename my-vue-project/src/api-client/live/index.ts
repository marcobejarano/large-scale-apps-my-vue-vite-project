import type { ApiClientInterface } from "../models/ApiClient.interface";
import { itemsApiClient } from "./items";

export const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
};
