import type { ItemInterface } from "@/models";
import type { ItemsApiClientInterface } from "./ItemsApiClient.interface";
import type { ItemsApiClientEndpoints, ItemsApiClientOptions } from "./ItemsApiClientOptions.interface";
import {
  HttpRequestType,
  useHttpClient,
  type HttpRequestParamsInterface
} from "@/http-client";

export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly endpoints!: ItemsApiClientEndpoints;
  private readonly mockDelay: number = 0;

  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints;
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay;
    }
  }

  fetchItems(): Promise<ItemInterface[]> {
    const requestParameters: HttpRequestParamsInterface = {
      requestType: HttpRequestType.get,
      endpoint: this.endpoints.fetchItems,
      requiresToken: false,
      mockDelay: this.mockDelay
    };

    return useHttpClient().request<ItemInterface[]>(requestParameters);
  }
}
