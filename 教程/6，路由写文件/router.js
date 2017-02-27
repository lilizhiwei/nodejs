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
    write:function(req,res){
        recall=getRecall(req,res);
        optfile.writefile('./views/one.txt','我的写入内容',recall);
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
