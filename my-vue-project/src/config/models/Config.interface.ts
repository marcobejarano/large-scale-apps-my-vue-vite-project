import type { ItemsApiClientOptions } from "@/api-client/models/items";

export interface HttpClientConfigInterface {
  tokenKey: string;
  clientType: string;
};

export interface ConfigInterface {
  global: {
    version: number;
  }

  httpClient: HttpClientConfigInterface,

  apiClient: {
    type: string;
  },

  items: {
    apiClientOptions: ItemsApiClientOptions
  }
}
