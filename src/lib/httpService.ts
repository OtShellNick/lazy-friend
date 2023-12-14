import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
//

export interface IHttpService {
  setRequestInterceptor: () => void;
  setResponseInterceptor: () => void;
  api<T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

/**
 * Class выполняет запросы с переданными данными
 * так же настраивает axios interceptors
 * с их помощью осуществляет формирования параметров для запроса
 * и  обновления токена
 * @module HttpService
 */

class HttpService implements IHttpService {
  /**
   * Переменная для хранения количества попыток обновления токена
   * @private
   * @type {number}
   */
  private retries: number;

  /**
   * Инстанс axios
   * @private
   * @type {AxiosInstance}
   * @readonly
   */
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: process.env.NEXT_AUTH_URL });
    this.retries = 3;
    this.setRequestInterceptor();
    this.setResponseInterceptor();
  }

  /**
   * Axios request interceptor
   * он перехватывает запрос  и добавляет в него токен и параметры user_id и acc_id
   * @method setRequestInterceptor
   * @return {void}
   */
  setRequestInterceptor(): void {
    this.axiosInstance.interceptors.request.use(
      config => {
        const token = '';

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        config.params = {
          ...config.params,
        };
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }

  /**
   * Axios request interceptor
   * перехватывает ответ от сервера проверяет есть ли ошибка и если ошибка 403 и статус 'Access denied'
   * осуществляет запрос на обновление токена и в случае успеха записывает в хранилище браузера новый токен
   * @method setResponseInterceptor
   * @return {void}
   */
  setResponseInterceptor(): void {
    this.axiosInstance.interceptors.response.use(
      config => config,
      error => {
        // const requestData = this.storage.getRequestData();
        // if (
        //   error.response?.status &&
        //   error.response.status === REQUEST_STATUS.TOKEN_EXPIRED &&
        //   error.response.data.status !== REQUEST_TEXT_ERROR_STATUS.ACCESS_DENIED
        // ) {
        //   if (this.retries > 0) {
        //     this.axiosInstance
        //       .request({
        //         url: `${END_POINTS_URL.UPDATE_TOKEN}?token=${requestData.accessToken}`,
        //       })
        //       .then(response => {
        //         this.storage.setToken(response.data.access_token);
        //         this.retries = 3;
        //         // error.config.headers.Authorization = `Bearer ${response.data.access_token}`;
        //         // instance.request(error.config);
        //       })
        //       .catch(_error => Promise.reject(_error));
        //     this.retries--;
        //   }
        // }
        return Promise.reject(error);
      },
    );
  }

  api<T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.request<T>(options);
  }
}

export const httpService = new HttpService();
