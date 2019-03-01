import Cookies from 'js-cookie';

const TokenKey = 'token';

export const getToken = () => Cookies.get(TokenKey);
export const getTokenByKey = (key: string) => Cookies.get(key);

export const setToken = (key: string, value: string) => Cookies.set(key, value);

export const removeToken = () => Cookies.remove(TokenKey);
