/**
 * Created by ��־ΰ on 2017-03-01.
 */
var events=require("events");
var http = require('http');
function UserBean(){
    this.eventEmit = new events.EventEmitter();
    this.zhuce=function(req,res){
        console.log("ע��");
        req['uname']="aa";
        req['pwd']="bb";
        this.eventEmit.emit('zhuceSuc','aa','bb');  //�׳��¼���Ϣ
    },
        this.login=function(req,res){
            console.log("��¼");
            res.write("�û���:"+req['uname']);
            res.write("����:"+req['pwd']);
            res.write("��¼");
        }
}
module.exports = UserBean;