/*For people who hate the tiresome job of maintaining their files and folders in an organized fashion, I present a FILE ORGANIZER
MADE IN NODE JS. (plus shit from the LPU kid's post)
The rules are simple: copy the file "fileOrganiser.js" (link: <GitHub link>) to whichever folder you wanna organize, and then 
run fileOrganizer.js. That's it.
Shoutout to Mohd Aman sir
*/

let fs = require('fs');
let path = require('path');

let folderPath = process.argv[2];

//error handling - check if provided path is valid
if(!fs.existsSync(folderPath))
    console.log("Please enter a valid path!");

let extnsList = {
    Audio: [".mp3", ".aac", ".wav", ".flac", ".ogg"],
    Video: [".mp4", ".mov", ".avi", ".wmv", ".mkv"],
    Text: [".txt"],
    Image: [".jpeg", ".jpg", ".png", ".heic", ".heif", ".img", ".webp", ".gif"],
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
    
    console.log(filePath,"\n");

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
































// let audio = path.join(mydir,"Audio");
// let video = path.join(mydir,"Videos");
// let text = path.join(mydir,"Text Files");
// let image = path.join(mydir,"Images");
// let docs = path.join(mydir,"Documents");
// let sw = path.join(mydir,"Applications");
// let others = path.join(__dirname, "Others");

// let arr = [audio, video, text, image, docs, sw, others];

// let arrAudio = [".mp3", ".aac", ".wav", ".flac", ".ogg"];
// let arrVideo = [".mp4", ".mov", ".avi", ".wmv", ".mkv"];
// let arrText = [".txt"];
// let arrImage = [".jpeg", ".jpg", ".png", ".heic", ".heif", ".img"];
// let arrDocs = [".doc", ".pdf", ".xlsx", ".xls", ".docx"];
// let arrSw = [".apk", ".exe", ""];
// let arrOthers = [];

