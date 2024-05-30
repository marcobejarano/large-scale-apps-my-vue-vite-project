import {
  HttpRequestType,
  HttpclientFetch,
  type HttpRequestParamsInterface
} from "@/http-client";

let mockRequestParams: HttpRequestParamsInterface = {
  requestType: HttpRequestType.get,
  endpoint: 'path/to/a/get/api/endpoint',
  requiresToken: false,
};

describe('HttpClient: axios-client: request: get', (done) => {
  const httpClient = new HttpclientFetch();

  it('should execute get request successfully', async () => {
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    const expectedResult = {
      result: `request completed: ${ mockRequestParams.endpoint }`
    };

    vitest
      .spyOn(global, 'fetch')
      .mockImplementation(
        async () => {
          return Promise.resolve({
            redirected: false,
            json: () => Promise.resolve(expectedResult),
          } as any)
        }
      );

    try {
      const response = await httpClient.request(mockRequestParams);

      expect(response).not.toBeNull();
      expect(response).toEqual(expectedResult);
    } catch (error) {
      console.info('AxiosClient.request.get.test.ts: error', error);
    }

    global.fetch = unmockedFetch
  });

  it('get should throw error on rejection', () => {
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    vitest
      .spyOn(global, 'fetch')
      .mockImplementation(async () => Promise.reject());

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual('Error: HttpClientFetch: exception');
    });
  });
});
