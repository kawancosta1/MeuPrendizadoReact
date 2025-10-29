const express = require('express');
//carregando express
const app =  express();

//https://meusite.com/ <- GET -> Entregue a pagina

//o que uma api deve ser capaz
//CRUD -> CREATE,READ,UPDATE,DELETE
//          POST GET   PUT   DELETE

//nessa aula vamos só ler

//https://meusite.com/sobre GET vai entregar a pagina sobre

//assim que o cliente acessar a '/', damos a resposta
// a res é oq eu vou mandar pro servidor

//aqui eu vou pegar os dados do formulario, ai o post envia
app.get('/', (req,res) => {
res.send(`
    <form action = "/" method = "POST">
    Nome: <input type = "text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})
//post vai enviar os dados do formulario 
app.post('/', (req,res) => {

    res.send('Recebi o formulario')
})
//porém, precisamos abrir uma porta e falar pro servidaor prestar atenção ness porta 

app.listen(4000, () => {
    console.log('Acessar http://localhost:4000')
    console.log("servidor na porta 4000")

});
//criando rotas 
app.get('/contato',(req,res) => {
    res.send('Obrigado por entrar em contato');
})