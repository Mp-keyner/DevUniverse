const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

app.use('/', express.static(path.join(__dirname, 'main')));

app.use('/tierra', express.static(path.join(__dirname, '/tierra')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    res.status(404).render('error', { errorMessage: "La página solicitada no existe" });
});
