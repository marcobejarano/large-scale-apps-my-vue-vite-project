import { apiLiveClient } from "./live";
import { apiMockClient } from "./mock";
import type { ApiClientInterface } from "./models/ApiClient.interface";
import { config } from "@/config";

let apiClient: ApiClientInterface;

if (config.apiClient.type === 'live') {
  apiClient = apiLiveClient;
} else {
  // Default is always apiMockClient
  apiClient = apiMockClient;
}

export { apiClient };
