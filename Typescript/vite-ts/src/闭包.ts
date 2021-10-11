// (function autorun() {
//     let x = 1
//     function log() {
//         console.log(x)
//     }
//     log()
// })();

// (function autorun(p) {
//     let x = 1;
//     setTimeout(function log() {
//         console.log(x);//1
//         console.log(p);//10
//     }, 10000)
// })(10);

// (function autorun() {
//     let x = 1;
//     function log() {
//         console.log(x);
//     };

//     function run(fn: () => void) {
//         let x = 100;
//         fn();
//     }

//     run(log);//1
// })();

// let todoPrototype = {
//     id: '',
//     userName: '',
//     toString: function (): string {
//         return this.id + " " + this.userName
//     }
// }
// function Todo(todo: any) {
//     let newTodo = Object.create(todoPrototype);
//     Object.assign(newTodo, todo);
//     return newTodo;
// }
// console.log(Todo({ hehe: true }))

// let Todo = (function createTodoFactory() {
//     let todoPrototype = {
//         id: '',
//         userName: '',
//         toString: function (): string {
//             return this.id + " " + this.userName
//         }
//     }
//     return function (todo: any) {
//         let newTodo = Object.create(todoPrototype);
//         Object.assign(newTodo, todo);
//         return newTodo;
//     }
// })();
// let todo = Todo({ id: 1, title: "This is a title", userName: "Cristi", completed: false });
// console.log(todo)

function createAGenerate(count: number, increment: number) {
    return function () {
        count += increment;
        return count;
    }
}
let generateNextNumber = createAGenerate(0, 1);
console.log(generateNextNumber()); //1
console.log(generateNextNumber()); //2
console.log(generateNextNumber()); //3
let generateMultipleOfTen = createAGenerate(0, 10);
console.log(generateMultipleOfTen()); //10
console.log(generateMultipleOfTen()); //20
console.log(generateMultipleOfTen()); //30