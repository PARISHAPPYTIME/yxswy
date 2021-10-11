// 参考地址 https://zhuanlan.zhihu.com/p/269124928

import myPromise from "./myPromise";

const promise = new myPromise(function (resolve, reject) {
	setTimeout(() => {
		console.log('结果返回 2000')
		reject('2000 success')
	}, 2000)
})

promise
	.then(
		res => {
			console.log('res -> ', res)
		},
		err => {
			console.log('err -> ', err)
		}
	)
	.catch((error: any) => {
		console.log('error', error)
	})

// const promise2 = new myPromise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('结果返回 4000')
// 		resolve('4000 success')
// 	}, 4000)
// })

// myPromise
// 	.all([promise, promise2])
// 	.then(res => {
// 		console.log('res => ', res)
// 	})
// 	.catch(res => {
// 		console.log('res => ', res)
// 	})


// myPromise
// 	.race([promise, promise2])
// 	.then(res => {
// 		console.log('res => ', res)
// 	})
// 	.catch((res: any) => {
// 		console.log('res => ', res)
// 	})

// promise
// 	.then(res => {
// 		console.log('then => ', res)
// 	})
// 	.catch((err: any) => {
// 		console.log('catch => ', err)
// 	})

// import axios from "axios";

// interface Path {}

// interface Swagger {
// 	basePath: string;
// 	definitions: Record<string, any>;
// 	host: string;
// 	info: {
// 		description: string;
// 		title: string;
// 	};
// 	paths: any;
// 	swagger: string;
// 	tags: { description: string; name: string }[];
// }

// const apiUrl = "/api/nbjk-zdcrb/v2/api-docs";

// axios.defaults.withCredentials = true;

// async function bootstrap() {
// 	const result = await axios.get(apiUrl);
// 	const res: Swagger = result.data;
// 	const { tags, paths, definitions } = res;

// 	const tagsMap = new Map();
// 	console.log(tags);
// 	tags.forEach((el) => {
// 		tagsMap.set(el.name, {});
// 	});

// 	// key -> api
// 	for (const [key, value] of Object.entries(paths)) {
// 		// key -> post or get
// 		for (const [method, desc] of Object.entries(value)) {
// 			// const keyStr = desc.responses["200"].schema.$ref;
// 			const keyStr = desc.parameters[0].schema.$ref;
// 			console.log(keyStr);
// 			// const keyStr = desc.summary;
// 			const key = keyStr.split("/").pop();
// 			// console.log(key);
// 			// const { summary, operationId } = desc;
// 			// console.log(definitions, summary, desc);
// 			const data = definitions[key];
// 			if (data.properties) {
// 				console.log(data.properties, key);
// 			}
// 		}
// 	}
// }

// bootstrap();
