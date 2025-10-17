const nome = 'luiz';
const sobrenome = 'Miranda';

const falanome = () => {

    console.log(nome,sobrenome)

}

exports.nome = nome 
exports.sobrenome = sobrenome
exports.falanome = falanome
//podemos usar o this ao inves do export
this.qualquercoisa = 'o que eu quiser '

console.log(module.exports)