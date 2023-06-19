import Service from './index';

const ADMIN_LOGIN = '/auth/login';

export default class LoginManagement {
  static async adminLogin(payload) {
    return Service.post(`${ADMIN_LOGIN}`, payload).then(response => {
      return response.data;
    });
  }
}
