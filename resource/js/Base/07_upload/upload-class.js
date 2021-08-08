// import axios from 'axios'

class Upload {
  file = null
  url = null
  key = null
  constructor({ url = '', key = '' }) {
    this.url = url
    this.key = key
    this.beforeUpload()
    this.upload()
  }
  beforeUpload() {
    console.log('文件上传前 验证')
  }
  upload() {
    console.log('文件上传中')
    setTimeout(() => {
      console.log('文件上传结束')
      this.afterUpload()
    }, 2900)
  }
  afterUpload() {
    console.log('文件上传结束后的操作')
  }
}

const upload = new Upload({ url: '1', key: 5 })
