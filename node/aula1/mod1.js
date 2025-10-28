const mod1 = require('./app');
const path = require('path');
const axios = require('axios')

// usando o que foi exportado
mod1.falaNome(); // Luiz Miranda
console.log(mod1.QualquerCoisa); // hahahha eu

// usando a classe Pessoa
const p1 = new mod1.Pessoa('Kawan');
console.log(p1.nome); // Kawan

//o axios retorna uma promisse
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json').then(response => console.log(response.data)).catch(e => console.log(e))
