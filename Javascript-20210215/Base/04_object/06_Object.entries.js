const obj1 = {
    a: 1,
    b: 2,
    c: 3
}
for(let [key,value] of Object.entries(obj1)){
	console.log(`key: ${key} value:${value}`)
}
//key:a value:1
//key:b value:2
//key:c value:3