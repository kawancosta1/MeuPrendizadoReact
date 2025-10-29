const express = require('express');

const app =  express();


app.get('/', (req,res) => {
res.send(`
    <form action = "/" method = "POST">
    Nome do cliente: <input type = "text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req,res) => {

    res.send('Recebi o formulario')
})


app.listen(4000, () => {
    console.log('Acessar http://localhost:4000')
    console.log("servidor na porta 4000")

});
//criando rotas 
app.get('/contato',(req,res) => {
    res.send('Obrigado por entrar em contato');
})

//obs, sav-dev é dependecias d desenvolvimento, ou seja, o projeto n depende disso pra existir,, mas, sim, para desenvolver ele