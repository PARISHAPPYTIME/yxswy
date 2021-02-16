import Types from "./Enum";
class ItemData {
    id!: number
    name!: string
    type!: Types
    sex: boolean
    create_time: string

    constructor(id: number = -1, name: string = 'name', type: Types = Types.SUCCESS, sex: boolean = false) {
        this.id = id
        this.name = name
        this.sex = sex
        this.type = type
        this.create_time = this.toSelfDateString(Date.now())
    }

    toSelfDateString(itemSpan: number): string {
        // 将时间戳 转化成 日期对象
        // 使用 日期对象 的 getXXX方法 一次获取时分秒
        let date = new Date(itemSpan)
        let str = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        return str
    }
}
export default ItemData