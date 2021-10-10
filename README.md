# yxswy

## 备注

1. `promise` 并发时考虑 `Promise.all()`, 其他时候考虑 `async` `await`; 如果并发请求时，只要其中一个异步函数处理完成，就返回结果，要用到 `Promise.race()`

---

#### 待尝试

[那些你应该说再见的 npm 祖传老库](https://zhuanlan.zhihu.com/p/415361629)

手写一个 promise

我觉得应该手写一个 todolist 用来替代这个 markdown

vuex 的争论 https://www.zhihu.com/question/478752529/answer/2054017021

#### 学习

- [初学者也能看懂的 Vue3 源码中那些实用的基础工具函数](https://juejin.cn/post/6994976281053888519?utm_source=gold_browser_extension#heading-15)

- [我给网站做了一场性能手术](https://juejin.cn/post/6959333330277892133)

- [廖雪峰-Git 教程](https://www.liaoxuefeng.com/wiki/896043488029600)

[X] [25 个 Vue 技巧，开发了 5 年了，有些竟然还是第一次见！](https://zhuanlan.zhihu.com/p/393456120)
[X] [你会用 ES6，那倒是用啊！](https://juejin.cn/post/7016520448204603423)

- [死磕 36 个 JS 手写题（搞懂后，提升真的大）](https://juejin.cn/post/6946022649768181774#heading-0)

- [使用 cypress 来做前端自动化测试 - 体验由外到内的 TDD 开发姿势](https://www.bilibili.com/video/BV1WU4y1J7Va?share_medium=android&share_plat=android&share_session_id=2e6ff244-7158-4d4c-acc7-027273eb943d&share_source=WEIXIN&share_tag=s_i&timestamp=1628066274&unique_k=NkB9h3)

        前端自动化测试 vite + vue + cypress

- [【探索学习】esbuild 面向未来最快的打包器](https://www.bilibili.com/video/BV1nA41137jT)

- [Remote Repositories vscode 神器，不用把代码下载到本地](https://www.bilibili.com/video/BV1U64y1t7TH)

- [Babel 那些事儿](https://juejin.cn/post/6985540486823936031)

        放在最后的案例是可以执行成功的，但是有 单双引号 的问题，所以作者使用屏幕快照生成打印查看效果。

- [vue-cli3 中不能使用 hasOwnProperty 的解决办法](https://blog.csdn.net/xiao1215fei/article/details/105409145)

- [任务，微任务，队列和时间表](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

- [Vue 进阶必学之高阶组件实战](https://github.com/sl1673495/blogs/issues/41)

- [Vue 进阶必学之高阶组件 HOC](https://zhuanlan.zhihu.com/p/126552443)

- [自动部署](https://juejin.im/post/6887751398499287054#heading-7)

- [对开发人员有用的定律、理论、原则和模式](https://github.com/nusr/hacker-laws-zh#90-9-1-%E6%B3%95%E5%88%99-9091-principle-or-1-rule)

- [前端性能优化](https://juejin.im/post/6892994632968306702)

- [TypeScript 入门系列 | TypeScript 基础（一）](https://juejin.im/post/6844903929172459534)

- [Jest 测试单元入门](https://www.cnblogs.com/SamWeb/p/11454923.html)

- [vue typescript mixins 混入](https://www.jianshu.com/p/836385e3d82a)

### 前端思考

- [前端进阶（十九）如何写出优质代码](https://blog.csdn.net/u014744118/article/details/89293047)

- [前端进阶（十四）ES6+版本新特性](https://blog.csdn.net/u014744118/article/details/89226566)

- [Vue 进阶篇初级](https://www.cnblogs.com/zhaopanpan/p/9236538.html)

- [基于 Vue 的前端架构，我做了这 15 点](https://juejin.cn/post/6901466994478940168)

- [TypeScript 菜鸟教程](https://www.runoob.com/typescript/ts-ambient.html)

- [【Vue 进阶】手把手教你在 Vue 中使用 JSX](https://juejin.cn/post/6870480188086419470)

### 待看

- [Rxjs 知识整理](https://www.jianshu.com/p/16be96d69143)

- [前端高效开发必备的 js 库梳理](https://juejin.cn/post/6898962197335490573)

- [如何评价 ramdajs ？](https://www.zhihu.com/question/38604818)

- 堆栈 实现文件的排列执行 （测试 未完成）

- Vue.\$nextTick() （未完成）

### vue3.0

- [watchEffect 与 wacth](https://blog.csdn.net/weixin_45535899/article/details/113338595)

- [12 个 GitHub 上超火的 JavaScript 奇技淫巧项目，找到写 JavaScript 的灵感！](https://juejin.cn/post/6906126184031977480)

### 工具

- [在线转化 vue3 代码为 render](https://vue-next-template-explorer.netlify.app/#%7B%22src%22%3A%22%20%20%3Ch1%3E%E5%A4%A7%E5%AE%B6%E5%A5%BD%20kkb%E6%AC%A2%E8%BF%8E%E4%BD%A0%3C%2Fh1%3E%5Cn%22%2C%22ssr%22%3Afalse%2C%22options%22%3A%7B%22mode%22%3A%22module%22%2C%22filename%22%3A%22Foo.vue%22%2C%22prefixIdentifiers%22%3Afalse%2C%22hoistStatic%22%3Atrue%2C%22cacheHandlers%22%3Atrue%2C%22scopeId%22%3Anull%2C%22inline%22%3Afalse%2C%22ssrCssVars%22%3A%22%7B%20color%20%7D%22%2C%22compatConfig%22%3A%7B%22MODE%22%3A3%7D%2C%22whitespace%22%3A%22condense%22%2C%22bindingMetadata%22%3A%7B%22TestComponent%22%3A%22setup-const%22%2C%22setupRef%22%3A%22setup-ref%22%2C%22setupConst%22%3A%22setup-const%22%2C%22setupLet%22%3A%22setup-let%22%2C%22setupMaybeRef%22%3A%22setup-maybe-ref%22%2C%22setupProp%22%3A%22props%22%2C%22vMySetupDir%22%3A%22setup-const%22%7D%2C%22optimizeImports%22%3Afalse%2C%22optimizeBindings%22%3Afalse%7D%7D)

- [将代码解析成抽象语法树 @babel/parser ](https://astexplorer.net/)

- [Ts 高手篇：22 个示例深入讲解 Ts 最晦涩难懂的高级类型工具](https://juejin.cn/post/6994102811218673700?utm_source=gold_browser_extension)

- [stackblitz 在线开发](https://stackblitz.com/edit/nuxt-starter-rh5jcg?file=pages%2Findex.vue)

- [github 在线开发](https://github.dev/PARISHAPPYTIME/VitePress)
  github.com => github.dev
- [vite 追加 decorators](https://www.bilibili.com/read/cv11559191/)

### 其他认知

- [网易将军令](https://www.cnblogs.com/vanishfan/p/4377260.html)

- [开发自己的脚手架(Rollup+Typescript)-(03)-(CAC 命令行交互)](https://blog.csdn.net/qq_32930863/article/details/108612122www)

- [博客搭建（一般）](https://pagic.org/zh-CN/docs/config.html)

## ES6

[你会用 ES6，那倒是用啊！](https://juejin.cn/post/7016520448204603423)
