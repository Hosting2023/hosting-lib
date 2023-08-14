import { ContentType, HttpMethod } from "../enum/api-methods.enum";

class BaseRequest {
  URL = "http://localhost:8080/";
  HEADER = {
    Accept: "application.json",
    "Content-type": ContentType.applicationJSON,
  };

  async baseFetch(method: HttpMethod, uri: string, data?: any) {
    try {
      const response = await fetch(`${this.URL}${uri}`, {
        method: method,
        body: JSON.stringify(data),
        headers: this.HEADER,
        credentials: "include",
      });
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes(ContentType.applicationJSON)) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

class ApiRequest extends BaseRequest {
  get(uri: string) {
    return this.baseFetch(HttpMethod.GET, uri);
  }

  //TODO typing data
  post(uri: string, data: any) {
    return this.baseFetch(HttpMethod.POST, uri, data);
  }

  put(uri: string, data: any) {
    return this.baseFetch(HttpMethod.PUT, uri, data);
  }

  delete(uri: string) {
    return this.baseFetch(HttpMethod.DELETE, uri);
  }
}

export default new ApiRequest();
