import { StatusCode } from "@/constance/statusCode";
import axios, { Axios, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { message } from "antd";

type Result<T> = {
    code: number,
    message: string,
    data?: T
}

export class DAxios {
    instance: Axios
    constructor(baseURL = '/api', timeout = 5000) {
        // axios instance
        this.instance = axios.create({
            baseURL,
            timeout
        })
        // axios intercept
        this.interceptRequest()
        this.interceptResponse()
    }
    interceptRequest() {
        this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            let token = localStorage.getItem('token') || ''
            config.headers.Authorization = token
            return config
        }, err => {
            return Promise.reject(err)
        })
    }
    interceptResponse() {
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            let result = res.data
            if (result.code === StatusCode.SUCCESS) {
                return result
            } else {
                message.error(result.message)
            }
        }, err => {
            // http request error handing
            let messageStr = "";
            switch (err.response.status) {
                case 400:
                    messageStr = "Request error";
                    break;
                case 401:
                    messageStr = "Unauthorized, please log in again(401)";
                    break;
                case 403:
                    messageStr = "access denied(403)";
                    break;
                case 404:
                    messageStr = "Request error(404)";
                    break;
                case 408:
                    messageStr = "request timeout(408)";
                    break;
                case 500:
                    messageStr = "Server error(500)";
                    break;
                case 501:
                    messageStr = "Service not implemented(501)";
                    break;
                case 502:
                    messageStr = "network error(502)";
                    break;
                case 503:
                    messageStr = "Service unavailable(503)";
                    break;
                default:
                    messageStr = `link error (${err.response.status})!`;
            }
            message.error(messageStr)
            return Promise.reject(err.response)

        })
    }
    public get<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
        config = config || {}
        if (Object.prototype.toString.call(data) === '[object Object]') {
            config.params = data
        }
        return this.instance.get(url, config)
    }
    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<Result<T>> {
        return this.instance.post(url, data, config)
    }
}

export default new DAxios()