import { HttpMethod } from "../enum/api-methods.enum";
declare class BaseRequest {
    baseFetch({ method, uri, data }: {
        method: HttpMethod;
        uri: string;
        data?: any;
    }): Promise<any>;
}
declare class ApiRequest extends BaseRequest {
    get(uri: string): Promise<any>;
    post(uri: string, data: any): Promise<any>;
    put(uri: string, data: any): Promise<any>;
    delete(uri: string): Promise<any>;
}
declare const _default: ApiRequest;
export default _default;
