var mysql  = require('mysql');  //����MySQLģ��
function OptPool(){
    this.flag=true; //�Ƿ����ӹ�
    this.pool = mysql.createPool({
        host: 'localhost',       //����
        user: 'root',               //MySQL��֤�û���
        password: '123456',        //MySQL��֤�û�����
        database: 'test',
        port: '3306'                   //�˿ں�
    });
    this.getPool=function(){
        if(this.flag){
            //����connection�¼�
            this.pool.on('connection', function(connection) {
                connection.query('SET SESSION auto_increment_increment=1');
                this.flag=false;
            });
        }
        return this.pool;
    }
};
module.exports = OptPool;
/**
 * Created by ��־ΰ on 2017-03-01.
 */
