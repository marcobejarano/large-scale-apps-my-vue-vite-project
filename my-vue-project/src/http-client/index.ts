import { 
  HttpClientAxios,
  HttpclientFetch,
  type HttpClientInterface
} from "./models";

let _httpClient: HttpClientInterface | undefined = undefined;

export const useHttpClient = () => {
  if (!_httpClient) {
    const clientType = 'fetch';
    
    if (clientType === 'fetch') {
      _httpClient = new HttpclientFetch();
    } else if (clientType === 'axios') {
      _httpClient = new HttpClientAxios();
    }
  }

  return _httpClient as HttpClientInterface;
}

export * from "./models";
