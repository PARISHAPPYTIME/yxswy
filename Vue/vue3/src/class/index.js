const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");

console.log(COLOR_RED)

function getTest(v) {
    if (v === COLOR_RED) {
        console.log('ok')
    }
}

console.log(getTest(COLOR_RED))

class BaseClass {
    constructor(_id) {
        this._id = _id
    }
}

const baseClass = new BaseClass('pages.login.accountLogin.errorMessage')
console.log()