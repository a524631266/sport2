import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators';
import { login, logout, getInfo } from '@/api/login';
import { getToken, setToken, removeToken, getTokenByKey } from '@/utils/auth';
import store from '@/store';

export interface IUserState {
  token: string;
  name: string;
  avatar: string;
  roles: string[];
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = '';
  public name = '';
  public avatar = '';
  public roles = [];

  @Action({ commit: 'SET_TOKEN' })
  public async Login(userInfo: { username: string, password: string, code: string}) {
    const username = userInfo.username.trim();
    const p = await login(username, userInfo.password, userInfo.code);
    const { token, rid, level, aid } = p as any;
    // tslint:disable-next-line:no-console
    console.log(' result data', token , rid, level, aid);
    setToken('token', token);
    setToken('rid', rid);
    setToken('level', level);
    setToken('aid', aid);
    return token;
  }

  @Action({ commit: 'SET_TOKEN' })
  public async FedLogOut() {
    removeToken();
    return '';
  }

  @MutationAction({ mutate: [ 'roles', 'name', 'avatar' ] })
  public async GetInfo() {
    // const level = getToken();
    const level = getTokenByKey('level');
    const token = getTokenByKey('token');
    if (level === undefined || token === undefined) {
      throw Error('GetInfo: token is undefined!');
    }
    const { data } = await getInfo(token, level);
    // tslint:disable-next-line:no-console
    console.log('user info', data);
    if (data.roles && data.roles.length > 0) {
      return {
        roles: data.roles,
        name: data.name,
        avatar: data.avatar,
      };
    } else {
      throw Error('GetInfo: roles must be a non-null array!');
    }
  }

  @MutationAction({ mutate: [ 'token', 'roles' ] })
  public async LogOut() {
    if (getToken() === undefined) {
      throw Error('LogOut: token is undefined!');
    }
    await logout();
    removeToken();
    return {
      token: '',
      roles: [],
    };
  }

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }
}

export const UserModule = getModule(User);
