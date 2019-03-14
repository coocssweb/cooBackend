import Base from './base';
class Tool extends Base {
    constructor () {
        super('tool');
    }

    upload (formData) {
        return this.request({ data: formData, method: 'post' });
    }

    timestamp (id) {
        return this.request({ });
    }
}

export default new Tool();
