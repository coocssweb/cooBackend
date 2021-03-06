import Base from './base';
class Articles extends Base {
    constructor () {
        super('articles');
    }

    fetch (classify) {
        return this.request({ data: { classify } });
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

export default new Articles();
