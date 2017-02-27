'use script';
var  fs=  require('fs');
module.exports={
    writefile:function(path,data,a){    //异步方式
        fs.writeFile(path,  data,  function  (err)  {
            if  (err)  {
                throw  err;
            }else{
                a('写入文件成功');
            }
        });
        console.log("异步方法执行完毕");
    },
    writeFileSync:function(path,data){  //同步方式
        fs.writeFileSync(path,  data);
        console.log("同步写文件完成");
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
