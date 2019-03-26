import Base from './base';
class Projects extends Base {
    constructor () {
        super('projects');
    }

    fetch (param) {
        return this.request({});
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

export default new Projects();
