'use script';
var  http  =  require('http');
var    url    =    require('url');
var    router    =    require('./router');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        var    pathname =  url.parse(request.url).pathname;//获取路由
        pathname    =    pathname.replace(/\//,    '');//替换掉前面的/
        router[pathname](request,response);
        console.log("进程执行完毕");
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');/**
 * Created by 李志伟 on 2017-01-07.
 */
/**
 * Created by 李志伟 on 2017-01-07.
 */
