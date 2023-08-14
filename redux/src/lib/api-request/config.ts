import { ContentType } from "../enum/api-methods.enum";

let API_CONFIG = {
  baseURL: "http://localhost:8080/",
  headers: {
    Accept: "application.json",
    "Content-type": ContentType.applicationJSON,
  },
};

export function configureAPI(config: typeof API_CONFIG) {
  API_CONFIG = { ...API_CONFIG, ...config };
}

export { API_CONFIG };
