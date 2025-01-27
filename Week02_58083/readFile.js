const fs = require('fs')

console.log(`Week 2 - fs module`);
console.log(`FIle reading operations`);


console.log(`\nTrying to read input_file.txt...`)
//fs.readFile() reads file asynchronously
fs.readFile("input_file.txt",(err, data) => {
    if (err) {
        console.log(`Error reading input_file.txt:
        ${JSON.stringify(err)}`);
    }

    // no error - use the data
    if (data){
        console.log(`data from input_file.txt: ${data}`)
    } else {
        console.log(`no data available from file`);
    }

})

//fs.readFileSync() reads file Synchronously
// and return Buffer with file data
const fileData = fs.readFileSync("input_file.txt")
console.log(`fileData from input_file.txt: ${fileData.toString()}`);

console.log(`\nEnding synchronous file read`);

// asynchronous function
const readFileData = async() => {
    try{
        const data = await fs.promises.readFile("input_file.txt")
        console.log(`\nfileData from async function: ${data}`);
    }catch (err){
        console.log(`Error reading async function to read file:`)
    }
}

readFileData()