// static typing

var message : String = "Hello World!"
//message = 10

var number : Number = 10
var check : Boolean = true

// variable declared can be assigned to any type
var x : any = 10
x = "hello"
x = 9.81
x = false

console.log (`Message: ${message}, type: ${typeof message}`)
console.log (`Number: ${number}, type: ${typeof number}`)
console.log (`Check: ${check}, type: ${typeof check}`)
console.log (`X: ${x}, type: ${typeof x}`)

//Union Type
var y : number | string
y = 10
console.log (`Y: ${y}, type: ${typeof y}`)

y = "hello"
console.log (`Number: ${y}, type: ${typeof y}`)

function addNumber (a: number, b: number): number {
    return a + b
}

console.log (`addNumber(5,4): ${addNumber(5,4)}`)

let result = addNumber(10,23)
console.log(`result: ${result}`);


