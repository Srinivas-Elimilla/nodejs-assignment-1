const fs = require('fs/promises')

const myFileWriter =async (fileName, fileContent) => {
	await fs.writeFile(fileName,fileContent)
	
}

const myFileReader = async (fileName) => {
	await fs.readFile(fileName,(err,data)=>{
		if(err) console.log('no file found');
		else console.log(data.toString());
	})
}


const myFileUpdater = async (fileName, fileContent) => {
	await fs.appendFile(fileName,fileContent,(err)=>{
		if(err){
			console.log('file not found');
		}
		else console.log(fileContent);
	})
}

const myFileDeleter = async (fileName) => {
	await fs.unlink(fileName,(err)=>{
		if (err){
			console.log(err);
		}
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
myFileWriter('newfile.txt','New File is created');
// myFileReader('./newfile.txt')
// myFileUpdater('newfile.txt','It is updated data');
// myFileDeleter('newfile.txt')