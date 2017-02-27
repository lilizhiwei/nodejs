var  optfile  =  require('./optfile');
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
        recall=getRecall(req,res);
        optfile.readfile('./zhuce.html',recall);
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
