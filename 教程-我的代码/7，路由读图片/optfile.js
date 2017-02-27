'use script';
var  fs=  require('fs');
module.exports={
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,  file)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                res.write(file,'binary');
                res.end();
                console.log("操作完成");
            }
        });
        console.log("异步方法执行完毕");
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
