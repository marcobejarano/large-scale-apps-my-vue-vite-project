import { 
  ItemsApiClientModel,
  type ItemsApiClientInterface,
} from "@/api-client/models/items";
import { config } from "@/config";

export const itemsApiClient: ItemsApiClientInterface =
  new ItemsApiClientModel(config.items.apiClientOptions);
