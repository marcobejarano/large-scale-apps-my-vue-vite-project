import { 
  ItemsApiClientModel,
  type ItemsApiClientInterface,
  type ItemsApiClientOptions
} from "@/api-client/models/items";

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: '/path/to/your/real/api/end-point'
  },
  mockDelay: 1000
};

export const itemsApiClient: ItemsApiClientInterface =
  new ItemsApiClientModel(options);
