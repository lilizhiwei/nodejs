var mysql  = require('mysql');  //����MySQLģ��
//����һ��connection
var connection = mysql.createConnection({
    host: 'localhost',       //����
    user: 'root',               //MySQL��֤�û���
    password: '123456',        //MySQL��֤�û�����
    database: 'test',
    port: '3306'                   //�˿ں�
});
//����һ��connection
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
//----����
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['ccc','ccc'];
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log('insert err:',err.message);
        return;
    }
    console.log('insert success');
});
//ִ�в�ѯ
connection.query('SELECT * from user', function(err, rs) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname);
    }
});
//�ر�connection
connection.end(function(err){
    if(err){
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
}); /**
 * Created by ��־ΰ on 2017-03-01.
 */
