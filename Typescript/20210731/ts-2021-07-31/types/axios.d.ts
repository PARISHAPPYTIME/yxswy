export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export interface RequestOptions {
    ignoreCancelToken?: boolean;
    isTransformResponse?: boolean;
    isReturnNativeResponse?: boolean;
    errorMessageMode?: ErrorMessageMode;
    apiUrl?: string;
    joinPrefix?: boolean;
    joinParamsToUrl?: boolean;
    formatDate?: boolean;
    joinTime?: boolean;
}

export interface Result<T = any> {
    code: number;
    type: 'success' | 'error' | 'warning';
    message: 'string';
    result: T;
}
