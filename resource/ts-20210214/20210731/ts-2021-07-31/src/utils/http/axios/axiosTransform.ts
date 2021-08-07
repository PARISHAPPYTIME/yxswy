import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { RequestOptions, Result } from '/#/axios'

export interface CreateAxiosOptions extends AxiosRequestConfig {
    authenticationScheme?: string;
    urlPrefix?: string;
    transform?: AxiosTransform;
    requestOptions?: RequestOptions
}

export abstract class AxiosTransform {
    /**
     * @description 处理请求前的配置
     */
    beforeRequestHook?: (
        config: AxiosRequestConfig,
        options: RequestOptions
    ) => AxiosRequestConfig;

    /**
     * @description 处理请求成功后
     */
    transformRequestHook?: (
        res: AxiosResponse<Result>,
        options: RequestOptions
    ) => any


    /**
     * @description 请求失败
     */
    requestCatchHook?: (
        e: Error,
        options: RequestOptions
    ) => Promise<any>

    /**
     * @description 请求之前的拦截
     */
    requestInterceptors?: (
        config: AxiosRequestConfig,
        options: CreateAxiosOptions
    ) => AxiosRequestConfig;

    /**
     * @description 请求之后的拦截
     */
    responseInterceptors?: (
        res: AxiosResponse<any>
    ) => AxiosResponse<any>;

    /**
     * @description 请求之前的拦截器错误处理
     */
    requestInterceptorsCatch?: (
        error: Error,
    ) => void

    /**
     * @description 请求之后的拦截器错误处理
     */
    responseInterceptorsCatch?: (
        error: Error
    ) => void
}