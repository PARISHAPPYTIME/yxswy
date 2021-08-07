import { deepMerge } from '/@/utils/index'
import { VAxios } from './Axios'
import { AxiosTransform, CreateAxiosOptions } from './axiosTransform'
import { ContentTypeEnum } from '/@/enums/httpEnum'
import { useGlobSetting } from '/@/hooks/setting'
import { AxiosResponse } from 'axios'
import { RequestOptions, Result } from '/#/axios'
import { ResultEnum } from '/@/enums/httpEnum'
import { useMessage } from '/@/hooks/web/useMessage';
import { isString } from '../../is'

const globSetting = useGlobSetting()
const urlPrefix = globSetting.urlPrefix;
const { createMessage, createErrorModal } = useMessage();

const transform: AxiosTransform = {
    transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
        const { isReturnNativeResponse, isTransformResponse } = options
        // 是否返回原生的响应头 比如获取响应头时使用该属性
        if (isReturnNativeResponse) {
            return res;
        }

        // 不进行任何处理，直接返回
        // 用于页面代码可能直接获取 code, data, message 这些信息时开启
        if (!isTransformResponse) {
            return res.data;
        }

        const { data } = res;
        if (!data) {
            throw new Error('The interface request failed, please try...');
        }

        const { code, result, message } = data;
        const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
        if (hasSuccess) {
            return result;
        }

        // 如果不希望中断当前请求，请 return 数据，否则直接抛出异常即可
        let timeoutMsg = '';
        switch (code) {
            case ResultEnum.TIMEOUT:
                timeoutMsg = 'Login time out, please log in again!'
                break;
            default:
                if (message) {
                    timeoutMsg = message;
                }
        }

        if (options.errorMessageMode === 'modal') {
            createErrorModal({ title: 'Error Tip', content: timeoutMsg });
        } else if (options.errorMessageMode === 'message') {
            createMessage.error(timeoutMsg);
        }

        throw new Error(timeoutMsg || 'The interface request failed, please try...')
    },

    beforeRequestHook: (config, options) => {
        const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;

        if (joinPrefix) {
            config.url = `${urlPrefix}${config.url}`;
        }

        if (apiUrl && isString(apiUrl)) {
            config.url = `${apiUrl}${config.url}`;
        }

        const params = config.params || {};
        const data = config.data || false;
        formatDate && data && !isString(data) && formatRequestDate(data)
    }
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
    return new VAxios(
        deepMerge({
            // authenticationScheme: 'Bearer',
            authenticationScheme: '',
            timeout: 10 * 1000,
            // 基础接口地址
            // baseURL: globalSetting.apiUrl
            // 接口可能会有通用的地址部分，可以统一抽取出来
            urlPrefix: urlPrefix,
            headers: { 'Content-Type': ContentTypeEnum.JSON },
            transform,
            requestOptions: {
                // 默认将prefix 添加到url
                joinPrefix: true,
                // 是否返回原生响应头 比如：需要获取响应头时使用该属性
                isReturnNativeResponse: false,
                // 需要对返回数据进行处理
                isTransformResponse: true,
                // post请求的时候添加参数到url
                joinParamsToUrl: false,
                // 格式化提交参数时间
                formatDate: true,
                // 消息提示类型
                errorMessageMode: 'message',
                // 接口地址
                apiUrl: globSetting.apiUrl,
                //  是否加入时间戳
                joinTime: true,
                // 忽略重复请求
                ignoreCancelToken: true,
                // 是否携带token
                withToken: true,
            },
        }, opt || {})
    )
}

export const defHttp = createAxios();
