import axios from "axios";
import { 
  HttpClientAxios,
  HttpRequestType,
  type HttpRequestParamsInterface
} from "@/http-client";

let mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: 'path/to/a/get/api/endpoint',
  requiresToken: false,
};

describe('HttpClient: axios-client: request: get', () => {
  const httpClient = new HttpClientAxios();

  it('should execute get request successfully', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(
        async () => Promise.resolve({
          data: `request completed: ${ mockRequestParams.endpoint }`
        })
      );

    httpClient
      .request(mockRequestParams)
      .then((response) => {
        expect(response).toEqual(`request completed: ${ mockRequestParams.endpoint }`)
      })
      .catch((error) => console.info('AxiosClient.request.get.test.ts: error', error));
  });

  it('get should throw error on rejection', () => {
    vitest
      .spyOn(axios, 'get')
      .mockImplementation(
        async () => Promise.reject({
          data: `request completed: ${ mockRequestParams.endpoint }`
        })
      );

    httpClient
      .request(mockRequestParams)
      .catch((error) => {
        expect(error).toBeDefined();
        expect(error.toString()).toEqual('Error: HttpClientAxios: exception')
      });
  });
});
