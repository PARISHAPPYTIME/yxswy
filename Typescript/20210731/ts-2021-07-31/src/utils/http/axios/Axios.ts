import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios';
import { CreateAxiosOptions } from './axiosTransform';
import { AxiosCanceler } from './axiosCancel';
import { isFunction } from '../../is';

export class VAxios {
    private axiosInstance: AxiosInstance;
    private readonly options: CreateAxiosOptions;

    constructor(options: CreateAxiosOptions) {
        this.options = options;
        this.axiosInstance = axios.create(options);
        this.setupInterceptors()
    }


    private getTransform() {
        const { transform } = this.options
        return transform
    }

    private setupInterceptors() {
        const transform = this.getTransform();
        if (!transform) {
            return;
        }

        const { requestInterceptors } = transform;

        const axiosCanceler = new AxiosCanceler();

        this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            const {
                headers: { ignoreCancelToken },
            } = config;

            const ignoreCancel =
                ignoreCancelToken !== undefined
                    ? ignoreCancelToken
                    : this.options.requestOptions?.ignoreCancelToken;

            !ignoreCancel && axiosCanceler.addPending(config);
            if (requestInterceptors && isFunction(requestInterceptors)) {
                config = requestInterceptors(config, this.options);
            }
            return config
        }, undefined)
    }
}