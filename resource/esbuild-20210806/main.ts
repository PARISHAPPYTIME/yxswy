enum Names {
    success = 1
}

const a: Names.success = 1

console.log(a)

function TestMyDer() {
    console.log(arguments)
}

export function powerFunc() {
    console.log('powerFunction')
    TestMyDer()
}

powerFunc()