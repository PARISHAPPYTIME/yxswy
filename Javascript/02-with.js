var qs = {
    name: 1,
    age: 2,
    page: 5,
    hga: 8
}
console.log(qs.name)
console.log(qs.age)
console.log(qs.page)
console.log(qs.hga)

with (qs) {
    console.log(name)
    console.log(age)
    console.log(page)
    console.log(hga)
}