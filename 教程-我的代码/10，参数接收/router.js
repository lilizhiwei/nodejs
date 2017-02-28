var  optfile  =  require('./optfile');
var    url    =    require('url');
var  querystring  =  require('querystring');  //post需导入
function getRecall(req,res){
    function recall(data){
        res.write(data);
        res.end('ok');
        console.log("操作完成");
    }
    return recall;
}
module.exports={
    login:function(req,res){
        recall=getRecall(req,res);
        optfile.readfile('./login.html',recall);
    },
    zhuce:function(req,res){
        //--------get方式接收参数----------------
        /*
        var rdata = url.parse(req.url,true).query;
        console.log(rdata);
        if(rdata['zhanghao']!=undefined){
            console.log(rdata['zhanghao']);
            console.log(rdata['mima']);
        }
        */

        //-------post方式接收参数----------------
        /*
        var  post  =  '';          //定义了一个post变量，用于暂存请求体的信息
        req.on('data',  function(chunk){        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            post  +=  chunk;
        });
        //-------注意异步-------------
        req.on('end',  function(){        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            post  =  querystring.parse(post);
            console.log('账号:'+post['zhanghao']+'\n');
            console.log('密码:'+post['mima']+'\n');
        });
        */
        recall=getRecall(req,res);
        optfile.readfile('./zhuce.html',recall);
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
