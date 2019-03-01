import { param2Obj } from './utils';

const tokens: { [index: string]: any } = {
  admin: {
    token: 'admin-token',
    level: 1,
  },
  editor: {
    token: 'editor-token',
    level: 2,
  },
};

const users: { [index: string]: any } = {
  // 'admin-token': {
  //   roles: ['admin'],
  //   introduction: 'I am a super administrator',
  //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //   name: 'Super Admin',
  // },
  // 'editor-token': {
  //   roles: ['editor'],
  //   introduction: 'I am an editor',
  //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //   name: 'Normal Editor',
  // },
  1: {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  2: {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
};

export default {
  login: (res: any) => {
    // tslint:disable-next-line:no-console
    console.log('mock login', res);
    const { u } = JSON.parse(res.body);
    const data = tokens[u];
    if (data) {
      return {
        code: 20000,
        data,
      };
    }

    return {
      code: 60204,
      message: 'Account or password is incorrect.',
    };
  },

  getInfo: (res: any) => {
    // tslint:disable-next-line:no-console
    console.log('mock login', res);
    const { level } = param2Obj(res.url);
    const info = users[level];

    if (info) {
      return {
        code: 20000,
        data: info,
      };
    }

    return {
      code: 50008,
      message: 'Login failed, unable to get user details.',
    };
  },

  logout: () => {
    // tslint:disable-next-line:no-console
    console.log('mock logout');
    return {
      code: 20000,
      data: 'success',
    };
  },
};
