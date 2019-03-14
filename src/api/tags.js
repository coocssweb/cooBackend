import Base from './base';
class Tags extends Base {
    constructor () {
        super('tags');
    }

    fetch (param) {
        return this.request({});
    }

    fetchOne (id) {
        return this.request({ id });
    }

    create (param) {
        return this.request({ data: param, method: 'post' });
    }

    edit (id, param) {
        return this.request({ id, data: param, method: 'put' });
    }

    remove (id) {
        return this.request({ id, method: 'delete' });
    }
}

export default new Tags();
