'use script';
var  fs=  require('fs');
module.exports={
    readfile:function(path,a){          //异步执行
        fs.readFile(path,  function  (err,  data)  {
            if  (err)  {
                console.log(err);
            }else{
                a(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync:function(path){      //同步读取
        var  data  =  fs.readFileSync(path,'utf-8');
        //console.log(data);
        console.log("同步方法执行完毕");
        return  data;
    }
} /**
 * Created by 李志伟 on 2017-01-07.
 */
