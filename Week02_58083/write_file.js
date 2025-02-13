const fs = require('fs');

/*
w - write
r - read only
a - append
r+ - read and write
w+ - write and read
ws - write sync
 */

var dataBuffer = Buffer.from("Hey from GBC")

//Async
//if file exists, existing data will be overwritten
fs.writeFile("output_file.txt", dataBuffer, (err) => {
    if (err) {
        console.error(`Error while writing output_file.txt: ${JSON.stringify(err)}`);
    }else{
        console.log(`data written successfully to output_file.txt:${dataBuffer}\n`);
    }
})

dataBuffer = Buffer.from("\nThis will be appended to the existing content in input_file")

//Async
fs.writeFile("output_file.txt", dataBuffer,{ flag: "a"}, (err) => {
    if (err) {
        console.error(`Error while writing output_file.txt: ${JSON.stringify(err)}`);
    }else{
        console.log(`data written successfully to output_file.txt:${dataBuffer}\n`);
    }
})

//write to file synchronously
let err = fs.writeFileSync("output_file.txt", dataBuffer)
if (err){
    console.log(`Error while writing output_file.txt synchronously: ${JSON.stringify(err)}`);
}else{
    console.log(`data written successfully to output_file.txt:${dataBuffer}`);
}