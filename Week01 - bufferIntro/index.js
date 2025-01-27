console.log(`Week 01 - Buffer Example`);

console.log(`filename: ${__filename}`);
console.log(`directory name: ${__dirname}`)

//create a buffer from a string
let buf1 = Buffer.from('A Hello')
// template literals
console.log(`buf1: ${buf1}`);

console.log(`buf1[0]: ${buf1[0]}`);
console.log(`buf1[1]: ${buf1[1]}`);
console.log(`buf1[2]: ${buf1[2]}`);

console.log(buf1);
console.log(buf1.toString());

console.log(`\n Buffer Changed`)


// Task write a loop to go through each element of buf1 and splay on console

for (let i = 0; i < buf1.length; i++) {
    console.log(`buf1[${i}]: ${buf1[i]}`)
}
for (element of buf1) {
    console.log(element);
    console.log('Template Literal')
    console.log(`element: ${element}`);
}

buf1 = Buffer.from('🔥🔥');


// Buffer.alloc() - creates buffer with specified size
let buf2 = Buffer.alloc(7)
console.log(buf2)
console.log(`buf2: ${buf2}`);

// created buffer with size 4; all elements will have the default valut 'p'
buf2 = Buffer.alloc(4, 'p')
console.log(buf2)
console.log(`buf2: ${buf2}`);

// created buffer with size 4; all elements will have the default valut 'A'; A = 65
buf2 = Buffer.alloc(9, 65)
console.log(buf2)
console.log(`buf2: ${buf2}`);

buf2.write('NodeJS')

buf2 = Buffer.from('🔥')