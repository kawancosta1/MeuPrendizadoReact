const fs = require('fs').promises
const path = require('path')

//esses 2 pontos é para escrveer em uma pasta superior a modeules
const caminhoArquivo = path.resolve(__dirname,'..','text.txt');
//escrevendo no arquivo
//a flag: 2 é para apagar tudo do arquivo e escrveer frase 1
fs.writeFile(caminhoArquivo,'Frase1\n',{ flag: 'w', encoding: 'utf8'})
const caminhoArquivo2 = path.resolve(__dirname,'..','text2.txt');
//flag a para adicionar a cada execucção
fs.writeFile(caminhoArquivo2,'Frase1\n',{ flag: 'a', encoding: 'utf8'})

//além de pegar o caminho do arquivo, eu posso criar um arquivo com o path
const caminhoArquivo3 = path.resolve(__dirname,'..','text.json');

const ler = require('./ler')
// const pessoas = [{nome: 'joao'},
//     {nome: 'maria'},
//     {nome: 'pedrao'},
//     {nome: 'let'},
//     {nome: 'uiuiui'},
// ]

//transformando array em json, ai eu coloco um espaço e 2, para separar certinho

//const json = JSON.stringify(pessoas,'',2)

//fs.writeFile(caminhoArquivo3,json, {flag: 'w'})

async function lerArquivo(caminho){
    //essa funcao ler, retorna uma promise
   const dados = await ler(caminho)
   renderiza(dados)

}

function renderiza(dados){
    dados = JSON.parse(dados)
    dados.forEach(val => {
        console.log(val.nome)
    });
}

lerArquivo(caminhoArquivo3)




