import request from '@/utils/request';
import qs from 'qs';
export const login = (username: string, password: string, code: string) =>
  request({
    url: '/backend/login',
    method: 'post',
    data: qs.stringify({
      u: username,
      p: password,
      code,
    }),
  });

export const getInfo = (token: string, level: string) =>
  request({
    url: '/user/info',
    method: 'get',
    params: {
      level,
      token,
    },
  });

export const logout = () =>
  request({
    url: '/user/logout',
    method: 'post',
  });
