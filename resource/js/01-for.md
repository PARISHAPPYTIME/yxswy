#### break 跳出到最外层的 for 循环外面

```javascript
outermoset: for (var i = 0; i < 5; i++) {
	for (var j = 0; j < 9; j++) {
		console.log(j, i);
		if (j > 4) {
			break outermoset;
		}
	}
}
```

#### continue 会继续外层 for 循环的语句，而停止内层循环的语句
```javascript
outermoset: for (var i = 0; i < 5; i++) {
	for (var j = 0; j < 9; j++) {
		console.log(j, i);
		if (j > 4) {
			continue outermoset;
		}
	}
}
```
