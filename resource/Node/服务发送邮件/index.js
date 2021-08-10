const nodemailer = require("nodemailer");

// // 如果你没有一个真实邮箱的话可以使用该方法创建一个测试邮箱
// let testAccount = async function () {
//     return await nodemailer.createTestAccount();
// }

// 创建发送邮件的对象
let transporter = nodemailer.createTransport({
    host: "smtp.163.com",
    "port": 465,
    "secure": true,
    // 这里的host、port、secure可以参考node-moudules->nodemailer->lib->well->known->services.json文件中的对应邮箱服务，这里给的是qq邮箱
    auth: {
        user: '18267094443@163.com', // 发送方邮箱的账号
        pass: 'DNOLVZONKNRXDTGT', // 邮箱授权密码
    }
});

// 邮件信息
let mailobj = {
    from: '<18267094443@163.com>', // 发件人邮箱地址
    to: "3162353291@qq.com", // 收件人邮箱地址
    subject: "Hello", //邮件主题
    text: "这是一个机器邮件信息", //文本
    html: "<b>Hello world?</b>" // html文本   text和html只会出现一个
}
//发送邮件
transporter.sendMail(mailobj, (err, data) => {
    console.log(1, err)
    console.log(2, data)
});