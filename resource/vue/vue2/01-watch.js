/**

watch:{
    obj:{
        handler:'doSomething',
        deep:true,
        immediate:true
    }
},
methods:{
    doSomething(){
        //当 obj 发生变化的时候，做些处理
    }
}


watch: {
    // 你可以传入回调数组，它们会被逐一调用
    a: [
        'handle1',
        function handle2 (val, oldVal) {},
        {
            handler: function handle3 (val, oldVal) {},
        }
    ],
}

 */