Function.prototype.bind = function(context) {
    var _this = this
    var _args = Array.prototype.slice.call(arguments, 1)
    return function() {
        _this.apply(
            context,
            _args.concat(Array.prototype.slice.call(arguments))
        )
    }
}

const obj = { name: 1293 }
function getObj() {
    console.log(this.name)
}

getObj.bind(obj, 1, 2, 3)(9)