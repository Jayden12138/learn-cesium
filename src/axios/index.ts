import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response;
    if (status === 200) {
      const { code, message } = data;
      return handleResponseCode(code, message, data);
    }
    return Promise.reject(new Error('Unexpected status code'));
  },
  (error: AxiosError) => handleError(error)
);

function handleResponseCode(code: number, message: string, data: any) {
  const messages: Record<number, string> = {
    1001: '登录信息已过期，请重新登录！',
    1002: '当前账号已在其它端登录，请重试！',
    1003: message || '未知错误'
  };

  if (messages[code]) {
    return Promise.reject(data);
  }

  return data;
}

function handleError(error: AxiosError) {
  if (error.response) {
    // 根据http状态码处理错误信息
  } else if (error.request) {
    // 请求发送失败
  } else {
    // 其他错误
  }

  return Promise.reject(error);
}

export default instance;
