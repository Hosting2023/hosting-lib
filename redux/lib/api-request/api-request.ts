import { ContentType, HttpMethod } from "../enum/api-methods.enum";

const API_CONFIG = {
  baseURL: "http://localhost:8080/",
  headers: {
    Accept: "application.json",
    "Content-type": ContentType.applicationJSON,
  },
};

class BaseRequest {
  async baseFetch({ method, uri, data }: { method: HttpMethod; uri: string; data?: any }) {
    const url = `${API_CONFIG.baseURL}${uri}`;
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(data),
        headers: API_CONFIG.headers,
        credentials: "include",
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes(ContentType.applicationJSON)) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

class ApiRequest extends BaseRequest {
  get(uri: string) {
    return this.baseFetch({ method: HttpMethod.GET, uri });
  }

  post(uri: string, data: any) {
    return this.baseFetch({ method: HttpMethod.POST, uri, data });
  }

  put(uri: string, data: any) {
    return this.baseFetch({ method: HttpMethod.PUT, uri, data });
  }

  delete(uri: string) {
    return this.baseFetch({ method: HttpMethod.DELETE, uri });
  }
}

export default new ApiRequest();
