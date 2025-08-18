const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3006);

app.get('/', (req, res) => {

     const blogs = [
        {titulo: 'Chamander', conteudo: 'A ponta do seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte'},
        {titulo: 'Squirtle', conteudo: 'Seu casco reduz a resistência contra a água fazendo com que ele nade mais rápido'},
        {titulo: 'Bulbasaur', conteudo: 'Ao evoluir o bulbo começa a desabrochar até se tornar uma grande flor na evolução final'},
    ];

    res.render('home', {titulo: 'Home - Página Inicial', blogs});
});

app.get('/servicos', (req, res) => {
    res.render('servicos', {titulo: 'Nossos Serviços'});
});

app.get('/sobrenos', (req, res) => {
    res.render('sobre', {titulo: 'Sobre Nós',});
});

app.get('/contatos', (req, res) => {
    res.render('contatos', {titulo: 'Contatos - Fale Conosco',});
});

