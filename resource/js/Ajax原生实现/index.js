function ajax(options) {
    const url = options.url
    const type = options.type
    const dataType = options.dataType
    const xhr = new XMLHttpRequest()
    const result = undefined
    xhr.open(type, url, true)
    xhr.send(options.data)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('成功')
            if (dataType === 'json') {
                result = JSON.parse(xhr.responseText)
            } else {
                result = xhr.responseText
            }
        }
    }
}

ajax({
    type: 'get',
    url: 'http://www.baidu.com/',
    data: {},
    dataType: 'json'
})