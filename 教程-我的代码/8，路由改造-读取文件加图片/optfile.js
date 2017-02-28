'use script';
var  fs=  require('fs');
module.exports={
    readfile:function(path,a){          //异步执行
        fs.readFile(path,  function  (err,  data)  {
            if  (err)  {
                console.log('错误：'+err);
                recall('出现错误');
            }else{
                a(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync:function(path){      //同步读取
        var  data  =  fs.readFileSync(path,'utf-8');
        console.log("同步方法执行完毕");
        return  data;
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,  file)  {
            if  (err)  {
                console.log('错误：'+err);
                recall('出现错误');
                return;
            }else{
                res.write(file,'binary');
                res.end();
                console.log("操作完成");
            }
        });
        console.log("异步方法执行完毕");
    },
    writefile:function(path,data,a){    //异步方式
        fs.writeFile(path,  data,  function  (err)  {
            if  (err)  {
                console.log('错误：'+err);
                recall('出现错误');
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
