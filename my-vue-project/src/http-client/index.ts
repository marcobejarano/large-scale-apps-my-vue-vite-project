import { config } from "@/config";
import { 
  HttpClientAxios,
  HttpclientFetch,
  type HttpClientInterface
} from "./models";

let _httpClient: HttpClientInterface | undefined = undefined;

export const useHttpClient = () => {
  if (!_httpClient) {
    const clientType = config.httpClient.clientType;
    
    if (clientType === 'fetch') {
      _httpClient = new HttpclientFetch();
    } else if (clientType === 'axios') {
      _httpClient = new HttpClientAxios();
    }
  }

  return _httpClient as HttpClientInterface;
}

export * from "./models";
