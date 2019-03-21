import 'whatwg-fetch';
import history from '../root/history';

class Base {
    constructor (path) {
        // 接口规范为restFul规范
        // 因此，在构造函数，设置统一的请求地址
        // 子类内可以继承，设置资源path
        /* eslint-disable */
        this.requestUrl = `${API}${path}`;
    }
    request ({ id = '', pathAddon = '', data = {}, method = 'GET', requireLogin }) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${localStorage.getItem('access_token')}`
        };

        let settings = {
            method,
            headers,
            mode: 'cors'
        };

        // 设置id附加信息
        const idAddons = id ? `/${id}` : '';
        let requestUrl = `${this.requestUrl}${pathAddon}${idAddons}`;

        if (method !== 'GET') {
            settings.body = JSON.stringify(data);
        } else if (data) {
            requestUrl = new URL(requestUrl);
            Object.keys(data).forEach(key => requestUrl.searchParams.append(key, data[key]))
        }

        return new Promise((resolve, reject) => {
            fetch(requestUrl, settings).then((response) => {
                if (response.status >= 200 && response.status <= 304) {
                    return response.json();
                } else if (response.status === 401) {
                    // 移除token
                    // 路由跳转
                    localStorage.removeItem('access_token');
                    setTimeout(() => {
                        history.replace('/login');
                    }, 500);
                    // 未授权
                    return {
                        meta: { code: 401, msg: '未登录或登录过期' }
                    }
                }
            }).then(response => {
                if (method === 'put') {
                    response.response = data;
                } else if (method === 'delete') {
                    response.response = {id};
                }
                response.meta.code === 0 ? resolve(response) : reject(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default Base;
