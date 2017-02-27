var  http  =  require('http');
var  optfile  =  require('./optfile');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        function recall(data){
            response.write(data);
            response.end('ok');
            console.log("操作完成");
        }
        optfile.readfile('./注册页面.html',recall);
        console.log("进程执行完毕");
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');/**
 * Created by 李志伟 on 2017-01-09.
 */
