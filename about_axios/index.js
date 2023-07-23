import axios from 'axios';


// 编写区域




// 第八题
function request(url, type = 'GET', data = {}) {
    // TODO 实现此函数
}

// 下面是request的使用示例
export default {
    login(username, password) {
        return request('/auth/login', 'POST', {username, password})
    },
    get_user_info() {
        return request('/auth/get_user_info')
    }
}
