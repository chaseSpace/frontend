# Frontend

### P1: 关于axios的练习

统一设置
```
baseUrl=http://1.1.1.1
```

1. 发起 Get请求，并通过queryparams方式传参 a=1，b=2
2. 发起 POST请求，并通过application/x-www-form-urlencoded 方式传参  a=1，b=2
3. 发起 PUT 请求，并通过queryparams传参a=1，同时通过application/json方式传参b=2
4. 发起 POST请求，并通过 multipart/form-data 传文件
5. 发起 DELETE请求，通过 text/plain 方式传参
6. 发起POST请求，并指定proxy，其中host=1.1.1.1, port=999
7. 发起POST请求，并实现基本认证功能（先了解什么是HTTP basic Auth），username=wlike   password=19991231
8. 最后，请封装一个request函数，内含一个axios实例，并添加以下逻辑：
   - 使用axios的validateStatus属性，让http状态码200~400范围都走axios的then函数（then函数内判断200状态码时打印Response数据），其他走catch函数（打印具体err）
   - 对于传入的data，若是get请求就填入axios的params，否则填入data

第八题要求实现如下效果
```
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
```


#### 练习备注
- 在`index.js`中编写代码

#### 启动项目
```
cd about_axios/
npm i
npm start   // 打开网页  F12观察控制台是否有错误
```