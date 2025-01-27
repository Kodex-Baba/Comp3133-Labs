const fs = require('fs');

//opens the file is read write mode
fs.open("data.txt", "r+", (err, fd) => {
    if (err){
        console.log(`Unable to open data.txt due to report: ${JSON.stringify(err)}`);
    } else{
        console.log(`File successfully opened for processing`)
    }

    let dataBuffer = Buffer.alloc(7)
    const dataFromFile = fs.readSync(fd, dataBuffer, 0, Buffer.length)

    console.log(`dataBuffer: ${dataBuffer}`);
    console.log(`dataFromFile: ${dataFromFile}`);

    let dataToWrite = "\nThis is a new line to write to data.txt"
    fs.write(fd, dataToWrite, (err) => {
        if (err){
            console.log(`Unable to write data.txt due to report: ${JSON.stringify(err)}`);
        }else{
            console.log(`Data successfully written to data.txt`);
            fs.close(fd)
        }
    })
})