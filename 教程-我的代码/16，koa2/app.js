/**
 * Created by ��־ΰ on 2017-03-02.
 */
// ����koa����koa 1.x��ͬ����koa2�У����ǵ������һ��class������ô�д��Koa��ʾ:
const Koa = require('koa');

// ����һ��Koa�����ʾweb app����:
const app = new Koa();

// �����κ�����app�����ø��첽������������
app.use(async (ctx, next) => {
    await next();
ctx.response.type = 'text/html';
ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// �ڶ˿�8000����:
app.listen(8000);
console.log('app started at port 3000...');