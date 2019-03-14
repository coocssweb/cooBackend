import 'whatwg-fetch';

class Base {
    constructor (path) {
        // 接口规范为restFul规范
        // 因此，在构造函数，设置统一的请求地址
        // 子类内可以继承，设置资源path
        /* eslint-disable */
        this.requestUrl = `${API}${path}`;
    }
    request ({ id = '', data = {}, method = 'GET', requireLogin }) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('access_token')}`
        };

        let settings = {
            method,
            headers,
            mode: 'cors'
        };

        if (method !== 'GET') {
            settings.body = JSON.stringify(data);
        }

        // 设置id附加信息
        const idAddons = id ? `/${id}` : '';

        return new Promise((resolve, reject) => {
            fetch(`${this.requestUrl}${idAddons}`, settings).then((response) => {
                resolve(response.json());
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default Base;
