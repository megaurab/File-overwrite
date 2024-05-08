import fs from "fs";
import crypto from "crypto";

const directory = ""; //provide the directory you want to be overwritten!!


function traverse(directory){
    const insideItems = fs.readdirSync(directory);

    for(let items of insideItems){
        const itemsDirectory = `${directory}\\${items}`;
        const stats = fs.statSync(itemsDirectory);

        if(stats.isDirectory()){
            traverse(itemsDirectory);
        }
        else if(stats.isFile()){
            overwrite(itemsDirectory);
        }
    }
}

function overwrite(filePath) {
    const randomData = crypto.randomBytes(1024);
    fs.writeFileSync(filePath, randomData);

    console.log(`Overwritten: ${filePath}`);
}

traverse(directory);