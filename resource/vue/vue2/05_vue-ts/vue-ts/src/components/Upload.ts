enum FILESTATE{
    SUCCESS = 0,
    ERROR = 1,
    LOADING = 2
}

interface UploadBean {
    fileId: string
    fileName: string
    fileState: FILESTATE
    fileCreateTime: string
}

class Upload {
    fileList: Array<UploadBean> = []
    head: string
    constructor(head: string) {
        this.head = head
    }
    add(item: UploadBean): string {
        this.fileList.push(item)
        return '新增成功'
    }
    del(index: number):void {
        if(index < 0 || index > this.fileList.length - 1) throw new Error("索引存在异常")
        this.fileList.splice(index, 1)
    }
    upload() {
        setTimeout(() => {
            console.log('文件上传成功')
        }, 2000)
    }

}

export default Upload
