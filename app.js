const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3006);

app.get('/', (req, res) => {
    res.render('home', {titulo: 'Home - Página Inicial'});
});

app.get('/servicos', (req, res) => {
    res.render('servicos', {titulo: 'Nossos Serviços'});
});

app.get('/sobre', (req, res) => {
    res.render('sobre', {titulo: 'Sobre Nós',});
});

app.get('/contatos', (req, res) => {
    res.render('contatos', {titulo: 'Contatos - Fale Conosco',});
});

app.use((req, res) => {
    res.status(404).render('404', {titulo: 'ERRO 404'});
});