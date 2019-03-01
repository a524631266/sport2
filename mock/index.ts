import Mock from 'mockjs';
import userAPI from './user';
import tableAPI from './table';

// User
// Mock.mock(/\/backend\/login/, 'post', userAPI.login);
// 拦截info的时候判断是管理员还是业务员
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo);
Mock.mock(/\/user\/logout/, 'post', userAPI.logout);

// Table
Mock.mock(/\/table\/list/, 'get', tableAPI.list);

export default Mock;
