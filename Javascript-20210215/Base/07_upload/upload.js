import axios from "axios"

const upload = ({
	success = null,
	error = null,
	progress = null,
	url = null,
	key = null,
}) => {
	const inputElement = document.createElement("input")
	inputElement.type = "file"
	inputElement.click()
	inputElement.onchange = (e) => {
		// ----- 检查文件格式
		const formData = new FormData()
		formData.append("file", e.path[0].files[0])

		if (!url) throw new Error("文件上传地址没有提供")
		if (!key) throw new Error("文件没有专属key")
		const constKey = key

		const CancelToken = axios.CancelToken
		const source = CancelToken.source()

		axios({
			url: url,
			method: "POST",
			data: formData,
			headers: {
				// Authorization: 'Bearer 973b49a7-f9e5-4b16-a69f-22e17f1e1cda'
			},
			cancelToken: source.token,
			onUploadProgress: (progressEvent) => {
				const num = ((progressEvent.loaded / progressEvent.total) * 100) | 0 // 百分比
				progress && progress(constKey, num)
			},
		})
			.then((res) =>
				success
					? success(constKey, 100, res)
					: console.log(constKey, "文件上传成功")
			)
			.catch((err) =>
				error
					? error(constKey, 100, err)
					: console.err(constKey, "文件上传失败~")
			)
	}
}

export default upload
