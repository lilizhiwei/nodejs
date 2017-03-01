/**
 * Created by ��־ΰ on 2017-03-01.
 */
var OptPool = require('./ljc');

var optPool = new OptPool();
var pool = optPool.getPool();

//ִ��SQL���
pool.getConnection(function(err,conn){
    //----����
    var userAddSql = 'insert into user (uname,pwd) values(?,?)';
    var param = ['eee','eee'];
    conn.query(userAddSql,param,function(err,rs){
        if(err){
            console.log('insert err:',err.message);
            return;
        }
        console.log('insert success');
        //conn.release(); //�Ż����ӳ�
    })
    //��ѯ
    conn.query('SELECT * from user', function(err, rs) {
        if (err) {
            console.log('[query] - :'+err);
            return;
        }
        for(var i=0;i<rs.length;i++){
            console.log(rs[i].uname);
        }
        conn.release(); //�Ż����ӳ�
    });
});