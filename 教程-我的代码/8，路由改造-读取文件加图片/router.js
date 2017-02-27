var  optfile  =  require('./optfile');
function getRecall(req,res){
    res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
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
        optfile.readfile('./views/login.html',recall);
    },
    zhuce:function(req,res){
        recall=getRecall(req,res);
        optfile.readfile('./views/注册页面.html',recall);
    },
    write:function(req,res){
        recall=getRecall(req,res);
        optfile.writefile('./views/one.txt','我的写入内容',recall);
    },
    showimg:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/pi.jpg',res);
    },
    showim:function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/pig.jpg',res);
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
