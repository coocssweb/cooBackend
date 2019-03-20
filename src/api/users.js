import Base from './base';
class Users extends Base {
    constructor () {
        super('auth');
    }

    login (name, password) {
        return this.request({ data: { name, password }, pathAddon: '/login', method: 'post' });
    }

    logout () {
        return this.request({ pathAddon: '/logout', method: 'post' });
    }

    info () {
        return this.request({ pathAddon: '/info' });
    }

    edit (param) {
        return this.request({ data: param, method: 'post' });
    }

    updatePassword (password, checkPassword) {
        return this.request({ pathAddon: '/password', method: 'put' });
    }
}

export default new Users();
