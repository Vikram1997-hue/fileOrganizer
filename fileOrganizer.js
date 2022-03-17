let fs = require('fs');
let path = require('path');

let folderPath = process.argv[2];

//error handling - check if provided path is valid
if(!fs.existsSync(folderPath))
    console.log("Please enter a valid path!");
else {


    let extnsList = {
        Audio: [".mp3", ".aac", ".wav", ".flac", ".ogg"],
        Videos: [".mp4", ".mov", ".avi", ".wmv", ".mkv"],
        Text: [".txt"],
        Images: [".jpeg", ".jpg", ".png", ".heic", ".heif", ".img", ".webp", ".gif"],
        Documents: [".doc", ".pdf", ".xlsx", ".xls", ".docx"],
        Software: [".apk", ".exe"]
    };




    let files = fs.readdirSync(folderPath);

    for(let i=0 ; i<files.length ; i++) {

        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        console.log(files[i],"--->",nameOfFolder);

        let myFolder = path.join(folderPath, nameOfFolder);
        if(!fs.existsSync(myFolder))
            fs.mkdirSync(myFolder);

        let filePath = path.join(folderPath, files[i]);
        


        //moving part begins
        let src = filePath;
        let dest = path.join(myFolder,files[i]);
        console.log("Src:",src);
        console.log("Dest:",dest,"\n");
        fs.copyFileSync(src, dest);
        fs.unlinkSync(src);

    }


    function giveFolderName(ext) { 

        for(let key in extnsList) { //key becomes "Audio", then "Video", then "Text",... "Software"
    
            let tempArr = extnsList[key];
            for(let i=0 ; i<tempArr.length ; i++) {
                
                if(ext == tempArr[i])
                    return key;
            }
        }
        return "Others";
    };
    
}


