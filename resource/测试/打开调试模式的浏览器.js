const puppeteer = require('puppeteer')

async function test() {
    // puppeteer.launch 实例开启浏览器，
    // 可以传入一个options对象，
    // 可以配置为无界面浏览器和有界面浏览器，无界面浏览器性能更高，有界面一般用于调试
        let options={
            // 设置视窗的框高
            defaultViewport:{
                width:1400,
                height:800
            },
            // 设置为有界面，如果为true，则为无界面
            headless:false

        }
        const browser = await puppeteer.launch(options)
        // 打开页面
        let page = await browser.newPage()
        // 访问网站
        await page.goto('http://192.168.22.65:8081/ygw-dfb/doc.html#/default/%E5%9C%B0%E6%96%B9%E7%97%85-%E7%A2%98%E7%9B%B8%E5%85%B3%E7%96%BE%E7%97%85/iodineRelatedDiseaseListUsingPOST',{
            timeout: 30 * 1000,
            waitUntil: [
                'load',                       //等待 “load” 事件触发
                'domcontentloaded',  //等待 “domcontentloaded” 事件触发
                'networkidle0',          //在 500ms 内没有任何网络连接
                'networkidle2'           //在 500ms 内网络连接个数不超过 2 个
            ]
         })
        // 获取页面内容id为u1下的a标签
        // $$eval函数使得回调函数可以运行在浏览器中
        let elements=await page.$$eval('strong',(elements2)=>{
            console.log(elements2) // 在浏览器控制台输出
            let eles=[]
            elements2.forEach((item,i)=>{
                console.log(item.innerHTML) // 在浏览器控制台输出
                let eleObj={
                    href:item.getAttribute('href'),
                    text:item.innerText
                }
                eles.push(eleObj)
            })
        })
        // 监听事件，监听浏览器输出内容
        page.on('console',(...args)=>{
            console.log(args) // 在命令提示符终端输出
        })
}
test()