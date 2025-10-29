//coloquei pra ele retornar promises pois quero que ele leia, ai me mande o resultado
const fs = require('fs').promises;
const path = require('path')

//fs vai escanear as pastas(no caso a readdir é assincrona, ou seja, o programa funciona normalmente mesmo com ela sendo "ativada")
fs.readdir(path.resolve(__dirname)).then(files => console.log(files)).catch(e => console.log(e))


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  Walk(files,rootDir); 
}

//esse walk vai "andar" pelos arquivoos
async function Walk(files,rootDir){
    for(let file of files){
        const fileFallPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFallPath)
        console.log(file,stats.isDirectory())
    }
}

readdir('/mnt/c/Users/BIBLI6USER/Documents/javascript/MeuPrendizadoReact');