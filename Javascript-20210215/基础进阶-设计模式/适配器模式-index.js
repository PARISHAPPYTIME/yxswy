// 适配器模式是将一个类（对象）的接口（方法或属性）转换成另外一个符合我们使用规范的类（对象）。
// 它可已经将一些不兼容的接口放在一起正常的工作

// 当我们需要对接口的提供者喝消费者进行兼容的时候，
// 对旧代码的渐进式的改造以及对某些已有老接口的改造。

class Power {
    constructor() {
        this.serverVoltage = 100
        this.serverShape = "triangle"
    }
}
class Device {
    constructor() {
        this.consumerVoletage = 220
        this.consumerShape = "douple"
    }
    usePower(power) {
        if (!power) return console.log("请接入电源")
        if (power.serverVoltage !== 220 || power.serverShape !== "douple") return console.log("电源不符合规范")
    }
}
class Adapter {
    constructor() {
        this.serverVoltage = 220
        this.serverShape = "douple"
    }
    usePower(power) {
        if (!power) return console.log("请接入电源")
        if (power.serverVoltage !== 100 || power.serverShape !== "triangle") return console.log("电源不符合规范")
        console.log(2)
        this.consumerVoletage = 100
        this.consumerShape = "triangle"
    }
}
var myPower = new Power()
var myDevice = new Device()
var myAdapter = new Adapter()
myAdapter.usePower(myPower)
myDevice.usePower(myAdapter)
