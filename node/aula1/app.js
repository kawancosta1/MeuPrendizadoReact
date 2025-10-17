const path = require('path')
//nesse caso, eu instalei o axios por npm i axios, e apenas coloquei o nome sem indicar o caminho, pq a pasta nodemodules é conhecida pelo js 
const axios = require('axios')
const mod1 = require('./mod1')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json').then(response => console.log(response.data))
.catch(e => console.log(e))
// o mod é exportado como se fosse um "objeto"
mod1.falanome()
//ou 

const falanome = mod1.falanome()

//ou
 const {nome,sobrenome,falaNome} = require('./mod1')

 //ou

class pessoa{
    constructor(nome,idade,altura,curso){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.curso = curso
    }
}

const p1 = new pessoa("kawan",21,185,"sistemas de informação")

//assim criamos uma class!
console.log(p1.nome,p1.idade,p1.altura,p1.curso)