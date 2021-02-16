async function process(array) {
  for await (let i of array) {
    doSomething(i);
  }
}

function doSomething(i) {
    console.log(i)
}