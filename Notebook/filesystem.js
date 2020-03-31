/* //write files is asynchronous
fs.writeFile(myPath + "/vegeta.txt", message, err => {
    if (err) {
        console.log("error is ", err);
    }
    console.log("file works");
});

//there is also writeFileSync
const obj = {
    name: "Vegeta",
    favFilms: ["movie1", "movie2", "movie3"]
};
fs.writeFileSync(myPath + "/vegeta.json", JSON.stringify(obj, null, 4));
 */

//reading a directory
//returns an array
//async version
/* fs.readdir(myPath, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log("error im readdir ", err);
    }
    console.log("files", files);
    for (let i = 0; i < files.length; i++) {
        //const element = array[i];
        console.log("files are ", files[i].name);
        console.log("is this a file ", files[i].isFile());
        console.log("is this a directory ", files[i].isDirectory()); // exercise if it finds a folder, look inside, if not, then nope
    }
}); */

//synchronous version
/* const myDir = fs.readdirSync(__dirname, { withFileTypes: true });
console.log("myDir ", myDir);
console.log("I AM BLOCKED");
 */

//Looking at stats
/* 
fs.stat(myPath + "/index.js", (err, data) => {
    if (err) {
        console.log("err", err);
    }
    console.log("data: ", data.size);
}); */
/* 
const myStat = fs.statSync(myPath + "/index.js");
console.log("myStat ", myStat);
 */

//readfiles
/* 
fs.readFile(myPath + "/vegeta-folder/index.html", "utf8", (err, data) => {
    if (err) {
        console.log("error in readfile: ", err);
    }
    console.log("data is:", data);
}); */

//part 2 , square bracket notation
/* let obj = {};
var x = "fullName"; //key of full name //key of filename
var name = "Thabi Seg"; //value of nname //value of the size
obj[x] = name;
 */
