import { AxiosResponse } from 'axios';

import { httpService, IHttpService } from './httpService';

import { HTTP_METHODS } from '@/data';
import { TSimpleStringObj } from '@/types';

//

interface IApiService {
  get: <T>(
    url: string,
    params: TSimpleStringObj,
    options: TSimpleStringObj,
  ) => Promise<AxiosResponse<T>>;
  post: <T>(
    url: string,
    params: TSimpleStringObj,
    options: TSimpleStringObj,
  ) => Promise<AxiosResponse<T>>;
  put: <T>(
    url: string,
    params: TSimpleStringObj,
    options: TSimpleStringObj,
  ) => Promise<AxiosResponse<T>>;
  patch: <T>(
    url: string,
    params: TSimpleStringObj,
    options: TSimpleStringObj,
  ) => Promise<AxiosResponse<T>>;
  delete: <T>(
    url: string,
    params: TSimpleStringObj,
    options: TSimpleStringObj,
  ) => Promise<AxiosResponse<T>>;
}

/**
 * Class выполняет пост и гет запросы
 * @module ApiService
 */
class ApiService implements IApiService {
  /**
   * Синглтон httpService предоставляет метод для выполнения запросов к API
   * @private
   * @type {IHttpService}
   */
  private httpService: IHttpService;

  /**
   * Получаем из параметров httpServiceLocal и записываем в приватную переменную httpService
   * @constructor
   * @param httpServiceLocal
   */
  constructor(httpServiceLocal: IHttpService) {
    this.httpService = httpServiceLocal;
  }

  /**
   * Выполняет гет запрос с переданными параметрами
   * @method get
   * @param url {string} URL по которому будет сделан запрос
   * @param params {TSimpleStringObj} параметры запроса
   * @param options {TSimpleStringObj} опции запроса
   * @return {Promise<AxiosResponse<T>>}
   */
  get<T>(url: string, params = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.httpService.api<T>({
      url,
      params,
      method: HTTP_METHODS.GET,
      ...options,
    });
  }

  /**
   * Выполняет пост запрос
   * @method post
   * @param url {string}
   * @param url {string} URL по которому будет сделан запрос
   * @param data {T} данные в пост запрос
   * @param options {TSimpleStringObj} опции запроса
   * @return  {Promise<AxiosResponse<T>>}
   */
  post<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.httpService.api<T>({
      url,
      data,
      method: HTTP_METHODS.POST,
      ...options,
    });
  }

  /**
   * Выполняет пут запрос
   * @method put
   * @param url {string}
   * @param url {string} URL по которому будет сделан запрос
   * @param data {T} данные в пут запросу
   * @param options {TSimpleStringObj} опции запроса
   * @return {Promise<AxiosResponse<T>>}
   */
  put<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.httpService.api<T>({
      url,
      data,
      method: HTTP_METHODS.PUT,
      ...options,
    });
  }

  /**
   * Выполняет patch запрос
   * @method patch
   * @param url {string} URL по которому будет сделан запрос
   * @param data {T} данные в патч запросу
   * @param options {TSimpleStringObj} опции запроса
   * @return {Promise<AxiosResponse<T>>}
   */
  patch<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.httpService.api<T>({
      url,
      data,
      method: HTTP_METHODS.PATCH,
      ...options,
    });
  }

  /**
   * Выполняет delete запрос
   * @method delete
   * @param url {string}
   * @param url {string} URL по которому будет сделан запрос
   * @param data {T} данные в пут запросу
   * @param options {TSimpleStringObj} опции запроса
   * @return {Promise<AxiosResponse<T>>}
   */
  delete<T>(url: string, data = {}, options = {}): Promise<AxiosResponse<T>> {
    return this.httpService.api<T>({
      url,
      data,
      method: HTTP_METHODS.DELETE,
      ...options,
    });
  }
}

export const apiService = new ApiService(httpService);

Object.freeze(apiService);
