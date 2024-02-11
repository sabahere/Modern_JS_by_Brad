// const fs = require("fs");
const { rename } = require("fs");
const fs = require("fs/promises");

//WRITE TO A FILE //

//Callback verison
// fs.writeFile("file1.txt", "Hello World", (err) => {
//   if (err) throw err;
//   console.log("File Created");
// });

//Promise Version
// fs.writeFile("file2.txt", "Hello World 2")
//   .then(() => {
//     console.log("File Created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Sync Version
// fs.writeFileSync("file3.txt", "Hello World 3");
// console.log("File created");

//Async-await version

async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log("File created");
  } catch (error) {
    console.log(error);
  }
}

//READ FILE//

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

//DELETE A FILE //

async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} deleted`);
  } catch (error) {
    console.log(error);
  }
}

//Rename a file //

function renameFile(oldName, newName) {
  fs.rename(oldName, newName)
    .then(() => {
      console.log("File Renamed");
    })
    .catch((err) => {
      console.log(err);
    });
}

//Create a folder//
async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`${folderName} has created.`);
  } catch (error) {
    console.log(error);
  }
}

// createFolder("Folder1");

// renameFile("file1.txt", "file.txt");

// deleteFile("file4.txt");

// createFile("file4.txt", "Hello world 4");
// readFile("file1.txt");
// readFile("file3.txt");
// readFile("file4.txt");
