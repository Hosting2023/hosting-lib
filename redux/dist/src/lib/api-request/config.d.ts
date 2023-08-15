import { ContentType } from "../enum/api-methods.enum";
declare let API_CONFIG: {
    baseURL: string;
    headers: {
        Accept: string;
        "Content-type": ContentType;
    };
};
export declare function configureAPI(config: typeof API_CONFIG): void;
export { API_CONFIG };
