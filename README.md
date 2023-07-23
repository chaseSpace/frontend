# Frontend

### T1: 关于axios的练习

统一设置
```
baseUrl=http://1.1.1.1
```

1. 发起 Get请求，并通过queryparams方式传参 a=1，b=2
2. 发起 POST请求，并通过application/x-www-form-urlencoded 方式传参  a=1，b=2
3. 发起 PUT 请求，并通过queryparams传参a=1，同时通过application/json方式传参b=2
4. 发起 POST请求，并通过 multipart/form-data 传文件
5. 发起 DELETE请求，通过 text/plain 方式传参
6. 要求在上面的所有请求代码中统一在axios拦截器中添加以下逻辑：
   - 在返回数据时打印 url的path部分，以及返回的状态码
   - 假设Response是包含code字段的json，判断code为非200时打印整个Response 的body
8. 发起POST请求，并指定proxy，其中host=1.1.1.1, port=999
9. 发起POST请求，并实现基本认证功能（先了解什么是HTTP basic Auth），username=wlike   password=19991231
