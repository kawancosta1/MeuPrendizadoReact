const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => {
  console.log(nome, sobrenome);
};

// Exportando propriedades
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.QualquerCoisa = 'hahahha eu';

console.log(module.exports);

// Definindo e exportando uma classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;
