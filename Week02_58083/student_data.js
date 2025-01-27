const fs = require('fs');

fs.readFile("students.csv", 'utf8', (err, data) => {
    if (err){
        console.log(`Error while reading students.csv: ${JSON.stringify(err)}`);
    }

    //data will be in Buffer
    //no error - use the data
    if (data){
        //console.log(`Async data - from input_file.txt:\n ${data}`);
        const rows = data.split('\n');
         rows.forEach(row => {
             const columns = row.split(',')
             const program = columns[2]

             if(program !== undefined){
                 let filename = `${program}.txt`
                 let dataToWrite = `${row}\n`

                 fs.appendFile(filename, dataToWrite, 'utf-8', (writeErr) => {
                     if (writeErr){
                         console.log(`Unable to write to file: ${JSON.stringify(writeErr)}`);
                     }else{
                         console.log(`data successfully written: ${filename}`)
                     }
                 })
             }
         })
    }else{
        console.log(`No data available from file`);
    }
})